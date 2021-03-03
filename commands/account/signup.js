import createAccount, { validate, identity } from '@cto.ai/ops-ctrl-account'

import { MSG_NO_TEAMS, userTeams } from './$.js'

export const describe = 'Creates an account to use with ops CLI.'

export default async function * signup ({ settings }) {
  yield { ns: 'print', message: MSG_SUPPORT }

  yield { ns: 'spinner', action: 'start', message: MSG_AUTH }

  class Fail extends (yield Error) { command = signup }

  const { auth, api } = settings

  const account = createAccount(auth)

  const config = yield { ns: 'config', action: 'read' }

  try {
    if (config.tokens) {
      await account.signout(config.tokens)
    }
  } catch (err) {
    yield { ns: 'print', message: MSG_SIGNOUT_FAILED, interpolate: [err.message] }
  }

  const transaction = account.signup()

  const { value: url } = await account.endpoints.next()
  yield { ns: 'print', message: MSG_ADVICE(url) }

  const tokens = await transaction

  if (!tokens) {
    yield { ns: 'spinner', action: 'stop', message: MSG_FAILED }
    throw new Fail(MSG_TOKENS_MISSING)
  }

  try {
    validate(tokens)
  } catch {
    yield { ns: 'spinner', action: 'stop', message: MSG_FAILED }
    throw new Fail(MSG_NOT_FOUND)
  }

  const user = identity(tokens)
  const { username } = user

  let teams = null
  try {
    teams = await userTeams(api, tokens)
  } catch (err) {
    throw new Fail({ type: 'api', err }, err.message)
  }
  if (!teams || teams.length === 0) {
    throw new Fail({ type: 'api' }, MSG_NO_TEAMS)
  }

  const team = teams.find(({ name }) => name === username)

  yield { ns: 'config', action: 'update', state: { user, team, tokens } }

  yield { ns: 'analytics', event: 'Ops CLI Signup', username }

  yield { ns: 'spinner', action: 'stop' }
  yield { ns: 'print', message: MSG_WELCOME }
}

const MSG_AUTH = 'Authenticating using Single Sign On'
const MSG_NOT_FOUND = `🤔 Sorry, we couldn’t find an account with that email or password.
Forgot your password? Run {bold ops account:reset}
`
const MSG_TOKENS_MISSING = 'Tokens missing'
const MSG_SIGNOUT_FAILED = '\n\n⚠️  Attempting to signout with current login details failed. (%s)'
const MSG_FAILED = '❗️\n'
const MSG_SUPPORT = `
💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀

👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!

❔ Let us know if you have questions...
📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}

⚡️ Let's get you {tuxCallOut started}...
`
const MSG_ADVICE = (url) => `
💻  Please follow the prompts in the browser window and verify your email address before logging in

If the link doesn't open, please click the following URL {dim ${url}}
`
const MSG_WELCOME = `
🎉 Account sign up complete - Ready to go!

{tuxAction You're ready to build and share Ops with your team}
Get started by trying the following commands:
{reset.green →} Search for an Op
{tuxTerm ops search}

{reset.green → } Create an Op
{tuxTerm ops init}

{reset.green →} Publish an Op
{tuxTerm ops publish}
`
