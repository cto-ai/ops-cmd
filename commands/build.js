import { resolve, dirname } from 'path'
import forge from '@cto.ai/ops-ctrl-forge'
import { dockerConnect } from './$.js'

export const describe = 'Build your op for sharing.'

export const positionals = ['dir']

export const $nocache = {
  describe: 'Do not use cache when building the image',
  type: 'boolean'
}

export const $ops = {
  describe: 'List of ops from ops.yml you want to build.',
  example: 'ops build . --ops commandName serviceName pipelineNamex',
  type: 'list'
}

export default async function * build ({ settings, inputs }) {
  yield { ns: 'auth' }
  class Fail extends (yield Error) { command = build }
  const { tokens, team, user } = yield { ns: 'config', action: 'read' }
  const op = inputs.path ? dirname(resolve(process.cwd(), inputs.path)) : process.cwd()
  const { api, registry } = settings
  const select = inputs.ops
  const cache = !inputs.nocache
  const instance = await forge({ dockerMissingRetry: true })
  const builder = instance.build({ op, api, registry, select, tokens, team, cache })
  try {
    for await (const info of builder) {
      yield * dockerConnect(info, builder, Fail)
      if (info.isForgeWarning) yield { ns: 'print', type: 'warn', message: info.message }

      const { label } = info

      if (label === 'docker-output') yield { ns: 'print', type: 'raw', message: info.output }

      if (label === 'building') {
        yield { ns: 'print', message: MSG_BUILDING(info) }
        yield {
          ns: 'analytics',
          event: 'Ops CLI Build',
          username: user.username,
          team,
          name: info.name,
          version: info.version,
          // description: info.description,
          namespace: `@${team}/${info.name}`,
          namespace_version: `@${team}/${info.name}:${info.version}`,
          image: `${registry}/${info.name}:${info.version}`
        }
      }

      if (label === 'built') yield { ns: 'print', message: MSG_BUILT(info) }
    }
  } catch (err) {
    if (err instanceof Fail) throw err
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
      case 'ERR_SERVICE_DOMAIN_INVALID': throw new Fail({ err, code: err.code }, ERR_OPS_YML(err))
      default: throw new Fail({ err, code: err.code }, err.message)
    }
  }
}

const MSG_BUILDING = ({ name, version }) => `🛠  Building: {tuxCallOut ${name}:${version}}`
const MSG_BUILT = ({ run, publish }) => `
💻 Run {tuxSuccess $} {italic.dim ops run ${run}} to test your op.
📦 Run {tuxSuccess $} {italic.dim ops public ${publish}} to test your op.
`
const ERR_OPS_YML = ({ message }) => `{tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ${message}}`
