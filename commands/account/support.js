export const describe = 'Contact our support team with questions.'

export default async function * support () {
  yield { ns: 'auth' }
  yield { ns: 'print', message: MSG_SUPPORT }
}

const MSG_SUPPORT = `
❔ Please reach out to us with questions anytime!
⌚️ We are typically available {tuxEmphatic Monday-Friday 9am-5pm PT}
📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}

🖖 We'll get back to you as soon as we possibly can.
`
