import * as account from '@cto.ai/ops-ctrl-account'

export const mocks = (instance = {}) => ({
  '@cto.ai/ops-ctrl-account': {
    ...account,
    default () {
      return {
        async refresh (tokens) { return tokens },
        ...instance
      }
    },
    identity () {
      return {
        id: 'xxx',
        username: 'test',
        email: 'test'
      }
    },
    validate () { return true }
  }
})

export const settings = {
  name: 'test',
  api: 'http://api.test',
  registry: 'registry.test',
  auth: {
    id: 'ops-cli',
    realm: 'ops',
    url: 'https://cto.ai/auth',
    pages: { signup: Buffer.from(''), signin: Buffer.from(''), error: Buffer.from('') }
  }
}
