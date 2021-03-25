import fs from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'
import { rigging } from 'clif-dev'
import { test, mockalicious } from 'tapx'
import * as common from './common.js'
const harness = rigging.cmd(import.meta.url, mockalicious(import.meta.url))

const { mkdtemp, mkdir, writeFile, readFile, readdir, chmod, symlink, unlink } = fs.promises
const tmp = tmpdir()

test('profile create', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile create', mocks)
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  const opts = {
    settings: {
      ...common.settings
    }
  }
  delete opts.settings.auth.pages
  const { auth, ...top } = opts.settings
  const interactions = new Map([
    [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth } } }]
  ])

  await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
  opts.settings.configDir = configDir
  const patterns = await cmd(interactions, opts)
  matchSnapshot((await readFile(join(configDir, 'profiles', 'test', 'settings.json')) + ''))
  matchSnapshot(patterns)
})

test('profile create --prefab "staging"', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile create --prefab "staging"', mocks)
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  const opts = {
    settings: {
      ...common.settings
    }
  }
  delete opts.settings.auth.pages
  const { auth, ...top } = opts.settings
  const interactions = new Map([
    [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth } } }]
  ])

  await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
  opts.settings.configDir = configDir
  const patterns = await cmd(interactions, opts)
  matchSnapshot((await readFile(join(configDir, 'profiles', 'staging', 'settings.json')) + ''))
  matchSnapshot(patterns)
})

test('profile create -p "staging"', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile create -p "staging"', mocks)
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  const opts = {
    settings: {
      ...common.settings
    }
  }
  delete opts.settings.auth.pages
  const { auth, ...top } = opts.settings
  const interactions = new Map([
    [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth } } }]
  ])

  await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
  opts.settings.configDir = configDir
  const patterns = await cmd(interactions, opts)
  matchSnapshot((await readFile(join(configDir, 'profiles', 'staging', 'settings.json')) + ''))
  matchSnapshot(patterns)
})

test('profile create (profile contains sub-arrays)', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile create', mocks)
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  const opts = {
    settings: {
      ...common.settings
    }
  }
  delete opts.settings.auth.pages
  const { auth, ...top } = opts.settings
  const interactions = new Map([
    [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth } } }]
  ])

  await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
  opts.settings.auth.realm = [opts.settings.auth.realm]
  opts.settings.configDir = configDir
  const patterns = await cmd(interactions, opts)
  matchSnapshot((await readFile(join(configDir, 'profiles', 'test', 'settings.json')) + ''))
  matchSnapshot(patterns)
})

test('profile create (error: exists)', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile create', mocks)
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  const opts = {
    settings: {
      ...common.settings
    }
  }
  delete opts.settings.auth.pages
  const { auth, ...top } = opts.settings
  const interactions = new Map([
    [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth } } }]
  ])

  try {
    await mkdir(join(configDir, 'profiles', 'test'))
    await writeFile(join(configDir, 'profiles', 'test', 'settings.json'), JSON.stringify(opts.settings))
    await symlink(join(configDir, 'profiles', 'test', 'settings.json'), join(configDir, 'settings.json'))
  } catch {}
  opts.settings.configDir = configDir
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('profile create (error: general)', async ({ matchSnapshot }) => {
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile create', mocks)
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  const opts = {
    settings: {
      ...common.settings
    }
  }
  delete opts.settings.auth.pages
  const { auth, ...top } = opts.settings
  const poison = { result: { values: { ...top, ...auth } } }
  poison.result.values.registry = poison
  const interactions = new Map([
    [{ ns: 'prompt', name: 'result', type: 'snippet' }, poison]
  ])

  await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
  opts.settings.configDir = configDir
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('profile list', async ({ matchSnapshot }) => {
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  for (const name of ['test1', 'test2']) {
    const mocks = { ...common.mocks() }
    const cmd = await harness('profile create', mocks)

    const opts = {
      settings: {
        ...common.settings
      }
    }
    delete opts.settings.auth.pages
    const { auth, ...top } = opts.settings
    const interactions = new Map([
      [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth, name } } }]
    ])

    await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
    opts.settings.configDir = configDir
    await cmd(interactions, opts)
  }
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile list', mocks)
  const interactions = []
  const opts = {
    settings: {
      ...common.settings,
      configDir
    }
  }
  await unlink(join(configDir, 'settings.json'))
  await symlink(join(configDir, 'profiles', 'test1', 'settings.json'), join(configDir, 'settings.json'))
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('profile select', async ({ matchSnapshot }) => {
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  for (const name of ['test1', 'test2']) {
    const mocks = { ...common.mocks() }
    const cmd = await harness('profile create', mocks)

    const opts = {
      settings: {
        ...common.settings
      }
    }
    delete opts.settings.auth.pages
    const { auth, ...top } = opts.settings
    const interactions = new Map([
      [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth, name } } }]
    ])

    await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
    opts.settings.configDir = configDir
    await cmd(interactions, opts)
  }
  await symlink(join(configDir, 'profiles', 'test1', 'config.json'), join(configDir, 'config.json'))
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile select', mocks)
  const interactions = new Map([
    [{ ns: 'prompt', type: 'select', name: 'profile' }, { profile: 'test2' }]
  ])
  const opts = {
    settings: {
      ...common.settings,
      configDir
    }
  }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('profile select (backup read failure mode)', async ({ matchSnapshot }) => {
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  for (const name of ['test1', 'test2']) {
    const mocks = { ...common.mocks() }
    const cmd = await harness('profile create', mocks)

    const opts = {
      settings: {
        ...common.settings
      }
    }
    delete opts.settings.auth.pages
    const { auth, ...top } = opts.settings
    const interactions = new Map([
      [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth, name } } }]
    ])

    await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
    opts.settings.configDir = configDir
    await cmd(interactions, opts)
  }
  await writeFile(join(configDir, 'config.json'), '{}')
  await unlink(join(configDir, 'settings.json'))
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile select', mocks)
  const interactions = new Map([
    [{ ns: 'prompt', type: 'select', name: 'profile' }, { profile: 'test2' }]
  ])
  const opts = {
    settings: {
      ...common.settings,
      configDir
    }
  }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
})

test('profile select (backup->upgrade)', async ({ matchSnapshot }) => {
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  for (const name of ['test1', 'test2']) {
    const mocks = { ...common.mocks() }
    const cmd = await harness('profile create', mocks)

    const opts = {
      settings: {
        ...common.settings
      }
    }
    delete opts.settings.auth.pages
    const { auth, ...top } = opts.settings
    const interactions = new Map([
      [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth, name } } }]
    ])

    await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
    opts.settings.configDir = configDir
    await cmd(interactions, opts)
  }
  await writeFile(join(configDir, 'config.json'), '{}')
  await unlink(join(configDir, 'settings.json'))
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile select', mocks)
  const interactions = new Map([
    [{ ns: 'prompt', type: 'select', name: 'profile' }, { profile: 'test2' }]
  ])
  const opts = {
    settings: {
      ...common.settings,
      configDir
    }
  }
  const patterns = await cmd(interactions, opts)
  patterns[patterns.length - 2].message = patterns[patterns.length - 2].message.replace(configDir, '')
  matchSnapshot(patterns)
})

test('profile select (backup->fail->restore->restore fail)', async ({ matchSnapshot }) => {
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  for (const name of ['test1', 'test2']) {
    const mocks = { ...common.mocks() }
    const cmd = await harness('profile create', mocks)

    const opts = {
      settings: {
        ...common.settings
      }
    }
    delete opts.settings.auth.pages
    const { auth, ...top } = opts.settings
    const interactions = new Map([
      [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth, name } } }]
    ])

    await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
    opts.settings.configDir = configDir
    await cmd(interactions, opts)
  }
  await writeFile(join(configDir, 'config.json'), '{}')
  await chmod(join(configDir, 'config.json'), 0x000)
  await unlink(join(configDir, 'settings.json'))
  await symlink(join(configDir, 'profiles', 'test1', 'settings.json'), join(configDir, 'settings.json'))
  const mocks = {
    ...common.mocks(),
    fs: {
      ...fs,
      promises: {
        ...fs.promises,
        async readFile () { return Buffer.from('{}') }
      }
    }
  }
  const cmd = await harness('profile select', mocks)
  const interactions = new Map([
    [{ ns: 'prompt', type: 'select', name: 'profile' }, { profile: 'test2' }]
  ])
  const opts = {
    settings: {
      ...common.settings,
      configDir
    }
  }
  const patterns = await cmd(interactions, opts)
  patterns[patterns.length - 2].message = patterns[patterns.length - 2].message.replace(configDir, '')
  matchSnapshot(patterns)
})

test('profile select (backup->fail->restore->restore fail (config is symlinked))', async ({ matchSnapshot }) => {
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  for (const name of ['test1', 'test2']) {
    const mocks = { ...common.mocks() }
    const cmd = await harness('profile create', mocks)

    const opts = {
      settings: {
        ...common.settings
      }
    }
    delete opts.settings.auth.pages
    const { auth, ...top } = opts.settings
    const interactions = new Map([
      [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth, name } } }]
    ])

    await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
    opts.settings.configDir = configDir
    await cmd(interactions, opts)
  }
  await unlink(join(configDir, 'settings.json'))
  await symlink(join(configDir, 'profiles', 'test1', 'settings.json'), join(configDir, 'settings.json'))
  await symlink(join(configDir, 'profiles', 'test1', 'config.json'), join(configDir, 'config.json'))
  const mocks = {
    ...common.mocks(),
    fs: {
      ...fs,
      promises: {
        ...fs.promises,
        async readFile () { return Buffer.from('{}') },
        async unlink () {}
      }
    }
  }
  const cmd = await harness('profile select', mocks)
  const interactions = new Map([
    [{ ns: 'prompt', type: 'select', name: 'profile' }, { profile: 'test2' }]
  ])
  const opts = {
    settings: {
      ...common.settings,
      configDir
    }
  }
  const patterns = await cmd(interactions, opts)
  const fail = patterns.pop()
  fail.err.message = fail.err.message.replace(RegExp(configDir, 'g'), '')
  fail.err.dest = fail.err.dest.replace(RegExp(configDir, 'g'), '')
  fail.err.path = fail.err.path.replace(RegExp(configDir, 'g'), '')
  patterns.push(fail)
  matchSnapshot(patterns)
})

test('profile select (backup->fail->restore->restore fail (no current))', async ({ matchSnapshot }) => {
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  for (const name of ['test1', 'test2']) {
    const mocks = { ...common.mocks() }
    const cmd = await harness('profile create', mocks)

    const opts = {
      settings: {
        ...common.settings
      }
    }
    delete opts.settings.auth.pages
    const { auth, ...top } = opts.settings
    const interactions = new Map([
      [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth, name } } }]
    ])

    await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
    opts.settings.configDir = configDir
    await cmd(interactions, opts)
  }
  await writeFile(join(configDir, 'config.json'), '{}')
  await chmod(join(configDir, 'config.json'), 0x000)
  const mocks = {
    ...common.mocks(),
    fs: {
      ...fs,
      promises: {
        ...fs.promises,
        async readFile () { return Buffer.from('{}') },
        async unlink () {
          throw Error()
        }
      }
    }
  }
  const cmd = await harness('profile select', mocks)
  const interactions = new Map([
    [{ ns: 'prompt', type: 'select', name: 'profile' }, { profile: 'test2' }]
  ])
  const opts = {
    settings: {
      ...common.settings,
      configDir
    }
  }
  const patterns = await cmd(interactions, opts)
  patterns[patterns.length - 3].message = patterns[patterns.length - 2].message.replace(configDir, '')
  const fail = patterns.pop()
  fail.err.message = fail.err.message.replace(RegExp(configDir, 'g'), '')
  fail.err.dest = fail.err.dest.replace(RegExp(configDir, 'g'), '')
  fail.err.path = fail.err.path.replace(RegExp(configDir, 'g'), '')
  patterns.push(fail)
  matchSnapshot(patterns)
})

test('profile remove', async ({ matchSnapshot }) => {
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  for (const name of ['test1', 'test2']) {
    const mocks = { ...common.mocks() }
    const cmd = await harness('profile create', mocks)

    const opts = {
      settings: {
        ...common.settings
      }
    }
    delete opts.settings.auth.pages
    const { auth, ...top } = opts.settings
    const interactions = new Map([
      [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth, name } } }]
    ])

    try {
      await mkdir(join(configDir, 'profiles', 'test1'))
      await writeFile(join(configDir, 'profiles', 'test1', 'settings.json'), JSON.stringify(opts.settings))
      await symlink(join(configDir, 'profiles', 'test1', 'settings.json'), join(configDir, 'settings.json'))
    } catch {}
    opts.settings.configDir = configDir
    await cmd(interactions, opts)
  }
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile remove', mocks)
  const interactions = new Map([
    [{ ns: 'prompt', type: 'select', name: 'profile' }, { profile: 'test2' }],
    [{ ns: 'prompt', type: 'confirm', name: 'sure' }, ({ format }) => ({ sure: format(true) === 'Yes' })]
  ])
  const opts = {
    settings: {
      ...common.settings,
      configDir
    }
  }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
  matchSnapshot(await readdir(join(configDir, 'profiles')))
})

test('profile remove (disconfirm)', async ({ matchSnapshot }) => {
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  for (const name of ['test1', 'test2']) {
    const mocks = { ...common.mocks() }
    const cmd = await harness('profile create', mocks)

    const opts = {
      settings: {
        ...common.settings
      }
    }
    delete opts.settings.auth.pages
    const { auth, ...top } = opts.settings
    const interactions = new Map([
      [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth, name } } }]
    ])

    await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
    opts.settings.configDir = configDir
    await cmd(interactions, opts)
  }
  const mocks = { ...common.mocks() }
  const cmd = await harness('profile remove', mocks)
  const interactions = new Map([
    [{ ns: 'prompt', type: 'select', name: 'profile' }, { profile: 'test2' }],
    [{ ns: 'prompt', type: 'confirm', name: 'sure' }, ({ format }) => ({ sure: format(false) === 'Yes' })]
  ])
  const opts = {
    settings: {
      ...common.settings,
      configDir
    }
  }
  const patterns = await cmd(interactions, opts)
  matchSnapshot(patterns)
  matchSnapshot(await readdir(join(configDir, 'profiles')))
})

test('profile remove (error)', async ({ matchSnapshot }) => {
  const configDir = await mkdtemp(join(tmp, 'ops-cmd-profile-'))
  await mkdir(join(configDir, 'profiles'))
  for (const name of ['test1', 'test2']) {
    const mocks = { ...common.mocks() }
    const cmd = await harness('profile create', mocks)

    const opts = {
      settings: {
        ...common.settings
      }
    }
    delete opts.settings.auth.pages
    const { auth, ...top } = opts.settings
    const interactions = new Map([
      [{ ns: 'prompt', name: 'result', type: 'snippet' }, { result: { values: { ...top, ...auth, name } } }]
    ])

    await writeFile(join(configDir, 'settings.json'), JSON.stringify(opts.settings))
    opts.settings.configDir = configDir
    await cmd(interactions, opts)
  }

  const mocks = { ...common.mocks() }
  const cmd = await harness('profile remove', mocks)
  const interactions = new Map([
    [{ ns: 'prompt', type: 'select', name: 'profile' }, { profile: 'test2' }],
    [{ ns: 'prompt', type: 'confirm', name: 'sure' }, async ({ format }) => {
      await chmod(join(configDir, 'profiles', 'test2'), 0x000)
      return { sure: format(true) === 'Yes' }
    }]
  ])
  const opts = {
    settings: {
      ...common.settings,
      configDir
    }
  }
  const patterns = await cmd(interactions, opts)

  // normalize
  const fail = patterns.pop()
  fail.err.message = fail.err.message.slice(0, 35)
  fail.err.path = fail.err.path.replace(/.+(\/profiles\/test2)/, '$1')
  patterns.push(fail)

  matchSnapshot(patterns)
})
