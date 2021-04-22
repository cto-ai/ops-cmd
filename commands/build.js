import { resolve, dirname } from 'path'
import forge from '@cto.ai/ops-ctrl-forge'
import { dockerConnect } from './$.js'

export const describe = 'Build your op for sharing.'

export const positionals = ['dir']

export const $nocache = {
  describe: 'Do not use cache when building the image',
  type: 'boolean'
}

export const $op = {
  describe: 'An op from ops.yml you want to build',
  example: 'ops build --op commandName --op serviceName --op pipelineName .',
  repeatable: true,
  required: true,
  type: 'string'
}

export default async function * build ({ settings, inputs }) {
  yield { ns: 'auth' }
  class Fail extends (yield Error) { command = build }
  const { tokens, team, user } = yield { ns: 'config', action: 'read' }
  const op = inputs.dir ? dirname(resolve(process.cwd(), inputs.dir)) : process.cwd()
  const { api, registry } = settings
  if (!inputs.op) throw new Fail({ type: 'print' }, ERR_OP_FLAG)
  const select = inputs.op
  const cache = !inputs.nocache
  const instance = await forge({ dockerMissingRetry: true })
  const builder = instance.build({ op, api, registry, select, tokens, team: team.name, cache })
  try {
    for await (const info of builder) {
      yield * dockerConnect(info, builder, Fail)
      if (info.isForgeWarning) yield { ns: 'print', type: 'warn', message: info.message }

      const { label, type } = info

      if (label === 'docker-output') {
        if (type === 'status') yield { ns: 'spinner', action: 'start', message: info.output }
        else yield { ns: 'print', type: 'raw', message: info.output }
      }

      if (label === 'building') {
        yield { ns: 'print', message: MSG_BUILDING(info) }
        yield {
          ns: 'analytics',
          event: 'Ops CLI Build',
          username: user.username,
          team: team.name,
          name: info.name,
          version: info.version,
          // description: info.description,
          namespace: `@${team.name}/${info.name}`,
          namespace_version: `@${team.name}/${info.name}:${info.version}`,
          image: `${registry}/${info.name}:${info.version}`
        }
      }

      if (label === 'built') yield { ns: 'print', message: MSG_BUILT(info) }
    }
  } catch (err) {
    if (err instanceof Fail) throw err
    if (err.errors) err = err.errors[0] // eslint-disable-line
    switch (err.code) {
      case 'ERR_NAME_INVALID':
      case 'ERR_DESC_INVALID':
      case 'ERR_VERSION_INVALID':
      case 'ERR_NO_PUBLIC':
      case 'ERR_NO_RUN':
      case 'ERR_PIPELINE_JOBS_INVALID':
      case 'ERR_PIPELINE_JOB_NAME_INVALID':
      case 'ERR_PIPELINE_JOB_DESC_INVALID':
      case 'ERR_ENV_VAR_INVALID':
      case 'ERR_SERVICE_DOMAIN_INVALID': throw new Fail({ err, code: err.code, type: 'print' }, ERR_OPS_YML(err))
      default: throw new Fail({ err, code: err.code }, err.message)
    }
  } finally {
    yield { ns: 'spinner', action: 'stop' }
  }
}

const ERR_OP_FLAG = '{tuxEmphatic ❗ The --op flag is required}'

const MSG_BUILDING = ({ name, version }) => `🛠  Building: {tuxCallOut ${name}:${version}}`
const MSG_BUILT = ({ run, publish }) => `
💻 Run {tuxSuccess $} {italic.dim ops run ${run}} to test your op.
📦 Run {tuxSuccess $} {italic.dim ops public ${publish}} to test your op.
`
const ERR_OPS_YML = ({ message }) => `{tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ${message}}`
