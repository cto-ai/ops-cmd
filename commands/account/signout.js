import createAccount from '@cto.ai/ops-ctrl-account'

export const describe = 'Log out from your account.'

async function invalidate (account, tokens) {
  try {
    await account.signout(tokens)
  /* c8 ignore next */
  } catch {} // <-- c8 cov bug, remove ignore when fixed
}

export default async function * signout ({ settings }) {
  class Fail extends (yield Error) { command = signout }

  const { tokens, user } = yield { ns: 'config', action: 'read' }

  if (!tokens) throw new Fail({ type: 'print' }, MSG_ALREADY_SIGNED_OUT)

  yield { ns: 'spinner', action: 'start', message: MSG_SIGNING_OUT }

  const { auth } = settings
  const account = createAccount(auth)

  invalidate(account, tokens)

  yield { ns: 'analytics', event: 'Ops CLI Signout', username: user.username }

  yield { ns: 'config', action: 'clear' }

  yield { ns: 'spinner', action: 'stop', message: '{tuxSuccess Done!}' }

  yield { ns: 'print', message: MSG_SIGNED_OUT }
}

const MSG_ALREADY_SIGNED_OUT = `
🤷‍♂️ Looks like you are already signed out.
    Run {tuxTerm ops account:signin} to sign back into your account.
`

const MSG_SIGNING_OUT = `
{tuxEmphatic Signing out of }{tuxAction CTO.ai ops}
`

const MSG_SIGNED_OUT = `
{tuxSuccess ✓} Signed out! Type ops {tuxAction account:signin} to sign back into your account.
`
