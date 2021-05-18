import fs from 'fs'
import { resolve, relative, join } from 'path'
import forge from '@cto.ai/ops-ctrl-forge'

const { opendir } = fs.promises

export const describe = 'Create a new op.'

export const positionals = ['name']

export const $kind = {
  alias: 'k',
  describe: 'The kind of op to create (command/pipeline)',
  initial: 'command',
  type: 'string'
}

export const $template = {
  alias: 't',
  describe: 'The name or GitHub URL of the template to use',
  required: true,
  type: 'string'
}

export default async function * init ({ inputs }) {
  class Fail extends (yield Error) { command = init }
  yield { ns: 'auth' }
  const { kind = 'command', template } = inputs
  if (!inputs.template) throw new Fail('The --template flag is required')

  yield { ns: 'print', message: MSG_NAME_PREAMBLE(kind) }

  const { name } = inputs.name
    ? inputs
    : (yield {
        ns: 'prompt',
        type: 'input',
        name: 'name',
        message: '🏷  Name:',
        validate (input) {
          if (input === '') return 'You need name your Op before you can continue'
          if ((/^[a-z0-9_-]*$/).test(input) === false) {
            return 'Sorry, please name the Op using only numbers, lowercase letters, -, or _'
          }
          return true
        }
      })

  yield { ns: 'print', message: MSG_DESC_PREAMBLE }

  const { description } = yield {
    ns: 'prompt',
    type: 'input',
    name: 'description',
    message: '✍️  Description:',
    validate (input) {
      if (input === '') return 'You need to provide a description of your Op before continuing'
      return true
    }
  }
  yield { ns: 'spinner', action: 'start', message: 'Initializing op' }

  const instance = await forge()
  const initializer = instance.init({
    from: template,
    to: resolve(name),
    kind,
    name,
    description
  })
  try {
    let { value } = await initializer.next()
    if (value.label === 'downloading') {
      yield { ns: 'spinner', action: 'start', message: 'Downloading and unpacking template' }
      value = (await initializer.next()).value
    }
    yield { ns: 'spinner', action: 'stop' }
    yield { ns: 'print', message: MSG_SUCCESS }
    const { dir } = value
    yield {
      ns: 'analytics',
      event: 'Ops CLI Init',
      name,
      namespace: ({ team }) => `@${team.name}/${name}`,
      path: dir,
      description: description,
      templates: [kind]
    }
    const path = './' + relative(process.cwd(), dir)
    for await (const { name } of await opendir(dir)) {
      const startHere = /main|index/.test(name) ? MSG_START_HERE : ''
      yield { ns: 'print', message: `📁 {italic ${join(path, name)}}${startHere}` }
    }
    yield { ns: 'print', message: MSG_TIP(name) }
  } catch (err) {
    switch (err.code) {
      case 'ERR_KIND_NOT_RECOGNIZED':
      case 'ERR_TEMPLATE_NOT_FOUND':
      case 'ERR_TEMPLATE_DOWNLOAD_FAILED': throw new Fail({ err, code: err.code, type: 'print' }, ERR_FAIL(err))
      default: throw new Fail({ err, code: err.code }, err.message)
    }
  } finally {
    yield { ns: 'spinner', action: 'stop' }
  }
}

const MSG_SUCCESS = `
🎉 Success! Your new Op is ready to start coding...
`

const MSG_START_HERE = ' {tuxSuccess ←} {tuxEmphatic Start developing here!}'

const MSG_NAME_PREAMBLE = (kind) => `
Provide a name for your new ${kind} {tuxSuccess →}
{tuxSecondary Names must be lowercase}`

const MSG_TIP = (name) => `
🚀 To try out your Op run: {tuxTerm ops run ${name}}
`

const MSG_DESC_PREAMBLE = `
Provide a description {tuxSuccess →}`

const ERR_FAIL = ({ message }) => `{tuxEmphatic ❗ Sorry, we were unable to initialize this template. ${message}}`
