/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/init.test.js TAP init (template flag required) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Fail: The --template flag is required {
    "command": "init",
    "ns": "failure",
  },
]
`

exports[`test/init.test.js TAP init --kind "service" (template flag required) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Fail: The --template flag is required {
    "command": "init",
    "ns": "failure",
  },
]
`

exports[`test/init.test.js TAP init --template "https://github.com/org/template" (Download failed) > must match snapshot 1`] = `
Object {
  "description": "test desc",
  "from": "https://github.com/org/template",
  "kind": "command",
  "name": "test",
  "to": "/--dummy--/test",
}
`

exports[`test/init.test.js TAP init --template "https://github.com/org/template" (Download failed) > must match snapshot 2`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Object {
    "message": "\\nProvide a name for your new command {tuxSuccess →}\\n{tuxSecondary Names must be lowercase}",
    "ns": "print",
  },
  Object {
    "message": "🏷  Name:",
    "name": "name",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "message": "\\nProvide a description {tuxSuccess →}",
    "ns": "print",
  },
  Object {
    "message": "✍️  Description:",
    "name": "description",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "action": "start",
    "message": "Initializing op",
    "ns": "spinner",
  },
  Object {
    "action": "start",
    "message": "Downloading and unpacking template",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Fail: {tuxEmphatic ❗ Sorry, we were unable to initialize this template. Unable to fetch template https://github.com/org/template. (Response code 404 (Not Found))} {
    "code": "ERR_TEMPLATE_DOWNLOAD_FAILED",
    "command": "init",
    "err": Error: Unable to fetch template https://github.com/org/template. (Response code 404 (Not Found)) {
      "code": "ERR_TEMPLATE_DOWNLOAD_FAILED",
      "isForgeError": true,
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/init.test.js TAP init --template "https://github.com/org/template" > must match snapshot 1`] = `
Object {
  "description": "test desc",
  "from": "https://github.com/org/template",
  "kind": "command",
  "name": "test",
  "to": "/--dummy--/test",
}
`

exports[`test/init.test.js TAP init --template "https://github.com/org/template" > must match snapshot 2`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Object {
    "message": "\\nProvide a name for your new command {tuxSuccess →}\\n{tuxSecondary Names must be lowercase}",
    "ns": "print",
  },
  Object {
    "message": "🏷  Name:",
    "name": "name",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "message": "\\nProvide a description {tuxSuccess →}",
    "ns": "print",
  },
  Object {
    "message": "✍️  Description:",
    "name": "description",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "action": "start",
    "message": "Initializing op",
    "ns": "spinner",
  },
  Object {
    "action": "start",
    "message": "Downloading and unpacking template",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Object {
    "message": "\\n🎉 Success! Your new Op is ready to start coding...\\n",
    "ns": "print",
  },
  Object {
    "description": "test desc",
    "event": "Ops CLI Init",
    "name": "test",
    "namespace": Function namespace(),
    "ns": "analytics",
    "path": "/--dummy--",
    "templates": Array [
      "command",
    ],
  },
  Object {
    "message": "\\n🚀 To try out your Op run: {tuxTerm ops run test}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/init.test.js TAP init --template "node" (kind defaults to command) > must match snapshot 1`] = `
Object {
  "description": "test desc",
  "from": "node",
  "kind": "command",
  "name": "test",
  "to": "/--dummy--/test",
}
`

exports[`test/init.test.js TAP init --template "node" (kind defaults to command) > must match snapshot 2`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Object {
    "message": "\\nProvide a name for your new command {tuxSuccess →}\\n{tuxSecondary Names must be lowercase}",
    "ns": "print",
  },
  Object {
    "message": "🏷  Name:",
    "name": "name",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "message": "\\nProvide a description {tuxSuccess →}",
    "ns": "print",
  },
  Object {
    "message": "✍️  Description:",
    "name": "description",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "action": "start",
    "message": "Initializing op",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Object {
    "message": "\\n🎉 Success! Your new Op is ready to start coding...\\n",
    "ns": "print",
  },
  Object {
    "description": "test desc",
    "event": "Ops CLI Init",
    "name": "test",
    "namespace": Function namespace(),
    "ns": "analytics",
    "path": "/--dummy--/test",
    "templates": Array [
      "command",
    ],
  },
  Object {
    "message": "📁 {italic test/.dockerignore}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic test/Dockerfile}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic test/index.js} {tuxSuccess ←} {tuxEmphatic Start developing here!}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic test/ops.yml}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic test/package.json}",
    "ns": "print",
  },
  Object {
    "message": "\\n🚀 To try out your Op run: {tuxTerm ops run test}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/init.test.js TAP init --template "node" --kind "service" dest > must match snapshot 1`] = `
Object {
  "description": "test desc",
  "from": "node",
  "kind": "service",
  "name": "dest",
  "to": "/--dummy--/dest",
}
`

exports[`test/init.test.js TAP init --template "node" --kind "service" dest > must match snapshot 2`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Object {
    "message": "\\nProvide a name for your new service {tuxSuccess →}\\n{tuxSecondary Names must be lowercase}",
    "ns": "print",
  },
  Object {
    "message": "\\nProvide a description {tuxSuccess →}",
    "ns": "print",
  },
  Object {
    "message": "✍️  Description:",
    "name": "description",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "action": "start",
    "message": "Initializing op",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Object {
    "message": "\\n🎉 Success! Your new Op is ready to start coding...\\n",
    "ns": "print",
  },
  Object {
    "description": "test desc",
    "event": "Ops CLI Init",
    "name": "dest",
    "namespace": Function namespace(),
    "ns": "analytics",
    "path": "/--dummy--/dest",
    "templates": Array [
      "service",
    ],
  },
  Object {
    "message": "📁 {italic dest/.dockerignore}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic dest/Dockerfile}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic dest/index.js} {tuxSuccess ←} {tuxEmphatic Start developing here!}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic dest/ops.yml}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic dest/package.json}",
    "ns": "print",
  },
  Object {
    "message": "\\n🚀 To try out your Op run: {tuxTerm ops run dest}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/init.test.js TAP init --template "node" --kind "unknown" dest > must match snapshot 1`] = `
Object {
  "description": "test desc",
  "from": "node",
  "kind": "unknown",
  "name": "dest",
  "to": "/--dummy--/dest",
}
`

exports[`test/init.test.js TAP init --template "node" --kind "unknown" dest > must match snapshot 2`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Object {
    "message": "\\nProvide a name for your new unknown {tuxSuccess →}\\n{tuxSecondary Names must be lowercase}",
    "ns": "print",
  },
  Object {
    "message": "\\nProvide a description {tuxSuccess →}",
    "ns": "print",
  },
  Object {
    "message": "✍️  Description:",
    "name": "description",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "action": "start",
    "message": "Initializing op",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Fail: {tuxEmphatic ❗ Sorry, we were unable to initialize this template. No templates found for Op kind unknown, please select a different kind} {
    "code": "ERR_KIND_NOT_RECOGNIZED",
    "command": "init",
    "err": Error: No templates found for Op kind unknown, please select a different kind {
      "code": "ERR_KIND_NOT_RECOGNIZED",
      "isForgeError": true,
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/init.test.js TAP init --template "unknown" --kind "unknown" dest > must match snapshot 1`] = `
Object {
  "description": "test desc",
  "from": "unknown",
  "kind": "unknown",
  "name": "dest",
  "to": "/--dummy--/dest",
}
`

exports[`test/init.test.js TAP init --template "unknown" --kind "unknown" dest > must match snapshot 2`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Object {
    "message": "\\nProvide a name for your new unknown {tuxSuccess →}\\n{tuxSecondary Names must be lowercase}",
    "ns": "print",
  },
  Object {
    "message": "\\nProvide a description {tuxSuccess →}",
    "ns": "print",
  },
  Object {
    "message": "✍️  Description:",
    "name": "description",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "action": "start",
    "message": "Initializing op",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Fail: {tuxEmphatic ❗ Sorry, we were unable to initialize this template. No templates found for Op kind unknown, please select a different kind} {
    "code": "ERR_KIND_NOT_RECOGNIZED",
    "command": "init",
    "err": Error: No templates found for Op kind unknown, please select a different kind {
      "code": "ERR_KIND_NOT_RECOGNIZED",
      "isForgeError": true,
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/init.test.js TAP init -k "service" (template flag required) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Fail: The --template flag is required {
    "command": "init",
    "ns": "failure",
  },
]
`

exports[`test/init.test.js TAP init -t "node" -k "service" dest > must match snapshot 1`] = `
Object {
  "description": "test desc",
  "from": "node",
  "kind": "service",
  "name": "dest",
  "to": "/--dummy--/dest",
}
`

exports[`test/init.test.js TAP init -t "node" -k "service" dest > must match snapshot 2`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Object {
    "message": "\\nProvide a name for your new service {tuxSuccess →}\\n{tuxSecondary Names must be lowercase}",
    "ns": "print",
  },
  Object {
    "message": "\\nProvide a description {tuxSuccess →}",
    "ns": "print",
  },
  Object {
    "message": "✍️  Description:",
    "name": "description",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "action": "start",
    "message": "Initializing op",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Object {
    "message": "\\n🎉 Success! Your new Op is ready to start coding...\\n",
    "ns": "print",
  },
  Object {
    "description": "test desc",
    "event": "Ops CLI Init",
    "name": "dest",
    "namespace": Function namespace(),
    "ns": "analytics",
    "path": "/--dummy--/dest",
    "templates": Array [
      "service",
    ],
  },
  Object {
    "message": "📁 {italic dest/.dockerignore}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic dest/Dockerfile}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic dest/index.js} {tuxSuccess ←} {tuxEmphatic Start developing here!}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic dest/ops.yml}",
    "ns": "print",
  },
  Object {
    "message": "📁 {italic dest/package.json}",
    "ns": "print",
  },
  Object {
    "message": "\\n🚀 To try out your Op run: {tuxTerm ops run dest}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/init.test.js TAP unexpected error handling > must match snapshot 1`] = `
Object {
  "description": "test desc",
  "from": "node",
  "kind": "service",
  "name": "dest",
  "to": "/--dummy--/dest",
}
`

exports[`test/init.test.js TAP unexpected error handling > must match snapshot 2`] = `
Array [
  Function Error(),
  Object {
    "ns": "auth",
  },
  Object {
    "message": "\\nProvide a name for your new service {tuxSuccess →}\\n{tuxSecondary Names must be lowercase}",
    "ns": "print",
  },
  Object {
    "message": "\\nProvide a description {tuxSuccess →}",
    "ns": "print",
  },
  Object {
    "message": "✍️  Description:",
    "name": "description",
    "ns": "prompt",
    "type": "input",
    "validate": Function validate(input),
  },
  Object {
    "action": "start",
    "message": "Initializing op",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Fail: unexpected {
    "code": undefined,
    "command": "init",
    "err": Error: unexpected,
    "ns": "failure",
  },
]
`
