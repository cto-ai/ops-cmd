import createAccount, { validate } from '@cto.ai/ops-ctrl-account'

export const describe = 'Reset your password.'

export default async function * reset ({ settings }) {
  class Fail extends (yield Error) { command = reset }

  const config = yield { ns: 'config', action: 'read' }
  const { auth } = settings
  const { tokens, user, team } = config
  const account = createAccount(auth)
  try {
    const signedIn = user && team && validate(tokens)
    account.reset({ signedIn })
    const { value: url } = await account.endpoints.next()
    if (signedIn) {
      yield { ns: 'analytics', event: 'Ops CLI Reset', username: user.username }
    }
    yield { ns: 'print', message: MSG_INSTRUCTIONS(url) }
  } catch (err) {
    throw new Fail({ err }, 'Unable to reset')
  }
}

const MSG_INSTRUCTIONS = (url) => `
💻  Please follow the prompts in the browser window
 If the link doesn't open, please click the following URL:
  {dim ${url}}

`
