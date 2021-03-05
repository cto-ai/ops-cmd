import fs from 'fs'
import { join, basename, dirname } from 'path'

const { readlink, readdir, symlink, unlink, readFile, writeFile, lstat, mkdir, rmdir } = fs.promises

export const $ = { describe: 'Create and select user profiles.' }

const prefabs = {
  staging: {
    name: 'staging',
    auth: {
      id: 'ops-cli',
      realm: 'ops',
      url: 'https://www.stg-platform.hc.ai/auth'
    },
    api: 'https://www.stg-platform.hc.ai/api/v1',
    registry: 'registry.stg-platform.hc.ai'
  }
}

async function selected (settingsPath) {
  try {
    const stat = await lstat(settingsPath)
    if (stat.isSymbolicLink() === false) {
      return null
    }
    const current = await readlink(settingsPath)
    return basename(dirname(current))
  } catch (err) {
    return null
  }
}

export const list = {
  describe: 'List profiles',
  default: async function * list ({ settings }) {
    const profiles = await readdir(join(settings.configDir, 'profiles'))
    const current = await selected(join(settings.configDir, 'settings.json'))
    yield * profiles.map((name) => {
      const selected = (name === current)
      const prefix = selected ? '* ' : '- '
      const style = selected ? (s) => `{bold ${s}}` : (s) => `{dim ${s}}`
      return { ns: 'print', message: style(`${prefix}${name}`) }
    })
  }
}

export const create = {
  describe: 'Create a new profile',
  $prefab: {
    describe: 'Create a profile from a named data set',
    alias: 'p',
    type: 'string'
  },
  default: async function * create ({ settings, inputs }) {
    class Fail extends (yield Error) { command = create }

    let profile = null
    if (inputs.prefab in prefabs) {
      profile = prefabs[inputs.prefab]
    } else {
      const shape = JSON.parse(await readFile(join(settings.configDir, 'settings.json'), 'utf-8'))
      const createTemplate = (shape, indent = '') => {
        return Object.keys(shape).reduce((str, key, i) => {
          const syntax = i === 0 ? '\n  ' : ',\n  '
          if (typeof shape[key] === 'object') {
            if (Array.isArray(shape[key])) return str
            return `${str}${syntax}${indent}"${key}": ${createTemplate(shape[key], indent + ' ')}`
          }
          return `${str}${syntax}${indent}"${key}": "\${${key}}"`
        }, '{') + `\n${indent}${indent}}`
      }
      const template = createTemplate(shape)
      const { result } = yield { ns: 'prompt', name: 'result', type: 'snippet', required: true, message: 'Create Profile:', template }
      const { name, api, registry, ...auth } = result.values
      profile = { name, api, registry, auth }
    }

    try {
      const dir = join(settings.configDir, 'profiles', profile.name)
      await mkdir(dir)
      await writeFile(join(dir, 'settings.json'), JSON.stringify(profile))
      yield { ns: 'print', message: `Profile {bold ${profile.name}} created.` }
    } catch (err) {
      if (err.code === 'EEXIST') {
        throw new Fail(`Profile "${profile.name}" already exists`)
      }
      throw new Fail({ err }, 'Unable to create profile')
    }
  }
}

export const select = {
  describe: 'Select a profile',
  default: async function * select ({ settings }) {
    class Fail extends (yield Error) { command = select }

    const profDir = join(settings.configDir, 'profiles')
    const settingsPath = join(settings.configDir, 'settings.json')
    const configPath = join(settings.configDir, 'config.json')
    const profiles = await readdir(profDir)
    const current = await selected(settingsPath)
    const { profile } = yield {
      ns: 'prompt',
      type: 'select',
      name: 'profile',
      message: 'Select a profile',
      choices: profiles,
      autofocus: current
    }

    let configRestore = null
    try {
      configRestore = await readlink(configPath)
    } catch {
      configRestore = await readFile(configPath)
    }

    async function * flip (path, type) {
      let backupContent = null
      try { backupContent = await readFile(path) } catch {}
      try {
        try { await unlink(path) } catch {}
        await symlink(join(profDir, profile, `${type}.json`), path)
      } catch (err) {
        if (current === null && err.code === 'EEXIST' && backupContent) {
          const backup = `${path}.${Date.now()}.bak`
          yield { ns: 'print', message: `Current ${type} file is not linked to a profile, backing up to ${backup}` }
          await writeFile(backup, backupContent)
          await symlink(join(profDir, profile, `${type}.json`), path)
        } else {
          throw err
        }
      }
    }

    try {
      yield * flip(configPath, 'config')
      yield * flip(settingsPath, 'settings')
    } catch (err) {
      try {
        if (typeof configRestore === 'string') await symlink(configRestore, configPath)
        else await writeFile(configPath, configRestore)
      } catch (err) {
        yield { ns: 'print', message: 'Unable to restore config.json after selection failure' }
      }
      try {
        if (current) await symlink(current, settingsPath)
      } catch (err) {
        yield { ns: 'print', message: 'Unable to restore config.json after selection failure' }
      }

      throw new Fail({ err }, `Failed to select profile {bold ${profile}}`)
    }

    yield { ns: 'print', message: `Profile {bold ${profile}} is now selected` }
  }
}

export const remove = {
  describe: 'Remove a profile',
  default: async function * remove ({ settings }) {
    class Fail extends (yield Error) { command = remove }

    const profDir = join(settings.configDir, 'profiles')
    const settingsPath = join(settings.configDir, 'settings.json')
    const profiles = await readdir(profDir)
    const current = await selected(settingsPath)
    const choices = profiles.map((profile) => {
      const disabled = profile === current && '<selected>'
      return { name: profile, disabled }
    })
    const { profile } = yield {
      ns: 'prompt',
      type: 'select',
      name: 'profile',
      message: 'Remove a profile',
      choices
    }

    const { sure } = yield {
      ns: 'prompt',
      type: 'confirm',
      name: 'sure',
      message: `Delete ${profile}?`,
      format (sure) { return sure ? 'Yes' : 'No' }
    }
    if (sure === false) {
      yield { ns: 'print', message: `Profile {bold ${profile}} was not deleted` }
      return
    }

    try {
      await rmdir(join(profDir, profile), { recursive: true })
      yield { ns: 'print', message: `Profile {bold ${profile}} was deleted` }
    } catch (err) {
      throw new Fail({ err }, `Failed to delete profile {bold ${profile}}`)
    }
  }
}
