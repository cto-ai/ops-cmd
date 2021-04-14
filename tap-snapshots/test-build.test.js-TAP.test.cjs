/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/build.test.js TAP build (--ops is required) > must match snapshot 1`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Error: {tuxEmphatic ❗ The --ops flag is required} {
    "command": "build",
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/build.test.js TAP build --nocache --ops "TEST" (success) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": false,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --nocache --ops "TEST" (success) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "🛠  Building: {tuxCallOut TEST:0.1.0}",
    "ns": "print",
  },
  Object {
    "event": "Ops CLI Build",
    "image": "registry.test/TEST:0.1.0",
    "name": "TEST",
    "namespace": "@test-team/TEST",
    "namespace_version": "@test-team/TEST:0.1.0",
    "ns": "analytics",
    "team": "test-team",
    "username": "test",
    "version": "0.1.0",
  },
  Object {
    "message": "stream output",
    "ns": "print",
    "type": "raw",
  },
  Object {
    "action": "start",
    "message": "status update",
    "ns": "spinner",
  },
  Object {
    "message": "\\n💻 Run {tuxSuccess $} {italic.dim ops run TEST} to test your op.\\n📦 Run {tuxSuccess $} {italic.dim ops public /Users/davidclements/code/cto.ai/ops-cmd} to test your op.\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/build.test.js TAP build --nocache --ops "TEST1" "TEST2" (success) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": false,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST1",
    "TEST2",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --nocache --ops "TEST1" "TEST2" (success) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "🛠  Building: {tuxCallOut TEST1:0.1.0}",
    "ns": "print",
  },
  Object {
    "event": "Ops CLI Build",
    "image": "registry.test/TEST1:0.1.0",
    "name": "TEST1",
    "namespace": "@test-team/TEST1",
    "namespace_version": "@test-team/TEST1:0.1.0",
    "ns": "analytics",
    "team": "test-team",
    "username": "test",
    "version": "0.1.0",
  },
  Object {
    "message": "stream output",
    "ns": "print",
    "type": "raw",
  },
  Object {
    "action": "start",
    "message": "status update",
    "ns": "spinner",
  },
  Object {
    "message": "\\n💻 Run {tuxSuccess $} {italic.dim ops run TEST1} to test your op.\\n📦 Run {tuxSuccess $} {italic.dim ops public /Users/davidclements/code/cto.ai/ops-cmd} to test your op.\\n",
    "ns": "print",
  },
  Object {
    "message": "🛠  Building: {tuxCallOut TEST2:0.1.0}",
    "ns": "print",
  },
  Object {
    "event": "Ops CLI Build",
    "image": "registry.test/TEST2:0.1.0",
    "name": "TEST2",
    "namespace": "@test-team/TEST2",
    "namespace_version": "@test-team/TEST2:0.1.0",
    "ns": "analytics",
    "team": "test-team",
    "username": "test",
    "version": "0.1.0",
  },
  Object {
    "message": "stream output",
    "ns": "print",
    "type": "raw",
  },
  Object {
    "action": "start",
    "message": "status update",
    "ns": "spinner",
  },
  Object {
    "message": "\\n💻 Run {tuxSuccess $} {italic.dim ops run TEST2} to test your op.\\n📦 Run {tuxSuccess $} {italic.dim ops public /Users/davidclements/code/cto.ai/ops-cmd} to test your op.\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (cwd, success) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (cwd, success) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "🛠  Building: {tuxCallOut TEST:0.1.0}",
    "ns": "print",
  },
  Object {
    "event": "Ops CLI Build",
    "image": "registry.test/TEST:0.1.0",
    "name": "TEST",
    "namespace": "@test-team/TEST",
    "namespace_version": "@test-team/TEST:0.1.0",
    "ns": "analytics",
    "team": "test-team",
    "username": "test",
    "version": "0.1.0",
  },
  Object {
    "message": "stream output",
    "ns": "print",
    "type": "raw",
  },
  Object {
    "action": "start",
    "message": "status update",
    "ns": "spinner",
  },
  Object {
    "message": "\\n💻 Run {tuxSuccess $} {italic.dim ops run TEST} to test your op.\\n📦 Run {tuxSuccess $} {italic.dim ops public /Users/davidclements/code/cto.ai/ops-cmd} to test your op.\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_DESC_INVALID) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_DESC_INVALID) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: {tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ERR_DESC_INVALID} {
    "code": "ERR_DESC_INVALID",
    "command": "build",
    "err": Error: ERR_DESC_INVALID {
      "code": "ERR_DESC_INVALID",
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_ENV_VAR_INVALID) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_ENV_VAR_INVALID) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: {tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ERR_ENV_VAR_INVALID} {
    "code": "ERR_ENV_VAR_INVALID",
    "command": "build",
    "err": Error: ERR_ENV_VAR_INVALID {
      "code": "ERR_ENV_VAR_INVALID",
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_NAME_INVALID) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_NAME_INVALID) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: {tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ERR_NAME_INVALID} {
    "code": "ERR_NAME_INVALID",
    "command": "build",
    "err": Error: ERR_NAME_INVALID {
      "code": "ERR_NAME_INVALID",
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_NO_PUBLIC) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_NO_PUBLIC) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: {tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ERR_NO_PUBLIC} {
    "code": "ERR_NO_PUBLIC",
    "command": "build",
    "err": Error: ERR_NO_PUBLIC {
      "code": "ERR_NO_PUBLIC",
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_NO_RUN) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_NO_RUN) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: {tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ERR_NO_RUN} {
    "code": "ERR_NO_RUN",
    "command": "build",
    "err": Error: ERR_NO_RUN {
      "code": "ERR_NO_RUN",
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_PIPELINE_JOBS_INVALID) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_PIPELINE_JOBS_INVALID) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: ERR_PIPELINE_JOBS_INVALID {
    "code": undefined,
    "command": "build",
    "err": Error: ERR_PIPELINE_JOBS_INVALID {
      "ERR_PIPELINE_JOBS_INVALID": "ERR_PIPELINE_JOBS_INVALID",
    },
    "ns": "failure",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_PIPELINE_JOB_DESC_INVALID) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_PIPELINE_JOB_DESC_INVALID) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: {tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ERR_PIPELINE_JOB_DESC_INVALID} {
    "code": "ERR_PIPELINE_JOB_DESC_INVALID",
    "command": "build",
    "err": Error: ERR_PIPELINE_JOB_DESC_INVALID {
      "code": "ERR_PIPELINE_JOB_DESC_INVALID",
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_PIPELINE_JOB_NAME_INVALID) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_PIPELINE_JOB_NAME_INVALID) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: {tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ERR_PIPELINE_JOB_NAME_INVALID} {
    "code": "ERR_PIPELINE_JOB_NAME_INVALID",
    "command": "build",
    "err": Error: ERR_PIPELINE_JOB_NAME_INVALID {
      "code": "ERR_PIPELINE_JOB_NAME_INVALID",
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_SERVICE_DOMAIN_INVALID) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_SERVICE_DOMAIN_INVALID) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: {tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ERR_SERVICE_DOMAIN_INVALID} {
    "code": "ERR_SERVICE_DOMAIN_INVALID",
    "command": "build",
    "err": Error: ERR_SERVICE_DOMAIN_INVALID {
      "code": "ERR_SERVICE_DOMAIN_INVALID",
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_VERSION_INVALID) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: ERR_VERSION_INVALID) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: {tuxEmphatic ❗ Sorry, we have difficulty parsing your ops.yml. ERR_VERSION_INVALID} {
    "code": "ERR_VERSION_INVALID",
    "command": "build",
    "err": Error: ERR_VERSION_INVALID {
      "code": "ERR_VERSION_INVALID",
    },
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: WRN_DOCKER_NOT_FOUND) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: WRN_DOCKER_NOT_FOUND) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "\\n{tuxCallOut Uh-oh! You'll just need to install Docker for CTO.ai ops to run properly - go here to install it now.}\\n\\n{tuxSuccess →} https://docs.docker.com/install/\\n{tuxSecondary  You'll need to create an account with Docker in order to start the download }\\n\\nOnce installed, make sure you start the Docker app, then come back to this terminal and type {tuxCallOut 'Y'}\\nWe'll be waiting right here when you're ready 👍\\n",
    "ns": "print",
  },
  Object {
    "message": "Ready to continue?",
    "name": "retry",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error {
    "command": "build",
    "exitCode": 0,
    "ns": "failure",
    "type": "silent",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: WRN_DOCKER_NOT_RUNNING) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: WRN_DOCKER_NOT_RUNNING) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "\\n{tuxCallOut It looks like you have Docker installed, but it's not currently running.\\",}\\n{tuxCallOut Please start Docker to continue}\\n\\nOnce Docker is running, come back to this terminal and type {tuxCallOut  'Y'}\\nWe'll be waiting right here when you're ready 👍\\n",
    "ns": "print",
  },
  Object {
    "message": "Ready to continue?",
    "name": "retry",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error {
    "command": "build",
    "exitCode": 0,
    "ns": "failure",
    "type": "silent",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: WRN_DOCKER_NOT_RUNNING, 1 retry) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: WRN_DOCKER_NOT_RUNNING, 1 retry) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "\\n{tuxCallOut It looks like you have Docker installed, but it's not currently running.\\",}\\n{tuxCallOut Please start Docker to continue}\\n\\nOnce Docker is running, come back to this terminal and type {tuxCallOut  'Y'}\\nWe'll be waiting right here when you're ready 👍\\n",
    "ns": "print",
  },
  Object {
    "message": "Ready to continue?",
    "name": "retry",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "message": "Docker not running",
    "ns": "print",
    "type": "warn",
  },
  Object {
    "message": "\\n{tuxCallOut Please check that Docker is running again and come back here when ready.}\\n",
    "ns": "print",
  },
  Object {
    "message": "Ready to continue?",
    "name": "retry",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error {
    "command": "build",
    "exitCode": 0,
    "ns": "failure",
    "type": "silent",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: WRN_DOCKER_NOT_RUNNING, 4 retries) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: WRN_DOCKER_NOT_RUNNING, 4 retries) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "\\n{tuxCallOut It looks like you have Docker installed, but it's not currently running.\\",}\\n{tuxCallOut Please start Docker to continue}\\n\\nOnce Docker is running, come back to this terminal and type {tuxCallOut  'Y'}\\nWe'll be waiting right here when you're ready 👍\\n",
    "ns": "print",
  },
  Object {
    "message": "Ready to continue?",
    "name": "retry",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "message": "Docker not running",
    "ns": "print",
    "type": "warn",
  },
  Object {
    "message": "\\n{tuxCallOut Please check that Docker is running again and come back here when ready.}\\n",
    "ns": "print",
  },
  Object {
    "message": "Ready to continue?",
    "name": "retry",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "message": "Docker not running",
    "ns": "print",
    "type": "warn",
  },
  Object {
    "message": "\\n{tuxCallOut It looks like you have Docker installed, but it's not currently running.\\",}\\n{tuxCallOut Please start Docker to continue}\\n\\nOnce Docker is running, come back to this terminal and type {tuxCallOut  'Y'}\\nWe'll be waiting right here when you're ready 👍\\n",
    "ns": "print",
  },
  Object {
    "message": "Ready to continue?",
    "name": "retry",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "message": "Docker not running",
    "ns": "print",
    "type": "warn",
  },
  Object {
    "message": "\\n{tuxCallOut It looks like you have Docker installed, but it's not currently running.\\",}\\n{tuxCallOut Please start Docker to continue}\\n\\nOnce Docker is running, come back to this terminal and type {tuxCallOut  'Y'}\\nWe'll be waiting right here when you're ready 👍\\n",
    "ns": "print",
  },
  Object {
    "message": "Ready to continue?",
    "name": "retry",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "message": "Docker not running",
    "ns": "print",
    "type": "warn",
  },
  Object {
    "message": "\\n{tuxCallOut Hmm. Docker still doesn't seem to be running.}\\n{tuxCallOut Please check again, or run, \\"ops account support\\" and we'll be happy to help you out.}",
    "ns": "print",
  },
  Object {
    "message": "Ready to continue?",
    "name": "retry",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error {
    "command": "build",
    "exitCode": 0,
    "ns": "failure",
    "type": "silent",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: unknown error) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (failure: unknown error) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: test {
    "code": undefined,
    "command": "build",
    "err": Error: test,
    "ns": "failure",
  },
]
`

exports[`test/build.test.js TAP build --ops "TEST" (success with warnings) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build --ops "TEST" (success with warnings) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "🛠  Building: {tuxCallOut TEST:0.1.0}",
    "ns": "print",
  },
  Object {
    "event": "Ops CLI Build",
    "image": "registry.test/TEST:0.1.0",
    "name": "TEST",
    "namespace": "@test-team/TEST",
    "namespace_version": "@test-team/TEST:0.1.0",
    "ns": "analytics",
    "team": "test-team",
    "username": "test",
    "version": "0.1.0",
  },
  Object {
    "message": "stream output",
    "ns": "print",
    "type": "raw",
  },
  Object {
    "action": "start",
    "message": "status update",
    "ns": "spinner",
  },
  Object {
    "message": "\\n💻 Run {tuxSuccess $} {italic.dim ops run TEST} to test your op.\\n📦 Run {tuxSuccess $} {italic.dim ops public /Users/davidclements/code/cto.ai/ops-cmd} to test your op.\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/build.test.js TAP build ./ops-dir --ops "TEST" (success) > must match snapshot 1`] = `
Object {
  "api": "http://api.test",
  "cache": true,
  "op": "/--dummy--/ops-cmd",
  "registry": "registry.test",
  "select": Array [
    "TEST",
  ],
  "team": "test-team",
  "tokens": Object {},
}
`

exports[`test/build.test.js TAP build ./ops-dir --ops "TEST" (success) > must match snapshot 2`] = `
Array [
  Object {
    "ns": "auth",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "🛠  Building: {tuxCallOut TEST:0.1.0}",
    "ns": "print",
  },
  Object {
    "event": "Ops CLI Build",
    "image": "registry.test/TEST:0.1.0",
    "name": "TEST",
    "namespace": "@test-team/TEST",
    "namespace_version": "@test-team/TEST:0.1.0",
    "ns": "analytics",
    "team": "test-team",
    "username": "test",
    "version": "0.1.0",
  },
  Object {
    "message": "stream output",
    "ns": "print",
    "type": "raw",
  },
  Object {
    "action": "start",
    "message": "status update",
    "ns": "spinner",
  },
  Object {
    "message": "\\n💻 Run {tuxSuccess $} {italic.dim ops run TEST} to test your op.\\n📦 Run {tuxSuccess $} {italic.dim ops public /Users/davidclements/code/cto.ai/ops-cmd} to test your op.\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`
