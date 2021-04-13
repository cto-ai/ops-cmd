/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/account.test.js TAP account reset (failure) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Error: Unable to reset {
    "command": "reset",
    "err": Error: reset test failure,
    "ns": "failure",
  },
]
`

exports[`test/account.test.js TAP account reset (signed in) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "event": "Ops CLI Reset",
    "ns": "analytics",
    "username": undefined,
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window\\n If the link doesn't open, please click the following URL:\\n  {dim http://example.url}\\n\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account reset > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window\\n If the link doesn't open, please click the following URL:\\n  {dim http://example.url}\\n\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin (failure: auth api error) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "message": "failed",
    "ns": "spinner",
  },
  Error {
    "command": "signin",
    "err": Error: signin test error,
    "ns": "failure",
    "type": "api",
  },
]
`

exports[`test/account.test.js TAP account signin (failure: empty teams array from teams api) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Error: According to the API, this user does not belong to any teams. {
    "command": "signin",
    "ns": "failure",
    "type": "api",
  },
]
`

exports[`test/account.test.js TAP account signin (failure: no teams from teams apis) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Error: According to the API, this user does not belong to any teams. {
    "command": "signin",
    "ns": "failure",
    "type": "api",
  },
]
`

exports[`test/account.test.js TAP account signin (failure: teams api error) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Error: test error {
    "command": "signin",
    "err": Error: test error,
    "ns": "failure",
    "type": "api",
  },
]
`

exports[`test/account.test.js TAP account signin (failure: teams api unauthorized) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Error: Unauthorized {
    "command": "signin",
    "err": Error: Unauthorized {
      "code": "ERR_UNAUTHORIZED",
    },
    "ns": "failure",
    "type": "api",
  },
]
`

exports[`test/account.test.js TAP account signin (failure: teams api upstream error) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Error: test error {
    "command": "signin",
    "err": Error: test error,
    "ns": "failure",
    "type": "api",
  },
]
`

exports[`test/account.test.js TAP account signin (failure: unauthorized) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "message": "failed",
    "ns": "spinner",
  },
  Error: 
🤔 Sorry, we couldn’t find an account with that email or password.
Forgot your password? Run {bold ops account:reset}
 {
    "command": "signin",
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/account.test.js TAP account signin --interactive > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "message": "Username or email:",
    "name": "user",
    "ns": "prompt",
    "type": "input",
  },
  Object {
    "mask": "*",
    "message": "Password:",
    "name": "password",
    "ns": "prompt",
    "type": "password",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin --password "TEST" --interactive > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "message": "Username or email:",
    "name": "user",
    "ns": "prompt",
    "type": "input",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin --password "TEST" > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "message": "Username or email:",
    "name": "user",
    "ns": "prompt",
    "type": "input",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin --user "TEST" --interactive > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "mask": "*",
    "message": "Password:",
    "name": "password",
    "ns": "prompt",
    "type": "password",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin --user "TEST" --password "TEST" --interactive > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin --user "TEST" --password "TEST" > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin --user "TEST" > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "mask": "*",
    "message": "Password:",
    "name": "password",
    "ns": "prompt",
    "type": "password",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin -i > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "message": "Username or email:",
    "name": "user",
    "ns": "prompt",
    "type": "input",
  },
  Object {
    "mask": "*",
    "message": "Password:",
    "name": "password",
    "ns": "prompt",
    "type": "password",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin -p "TEST" -i > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "message": "Username or email:",
    "name": "user",
    "ns": "prompt",
    "type": "input",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin -p "TEST" > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "message": "Username or email:",
    "name": "user",
    "ns": "prompt",
    "type": "input",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin -u "TEST" -i > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "mask": "*",
    "message": "Password:",
    "name": "password",
    "ns": "prompt",
    "type": "password",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin -u "TEST" -p "TEST" -i > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin -u "TEST" -p "TEST" > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin -u "TEST" > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "mask": "*",
    "message": "Password:",
    "name": "password",
    "ns": "prompt",
    "type": "password",
  },
  Object {
    "action": "start",
    "message": "{tuxEmphatic Authenticating}",
    "ns": "spinner",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signin > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n",
    "ns": "print",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": "test",
    },
  },
  Object {
    "event": "Ops CLI Signin",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n👋 {tuxEmphatic Welcome back} {italic.dim test}!\\n\\n👉 Type {italic.dim ops search} to find ops or {italic.dim ops init} to create your own!\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signout (already signed out) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Error: 
🤷‍♂️ Looks like you are already signed out.
    Run {tuxTerm ops account:signin} to sign back into your account.
 {
    "command": "signout",
    "ns": "failure",
    "type": "print",
  },
]
`

exports[`test/account.test.js TAP account signout (invalidate fail handling) > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "start",
    "message": "\\n{tuxEmphatic Signing out of }{tuxAction CTO.ai ops}\\n",
    "ns": "spinner",
  },
  Object {
    "event": "Ops CLI Signout",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "clear",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n{tuxSuccess ✓} Signed out! Type ops {tuxAction account:signin} to sign back into your account.\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signout > must match snapshot 1`] = `
Array [
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "action": "start",
    "message": "\\n{tuxEmphatic Signing out of }{tuxAction CTO.ai ops}\\n",
    "ns": "spinner",
  },
  Object {
    "event": "Ops CLI Signout",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "action": "clear",
    "ns": "config",
  },
  Object {
    "action": "stop",
    "message": "{tuxSuccess Done!}",
    "ns": "spinner",
  },
  Object {
    "message": "\\n{tuxSuccess ✓} Signed out! Type ops {tuxAction account:signin} to sign back into your account.\\n",
    "ns": "print",
  },
]
`

exports[`test/account.test.js TAP account signup (failure: empty teams array from teams api) > must match snapshot 1`] = `
Array [
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n\\n❔ Let us know if you have questions...\\n📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}\\n\\n⚡️ Let's get you {tuxCallOut started}...\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "Authenticating using Single Sign On",
    "ns": "spinner",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "interpolate": Array [
      "account.signout is not a function",
    ],
    "message": "\\n\\n⚠️  Attempting to signout with current login details failed. (%s)",
    "ns": "print",
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window and verify your email address before logging in\\n\\nIf the link doesn't open, please click the following URL {dim http://signup.test}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: According to the API, this user does not belong to any teams. {
    "command": "signup",
    "ns": "failure",
    "type": "api",
  },
]
`

exports[`test/account.test.js TAP account signup (failure: no teams from teams apis) > must match snapshot 1`] = `
Array [
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n\\n❔ Let us know if you have questions...\\n📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}\\n\\n⚡️ Let's get you {tuxCallOut started}...\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "Authenticating using Single Sign On",
    "ns": "spinner",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "interpolate": Array [
      "account.signout is not a function",
    ],
    "message": "\\n\\n⚠️  Attempting to signout with current login details failed. (%s)",
    "ns": "print",
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window and verify your email address before logging in\\n\\nIf the link doesn't open, please click the following URL {dim http://signup.test}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: According to the API, this user does not belong to any teams. {
    "command": "signup",
    "ns": "failure",
    "type": "api",
  },
]
`

exports[`test/account.test.js TAP account signup (failure: teams api error) > must match snapshot 1`] = `
Array [
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n\\n❔ Let us know if you have questions...\\n📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}\\n\\n⚡️ Let's get you {tuxCallOut started}...\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "Authenticating using Single Sign On",
    "ns": "spinner",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "interpolate": Array [
      "account.signout is not a function",
    ],
    "message": "\\n\\n⚠️  Attempting to signout with current login details failed. (%s)",
    "ns": "print",
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window and verify your email address before logging in\\n\\nIf the link doesn't open, please click the following URL {dim http://signup.test}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: test error {
    "command": "signup",
    "err": Error: test error,
    "ns": "failure",
    "type": "api",
  },
]
`

exports[`test/account.test.js TAP account signup (failure: teams api unauthorized) > must match snapshot 1`] = `
Array [
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n\\n❔ Let us know if you have questions...\\n📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}\\n\\n⚡️ Let's get you {tuxCallOut started}...\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "Authenticating using Single Sign On",
    "ns": "spinner",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "interpolate": Array [
      "account.signout is not a function",
    ],
    "message": "\\n\\n⚠️  Attempting to signout with current login details failed. (%s)",
    "ns": "print",
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window and verify your email address before logging in\\n\\nIf the link doesn't open, please click the following URL {dim http://signup.test}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: Unauthorized {
    "command": "signup",
    "err": Error: Unauthorized {
      "code": "ERR_UNAUTHORIZED",
    },
    "ns": "failure",
    "type": "api",
  },
]
`

exports[`test/account.test.js TAP account signup (invalid tokens) > must match snapshot 1`] = `
Array [
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n\\n❔ Let us know if you have questions...\\n📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}\\n\\n⚡️ Let's get you {tuxCallOut started}...\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "Authenticating using Single Sign On",
    "ns": "spinner",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window and verify your email address before logging in\\n\\nIf the link doesn't open, please click the following URL {dim http://signup.test}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "message": "❗️\\n",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: 🤔 Sorry, we couldn’t find an account with that email or password.
Forgot your password? Run {bold ops account:reset}
 {
    "command": "signup",
    "ns": "failure",
  },
]
`

exports[`test/account.test.js TAP account signup (not signed in) > must match snapshot 1`] = `
Array [
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n\\n❔ Let us know if you have questions...\\n📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}\\n\\n⚡️ Let's get you {tuxCallOut started}...\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "Authenticating using Single Sign On",
    "ns": "spinner",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "interpolate": Array [
      "Cannot read property 'tokens' of undefined",
    ],
    "message": "\\n\\n⚠️  Attempting to signout with current login details failed. (%s)",
    "ns": "print",
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window and verify your email address before logging in\\n\\nIf the link doesn't open, please click the following URL {dim http://signup.test}\\n",
    "ns": "print",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": Object {
        "email": "test",
        "id": "xxx",
        "username": "test",
      },
    },
  },
  Object {
    "event": "Ops CLI Signup",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "message": "\\n🎉 Account sign up complete - Ready to go!\\n\\n{tuxAction You're ready to build and share Ops with your team}\\nGet started by trying the following commands:\\n{reset.green →} Search for an Op\\n{tuxTerm ops search}\\n\\n{reset.green → } Create an Op\\n{tuxTerm ops init}\\n\\n{reset.green →} Publish an Op\\n{tuxTerm ops publish}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/account.test.js TAP account signup (signout failure) > must match snapshot 1`] = `
Array [
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n\\n❔ Let us know if you have questions...\\n📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}\\n\\n⚡️ Let's get you {tuxCallOut started}...\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "Authenticating using Single Sign On",
    "ns": "spinner",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "interpolate": Array [
      "signout test error",
    ],
    "message": "\\n\\n⚠️  Attempting to signout with current login details failed. (%s)",
    "ns": "print",
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window and verify your email address before logging in\\n\\nIf the link doesn't open, please click the following URL {dim http://signup.test}\\n",
    "ns": "print",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": Object {
        "email": "test",
        "id": "xxx",
        "username": "test",
      },
    },
  },
  Object {
    "event": "Ops CLI Signup",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "message": "\\n🎉 Account sign up complete - Ready to go!\\n\\n{tuxAction You're ready to build and share Ops with your team}\\nGet started by trying the following commands:\\n{reset.green →} Search for an Op\\n{tuxTerm ops search}\\n\\n{reset.green → } Create an Op\\n{tuxTerm ops init}\\n\\n{reset.green →} Publish an Op\\n{tuxTerm ops publish}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/account.test.js TAP account signup (tokens missing) > must match snapshot 1`] = `
Array [
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n\\n❔ Let us know if you have questions...\\n📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}\\n\\n⚡️ Let's get you {tuxCallOut started}...\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "Authenticating using Single Sign On",
    "ns": "spinner",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window and verify your email address before logging in\\n\\nIf the link doesn't open, please click the following URL {dim http://signup.test}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "message": "❗️\\n",
    "ns": "spinner",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
  Error: Tokens missing {
    "command": "signup",
    "ns": "failure",
  },
]
`

exports[`test/account.test.js TAP account signup > must match snapshot 1`] = `
Array [
  Object {
    "message": "\\n💻 {tuxMulti2 CTO.ai Ops} - {tuxAction The CLI built for Teams} 🚀\\n\\n👋 {tuxEmphatic Welcome to the} {tuxCallOut Ops CLI beta}!\\n\\n❔ Let us know if you have questions...\\n📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}\\n\\n⚡️ Let's get you {tuxCallOut started}...\\n",
    "ns": "print",
  },
  Object {
    "action": "start",
    "message": "Authenticating using Single Sign On",
    "ns": "spinner",
  },
  Function Error(),
  Object {
    "action": "read",
    "ns": "config",
  },
  Object {
    "message": "\\n💻  Please follow the prompts in the browser window and verify your email address before logging in\\n\\nIf the link doesn't open, please click the following URL {dim http://signup.test}\\n",
    "ns": "print",
  },
  Object {
    "action": "update",
    "ns": "config",
    "state": Object {
      "team": Object {
        "name": "test",
      },
      "tokens": Object {},
      "user": Object {
        "email": "test",
        "id": "xxx",
        "username": "test",
      },
    },
  },
  Object {
    "event": "Ops CLI Signup",
    "ns": "analytics",
    "username": "test",
  },
  Object {
    "message": "\\n🎉 Account sign up complete - Ready to go!\\n\\n{tuxAction You're ready to build and share Ops with your team}\\nGet started by trying the following commands:\\n{reset.green →} Search for an Op\\n{tuxTerm ops search}\\n\\n{reset.green → } Create an Op\\n{tuxTerm ops init}\\n\\n{reset.green →} Publish an Op\\n{tuxTerm ops publish}\\n",
    "ns": "print",
  },
  Object {
    "action": "stop",
    "ns": "spinner",
  },
]
`

exports[`test/account.test.js TAP account support > must match snapshot 1`] = `
Array [
  Object {
    "ns": "auth",
  },
  Object {
    "message": "\\n❔ Please reach out to us with questions anytime!\\n⌚️ We are typically available {tuxEmphatic Monday-Friday 9am-5pm PT}\\n📬 You can always reach us by {tuxUrl email mailto:support@cto.ai} {dim support@cto.ai}\\n\\n🖖 We'll get back to you as soon as we possibly can.\\n",
    "ns": "print",
  },
]
`
