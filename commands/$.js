export const describe = '💻 CTO.ai Ops - The CLI built for Teams 🚀'

// remove this line when legacy CLI is completely replaced
export const fallthrough = true

export async function * dockerConnect (info, iter, Fail) {
  if (!info.isDockerProblem) return
  if (info.retries > 3) yield { ns: 'print', message: MSG_DOCKER_ISSUE }
  else if (info.retries === 1) yield { ns: 'print', message: MSG_CHECK_AGAIN }
  else if (info.code === 'WRN_DOCKER_NOT_FOUND') yield { ns: 'print', message: MSG_INSTALL_DOCKER }
  else if (info.code === 'WRN_DOCKER_NOT_RUNNING') yield { ns: 'print', message: MSG_START_DOCKER }
  const { retry } = yield { ns: 'prompt', type: 'confirm', name: 'retry', message: 'Ready to continue?' }
  if (retry === false) throw new Fail({ type: 'silent', exitCode: 0 })
  await iter.next({ retry })
}

const MSG_INSTALL_DOCKER = `
{tuxCallOut Uh-oh! You'll just need to install Docker for CTO.ai ops to run properly - go here to install it now.}

{tuxSuccess →} https://docs.docker.com/install/
{tuxSecondary  You'll need to create an account with Docker in order to start the download }

Once installed, make sure you start the Docker app, then come back to this terminal and type {tuxCallOut 'Y'}
We'll be waiting right here when you're ready 👍
`

const MSG_START_DOCKER = `
{tuxCallOut It looks like you have Docker installed, but it's not currently running.",}
{tuxCallOut Please start Docker to continue}

Once Docker is running, come back to this terminal and type {tuxCallOut  'Y'}
We'll be waiting right here when you're ready 👍
`

const MSG_CHECK_AGAIN = `
{tuxCallOut Please check that Docker is running again and come back here when ready.}
`

const MSG_DOCKER_ISSUE = `
{tuxCallOut Hmm. Docker still doesn't seem to be running.}
{tuxCallOut Please check again, or run, "ops account support" and we'll be happy to help you out.}`
