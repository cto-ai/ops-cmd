const readme = `
# __name__

> __description__

## Get Started

\`\`\`sh
$ npm install -g __name__
$ __bin__ -h
\`\`\`

__docs__## Engines

* Node 12.4+
* Node 14.0+

## Development

Test:

\`\`\`sh
npm test
\`\`\`

Visual coverage report (run after test):

\`\`\`sh
npm run cov
\`\`\`

Lint:

\`\`\`sh
npm run lint
\`\`\`

Autoformat:

\`\`\`sh
npm run lint -- --fix
\`\`\`

## Releasing

For mainline releases:

\`\`\`sh
npm version <major|minor|patch>
git push --follow-tags
\`\`\`

For prereleases:

\`\`\`sh
npm version prerelease
git push --follow-tags
\`\`\`

### License

MIT

`

export const docs = { readme }

const file = `import { rigging } from 'clif-dev'
import { test, mockalicious } from 'tapx'
import * as common from './common.js'
const harness = rigging.cmd(import.meta.url, mockalicious(import.meta.url))
__tests__
`

export const test = `
test('__command__', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('__command__', mocks)
  const interactions = new Map([])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})
`

export const tests = { file, test }
