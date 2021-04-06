export const describe = '💻 CTO.ai Ops - The CLI built for Teams 🚀'

// remove this line when legacy CLI is completely replaced
export const fallthrough = true

export async function * dockerConnect (info, iter, Fail) {
  if (!info.isDockerProblem) return
  if (info.retries > 3) yield { ns: 'print', message: MSG_DOCKER_ISSUE }
  if (info.retries === 1) yield { ns: 'print', message: MSG_CHECK_AGAIN }
  if (info.code === 'WRN_DOCKER_NOT_FOUND') yield { ns: 'print', message: MSG_INSTALL_DOCKER }
  if (info.code === 'WRN_DOCKER_NOT_RUNNING') yield { ns: 'print', message: MSG_START_DOCKER }
  const { retry } = yield { ns: 'prompt', type: 'confirm', name: 'retry', message: 'Ready to continue?' }
  if (retry === false) throw new Fail({ type: 'silent', exitCode: 0 })
  await iter.next({ retry })
}

const MSG_INSTALL_DOCKER = `
{tuxCallout Uh-oh! You'll just need to install Docker for CTO.ai ops to run properly - go here to install it now.}

{tuxSuccess →} https://docs.docker.com/install/
{tuxSecondary  You'll need to create an account with Docker in order to start the download }

Once installed, make sure you start the Docker app, then come back to this terminal and type {tuxCallout 'Y'}
We'll be waiting right here when you're ready 👍
`

const MSG_START_DOCKER = `
{tuxCallout It looks like you have Docker installed, but it's not currently running.",}
{tuxCallout Please start Docker to continue}

Once Docker is running, come back to this terminal and type {tuxCallout  'Y'}
We'll be waiting right here when you're ready 👍
`

const MSG_CHECK_AGAIN = `
{tuxCallout Please check that Docker is running again and come back here when ready.}
`

const MSG_DOCKER_ISSUE = `
{tuxCallout Hmm. Docker still doesn't seem to be running.}
{tuxCallout Please check again, or run, "ops account support" and we'll be happy to help you out.}`
