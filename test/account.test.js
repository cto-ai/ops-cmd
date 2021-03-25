import { rigging } from 'clif-dev'
import { test, mockalicious } from 'tapx'
import * as common from './common.js'
const harness = rigging.cmd(import.meta.url, mockalicious(import.meta.url))

test('account reset', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      reset () {},
      endpoints: (function * () { yield 'http://example.url' })()
    })
  }
  const cmd = await harness('account reset', mocks)
  const interactions = [{ tokens: {} }]
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account reset (signed in)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      reset () {},
      endpoints: (function * () { yield 'http://example.url' })()
    })
  }
  const cmd = await harness('account reset', mocks)
  const interactions = [{ tokens: {}, user: 'test', team: 'test' }]
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account reset (failure)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      reset () { throw Error('reset test failure') },
      endpoints: (function * () { yield 'http://example.url' })()
    })
  }
  const cmd = await harness('account reset', mocks)
  const interactions = [{ tokens: {} }]
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin --user "TEST" --password "TEST" --interactive', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin --user "TEST" --password "TEST" --interactive', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin -u "TEST" -p "TEST" -i', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST" -p "TEST" -i', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin --password "TEST" --interactive', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin --password "TEST" --interactive', mocks)
  const interactions = new Map([[{ ns: 'prompt', name: 'user' }, { user: 'test ' }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin -p "TEST" -i', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin -p "TEST" -i', mocks)
  const interactions = new Map([[{ ns: 'prompt', name: 'user' }, { user: 'test ' }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin --user "TEST" --interactive', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin --user "TEST" --interactive', mocks)
  const interactions = new Map([[{ ns: 'prompt', name: 'password' }, { password: 'test ' }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin -u "TEST" -i', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST" -i', mocks)
  const interactions = new Map([[{ ns: 'prompt', name: 'password' }, { password: 'test ' }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin --interactive', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin --interactive', mocks)

  const interactions = new Map([
    [{ ns: 'prompt', name: 'password' }, { password: 'test ' }],
    [{ ns: 'prompt', name: 'user' }, { user: 'test ' }]
  ])

  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin -i', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin -i', mocks)
  const interactions = new Map([
    [{ ns: 'prompt', name: 'password' }, { password: 'test ' }],
    [{ ns: 'prompt', name: 'user' }, { user: 'test ' }]
  ])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin --user "TEST" --password "TEST"', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin --user "TEST" --password "TEST"', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin -u "TEST" -p "TEST"', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST" -p "TEST"', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin --password "TEST"', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin --password "TEST"', mocks)
  const interactions = new Map([[{ ns: 'prompt', name: 'user' }, { user: 'test ' }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin -p "TEST"', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin -p "TEST"', mocks)
  const interactions = new Map([[{ ns: 'prompt', name: 'user' }, { user: 'test ' }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin --user "TEST"', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin --user "TEST"', mocks)
  const interactions = new Map([[{ ns: 'prompt', name: 'password' }, { password: 'test ' }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin -u "TEST"', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () { return {} }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST"', mocks)
  const interactions = new Map([[{ ns: 'prompt', name: 'password' }, { password: 'test ' }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin (failure: unauthorized)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () {
        const err = Error('unauthorized')
        err.code = 'ERR_UNAUTHORIZED'
        throw err
      }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST" -p "TEST"', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin (failure: auth api error)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () {
        throw Error('signin test error')
      }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST" -p "TEST"', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin (failure: teams api upstream error)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () {
        return { accessToken: 'at' }
      }
    }),
    got () {
      return {
        async json () {
          return { error: 'test error' }
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST" -p "TEST"', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin (failure: teams api error)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () {
        return { accessToken: 'at' }
      }
    }),
    got () {
      return {
        async json () {
          throw Error('test error')
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST" -p "TEST"', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin (failure: teams api unauthorized)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () {
        return { accessToken: 'at' }
      }
    }),
    got () {
      return {
        async json () {
          const err = Error('401 Unauthorized')
          err.response = { statusCode: 401 }
          throw err
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST" -p "TEST"', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin (failure: no teams from teams apis)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () {
        return { accessToken: 'at' }
      }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: null }
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST" -p "TEST"', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signin (failure: empty teams array from teams api)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signin () {
        return { accessToken: 'at' }
      }
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [] }
        }
      }
    }
  }
  const cmd = await harness('account signin -u "TEST" -p "TEST"', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signout', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('account signout', mocks)
  const interactions = [{ tokens: {}, user: { username: 'test' } }]
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signout (invalidate fail handling)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signout () { throw Error('test') }
    })
  }
  const cmd = await harness('account signout', mocks)
  const interactions = [{ tokens: {}, user: { username: 'test' } }]
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signout (already signed out)', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('account signout', mocks)
  const interactions = [{ tokens: null, user: { username: 'test' } }]
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signup', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signup () { return {} },
      async signout () { },
      endpoints: (function * () { yield 'http://signup.test' }())
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signup', mocks)
  const interactions = new Map([[{ ns: 'config', action: 'read' }, { tokens: {}, user: { username: 'test' } }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signup (signout failure)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signup () { return {} },
      async signout () { throw Error('signout test error') },
      endpoints: (function * () { yield 'http://signup.test' }())
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signup', mocks)
  const interactions = new Map([[{ ns: 'config', action: 'read' }, { tokens: {}, user: { username: 'test' } }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signup (not signed in)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signup () { return {} },
      async signout () { },
      endpoints: (function * () { yield 'http://signup.test' }())
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signup', mocks)
  const interactions = [{ user: { username: 'test' } }]
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signup (tokens missing)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signup () { return null },
      async signout () { },
      endpoints: (function * () { yield 'http://signup.test' }())
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  const cmd = await harness('account signup', mocks)
  const interactions = new Map([[{ ns: 'config', action: 'read' }, { tokens: {}, user: { username: 'test' } }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signup (invalid tokens)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signup () { return {} },
      async signout () { },
      endpoints: (function * () { yield 'http://signup.test' }())
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [{ name: 'test' }] }
        }
      }
    }
  }
  mocks['@cto.ai/ops-ctrl-account'].validate = () => {
    throw Error('invalid test')
  }
  const cmd = await harness('account signup', mocks)
  const interactions = new Map([[{ ns: 'config', action: 'read' }, { tokens: {}, user: { username: 'test' } }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signup (failure: teams api error)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signup () { return {} },
      async signin () {
        return { accessToken: 'at' }
      },
      endpoints: (function * () { yield 'http://signup.test' }())
    }),
    got () {
      return {
        async json () {
          throw Error('test error')
        }
      }
    }
  }
  const cmd = await harness('account signup', mocks)
  const interactions = new Map([[{ ns: 'config', action: 'read' }, { tokens: {}, user: { username: 'test' } }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signup (failure: teams api unauthorized)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signup () { return {} },
      async signin () {
        return { accessToken: 'at' }
      },
      endpoints: (function * () { yield 'http://signup.test' }())
    }),
    got () {
      return {
        async json () {
          const err = Error('401 Unauthorized')
          err.response = { statusCode: 401 }
          throw err
        }
      }
    }
  }
  const cmd = await harness('account signup', mocks)
  const interactions = new Map([[{ ns: 'config', action: 'read' }, { tokens: {}, user: { username: 'test' } }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signup (failure: no teams from teams apis)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signup () { return {} },
      async signin () {
        return { accessToken: 'at' }
      },
      endpoints: (function * () { yield 'http://signup.test' }())
    }),
    got () {
      return {
        async json () {
          return { error: null, data: null }
        }
      }
    }
  }
  const cmd = await harness('account signup', mocks)
  const interactions = new Map([[{ ns: 'config', action: 'read' }, { tokens: {}, user: { username: 'test' } }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account signup (failure: empty teams array from teams api)', async ({ matchSnapshot }) => {
  const mocks = {
    ...common.mocks({
      async signup () { return {} },
      async signin () {
        return { accessToken: 'at' }
      },
      endpoints: (function * () { yield 'http://signup.test' }())
    }),
    got () {
      return {
        async json () {
          return { error: null, data: [] }
        }
      }
    }
  }
  const cmd = await harness('account signup', mocks)
  const interactions = new Map([[{ ns: 'config', action: 'read' }, { tokens: {}, user: { username: 'test' } }]])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('account support', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('account support', mocks)
  const interactions = []
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})
