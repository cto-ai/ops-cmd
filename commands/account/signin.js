import createAccount, { identity } from '@cto.ai/ops-ctrl-account'

import { MSG_NO_TEAMS, userTeams } from './$.js'

export const describe = 'Log in to your account.'

export const $interactive = {
  describe: 'Interactive Mode',
  alias: 'i',
  type: 'boolean'
}

export const $user = {
  describe: 'Username or email',
  alias: 'u',
  type: 'string'
}

export const $password = {
  describe: 'Password',
  alias: 'p',
  type: 'string'
}

export default async function * signin ({ inputs, settings }) {
  class Fail extends (yield Error) { command = signin }

  yield { ns: 'print', message: MSG_BANNER }
  let { interactive, user, password } = inputs
  const { auth, api } = settings
  const account = createAccount(auth)

  const terminalSignin = interactive || user || password

  let tokens = null
  if (terminalSignin) {
    if (!user) {
      user = (yield { ns: 'prompt', type: 'input', name: 'user', message: 'Username or email:' }).user
    }
    if (!password) {
      password = (yield { ns: 'prompt', type: 'password', name: 'password', message: 'Password:', mask: '*' }).password
    }

    try {
      yield { ns: 'spinner', action: 'start', message: '{tuxEmphatic Authenticating}' }
      tokens = await account.signin({ user, password })
    } catch (err) {
      yield { ns: 'spinner', action: 'stop', message: 'failed' }
      if (err.code === 'ERR_UNAUTHORIZED') {
        throw new Fail({ type: 'print' }, MSG_UNAUTHORIZED)
      }
      throw new Fail({ type: 'api', err })
    }
  } else {
    tokens = await account.signin()
  }

  const { username } = identity(tokens)

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

  yield { ns: 'config', action: 'update', state: { user: username, team, tokens } }

  yield { ns: 'analytics', event: 'Ops CLI Signin', username }

  yield { ns: 'spinner', action: 'stop', message: '{tuxSuccess Done!}' }

  yield { ns: 'print', message: MSG_WELCOME(username) }
}

const MSG_BANNER = `
💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀

👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!
`

const MSG_UNAUTHORIZED = `
🤔 Sorry, we couldn’t find an account with that email or password.
Forgot your password? Run {bold ops account:reset}
`

const MSG_WELCOME = (username) => `
👋 {tuxEmphatic Welcome back} {italic.dim ${username}}!

👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!
`
