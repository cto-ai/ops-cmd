import fs from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import { rigging } from 'clif-dev'
import { test, mockalicious } from 'tapx'
import * as forge from '@cto.ai/ops-ctrl-forge'
import * as common from './common.js'
const { mkdtemp } = fs.promises
const prefix = join(tmpdir(), 'ops-cmd-init-')
const load = mockalicious(import.meta.url)
const harness = rigging.cmd(import.meta.url, load)

const buildMocks = (opts = {}) => {
  const mocks = {
    ...common.mocks(opts.ctrlAccountInstance),
    '@cto.ai/ops-ctrl-forge': {
      ...forge,
      default (...args) {
        opts.onForgeLoad()
        const instance = forge.default(...args)
        return {
          ...instance,
          async * init (options) {
            // load forge with current mocks:
            const forge = await load('@cto.ai/ops-ctrl-forge', mocks)
            const instance = forge.default(...args)
            if (opts.init) {
              const iter = opts.init.call(instance, options)
              yield * iter
              const { value } = await iter.next()
              return value
            }
            const iter = instance.init(options)
            yield * iter
            const { value } = await iter.next()
            return value
          }
        }
      }
    }
  }
  return mocks
}

const sanitize = (o, dir) => {
  if (Array.isArray(o)) return o.map((o) => sanitize(o, dir))
  for (const [key, value] of Object.entries(o)) {
    if (typeof value === 'string') o[key] = value.replace(dir, '/--dummy--')
  }
  return o
}

test('init (template flag required)', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('init', mocks)
  const interactions = new Map([])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('init --template "node" --kind "service" dest', async ({ teardown, matchSnapshot }) => {
  const dir = await mkdtemp(prefix)
  const { cwd } = process
  teardown(() => {
    process.cwd = cwd
  })
  let initOpts = null
  const mocks = buildMocks({
    onForgeLoad () {
      process.cwd = () => dir
    },
    async * init (opts) {
      initOpts = opts
      const iter = this.init(opts)
      yield * this.init(opts)
      const { value } = await iter.next()
      yield value
    }
  })

  const cmd = await harness('init --template "node" --kind "service" dest', mocks)
  const interactions = new Map([
    [{
      ns: 'prompt',
      type: 'input',
      name: 'description'
    }, { description: 'test desc' }]
  ])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(sanitize(initOpts, dir))
  matchSnapshot(sanitize(patterns, dir))
})

test('init -t "node" -k "service" dest', async ({ teardown, matchSnapshot }) => {
  const dir = await mkdtemp(prefix)
  const { cwd } = process
  teardown(() => {
    process.cwd = cwd
  })
  let initOpts = null
  const mocks = buildMocks({
    onForgeLoad () {
      process.cwd = () => dir
    },
    async * init (opts) {
      initOpts = opts
      const iter = this.init(opts)
      yield * this.init(opts)
      const { value } = await iter.next()
      yield value
    }
  })

  const cmd = await harness('init -t "node" -k "service" dest', mocks)
  const interactions = new Map([
    [{
      ns: 'prompt',
      type: 'input',
      name: 'description'
    }, { description: 'test desc' }]
  ])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(sanitize(initOpts, dir))
  matchSnapshot(sanitize(patterns, dir))
})

test('init --kind "service" (template flag required)', async ({ matchSnapshot }) => {
  const mocks = buildMocks()
  const cmd = await harness('init --kind "service"', mocks)
  const interactions = new Map([])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('init -k "service" (template flag required)', async ({ matchSnapshot }) => {
  const mocks = buildMocks()
  const cmd = await harness('init -k "service"', mocks)
  const interactions = new Map([])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('init --template "node" (kind defaults to command)', async ({ teardown, matchSnapshot }) => {
  const dir = await mkdtemp(prefix)
  const { cwd } = process
  teardown(() => {
    process.cwd = cwd
  })
  let initOpts = null
  const mocks = buildMocks({
    onForgeLoad () {
      process.cwd = () => dir
    },
    async * init (opts) {
      initOpts = opts
      const iter = this.init(opts)
      yield * this.init(opts)
      const { value } = await iter.next()
      yield value
    }
  })

  const cmd = await harness('init --template "node"', mocks)
  const interactions = new Map([
    [{
      ns: 'prompt',
      type: 'input',
      name: 'name'
    }, { name: 'test' }],
    [{
      ns: 'prompt',
      type: 'input',
      name: 'description'
    }, { description: 'test desc' }]
  ])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(sanitize(initOpts, dir))
  matchSnapshot(sanitize(patterns, dir))
})

test('init --template "https://github.com/org/template"', async ({ teardown, matchSnapshot }) => {
  const dir = await mkdtemp(prefix)
  const { cwd } = process
  teardown(() => {
    process.cwd = cwd
  })
  let initOpts = null
  const mocks = buildMocks({
    onForgeLoad () {
      process.cwd = () => dir
    },
    async * init (opts) {
      initOpts = opts
      yield { label: 'downloading' }
      yield { label: 'initialized', dir }
    }
  })

  const cmd = await harness('init --template "https://github.com/org/template"', mocks)
  const interactions = new Map([
    [{
      ns: 'prompt',
      type: 'input',
      name: 'name'
    }, { name: 'test' }],
    [{
      ns: 'prompt',
      type: 'input',
      name: 'description'
    }, { description: 'test desc' }]
  ])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(sanitize(initOpts, dir))
  matchSnapshot(sanitize(patterns, dir))
})

test('init --template "https://github.com/org/template" (Download failed)', async ({ teardown, matchSnapshot }) => {
  const dir = await mkdtemp(prefix)
  const { cwd } = process
  teardown(() => {
    process.cwd = cwd
  })
  let initOpts = null
  const mocks = buildMocks({
    onForgeLoad () {
      process.cwd = () => dir
    },
    async * init (opts) {
      initOpts = opts
      const iter = this.init(opts)
      yield * this.init(opts)
      const { value } = await iter.next()
      yield value
    }
  })

  const cmd = await harness('init --template "https://github.com/org/template"', mocks)
  const interactions = new Map([
    [{
      ns: 'prompt',
      type: 'input',
      name: 'name'
    }, { name: 'test' }],
    [{
      ns: 'prompt',
      type: 'input',
      name: 'description'
    }, { description: 'test desc' }]
  ])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(sanitize(initOpts, dir))
  matchSnapshot(sanitize(patterns, dir))
})

test('init --template "node" --kind "unknown" dest', async ({ teardown, matchSnapshot }) => {
  const dir = await mkdtemp(prefix)
  const { cwd } = process
  teardown(() => {
    process.cwd = cwd
  })
  let initOpts = null
  const mocks = buildMocks({
    onForgeLoad () {
      process.cwd = () => dir
    },
    async * init (opts) {
      initOpts = opts
      const iter = this.init(opts)
      yield * this.init(opts)
      const { value } = await iter.next()
      yield value
    }
  })

  const cmd = await harness('init --template "node" --kind "unknown" dest', mocks)
  const interactions = new Map([
    [{
      ns: 'prompt',
      type: 'input',
      name: 'description'
    }, { description: 'test desc' }]
  ])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(sanitize(initOpts, dir))
  matchSnapshot(sanitize(patterns, dir))
})

test('init --template "unknown" --kind "unknown" dest', async ({ teardown, matchSnapshot }) => {
  const dir = await mkdtemp(prefix)
  const { cwd } = process
  teardown(() => {
    process.cwd = cwd
  })
  let initOpts = null
  const mocks = buildMocks({
    onForgeLoad () {
      process.cwd = () => dir
    },
    async * init (opts) {
      initOpts = opts
      const iter = this.init(opts)
      yield * this.init(opts)
      const { value } = await iter.next()
      yield value
    }
  })

  const cmd = await harness('init --template "unknown" --kind "unknown" dest', mocks)
  const interactions = new Map([
    [{
      ns: 'prompt',
      type: 'input',
      name: 'description'
    }, { description: 'test desc' }]
  ])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(sanitize(initOpts, dir))
  matchSnapshot(sanitize(patterns, dir))
})

test('unexpected error handling', async ({ teardown, matchSnapshot }) => {
  const dir = await mkdtemp(prefix)
  const { cwd } = process
  teardown(() => {
    process.cwd = cwd
  })
  let initOpts = null
  const mocks = buildMocks({
    onForgeLoad () {
      process.cwd = () => dir
    },
    async * init (opts) {
      initOpts = opts
      throw Error('unexpected')
    }
  })

  const cmd = await harness('init --template "node" --kind "service" dest', mocks)
  const interactions = new Map([
    [{
      ns: 'prompt',
      type: 'input',
      name: 'description'
    }, { description: 'test desc' }]
  ])
  const opts = { settings: { ...common.settings } }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(sanitize(initOpts, dir))
  matchSnapshot(sanitize(patterns, dir))
})

test('prompt inputs validation', async ({ is, plan, teardown }) => {
  plan(6)
  const dir = await mkdtemp(prefix)
  const { cwd } = process
  teardown(() => {
    process.cwd = cwd
  })
  const mocks = buildMocks({
    onForgeLoad () {
      process.cwd = () => dir
    },
    async * init (opts) {
      const iter = this.init(opts)
      yield * this.init(opts)
      const { value } = await iter.next()
      yield value
    }
  })

  const cmd = await harness('init --template "node" --kind "service"', mocks)

  const interactions = new Map([
    [{
      ns: 'prompt',
      type: 'input',
      name: 'name'
    }, ({ validate }) => {
      is(validate(''), 'You need name your Op before you can continue')
      is(validate('%%'), 'Sorry, please name the Op using only numbers, lowercase letters, -, or _')
      is(validate('valid'), true)
      return { name: 'test' }
    }],
    [{
      ns: 'prompt',
      type: 'input',
      name: 'description'
    }, ({ validate }) => {
      is(validate(''), 'You need to provide a description of your Op before continuing')
      is(validate('valid'), true)
      return { description: 'test desc' }
    }],
    [{
      ns: 'analytics'
    }, ({ namespace }) => {
      is(namespace({ team: { name: 'team' } }), '@team/test')
    }]
  ])
  const opts = { settings: { ...common.settings } }
  await cmd(interactions, opts)
})
