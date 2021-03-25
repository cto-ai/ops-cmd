/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports['test/profile.test.js TAP profile create (error: exists) > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "message": "Create Profile:",
    "name": "result",
    "ns": "prompt",
    "required": true,
    "template": "{\\n  \\"name\\": \\"\${name}\\",\\n  \\"api\\": \\"\${api}\\",\\n  \\"registry\\": \\"\${registry}\\",\\n  \\"auth\\": {\\n   \\"id\\": \\"\${id}\\",\\n   \\"url\\": \\"\${url}\\"\\n  }\\n}",
    "type": "snippet",
  },
  Error: Profile "test" already exists {
    "command": AsyncGeneratorFunction create(),
    "ns": "failure",
  },
]
`

exports['test/profile.test.js TAP profile create (error: general) > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "message": "Create Profile:",
    "name": "result",
    "ns": "prompt",
    "required": true,
    "template": "{\\n  \\"name\\": \\"\${name}\\",\\n  \\"api\\": \\"\${api}\\",\\n  \\"registry\\": \\"\${registry}\\",\\n  \\"auth\\": {\\n   \\"id\\": \\"\${id}\\",\\n   \\"url\\": \\"\${url}\\"\\n  }\\n}",
    "type": "snippet",
  },
  Error: Unable to create profile {
    "command": AsyncGeneratorFunction create(),
    "err": TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    |     property 'result' -> object with constructor 'Object'
    |     property 'values' -> object with constructor 'Object'
    --- property 'registry' closes the circle,
    "ns": "failure",
  },
]
`

exports['test/profile.test.js TAP profile create (profile contains sub-arrays) > must match snapshot 1'] = `
{"name":"test","api":"http://api.test","registry":"registry.test","auth":{"id":"ops-cli","realm":"ops","url":"https://cto.ai/auth"}}
`

exports['test/profile.test.js TAP profile create (profile contains sub-arrays) > must match snapshot 2'] = `
Array [
  Function Error(),
  Object {
    "message": "Create Profile:",
    "name": "result",
    "ns": "prompt",
    "required": true,
    "template": "{\\n  \\"name\\": \\"\${name}\\",\\n  \\"api\\": \\"\${api}\\",\\n  \\"registry\\": \\"\${registry}\\",\\n  \\"auth\\": {\\n   \\"id\\": \\"\${id}\\",\\n   \\"realm\\": \\"\${realm}\\",\\n   \\"url\\": \\"\${url}\\"\\n  }\\n}",
    "type": "snippet",
  },
  Object {
    "message": "Profile {bold test} created.",
    "ns": "print",
  },
]
`

exports['test/profile.test.js TAP profile create --prefab "staging" > must match snapshot 1'] = `
{"name":"staging","auth":{"id":"ops-cli","realm":"ops","url":"https://www.stg-platform.hc.ai/auth"},"api":"https://www.stg-platform.hc.ai/api/v1","registry":"registry.stg-platform.hc.ai"}
`

exports['test/profile.test.js TAP profile create --prefab "staging" > must match snapshot 2'] = `
Array [
  Function Error(),
  Object {
    "message": "Profile {bold staging} created.",
    "ns": "print",
  },
]
`

exports['test/profile.test.js TAP profile create -p "staging" > must match snapshot 1'] = `
{"name":"staging","auth":{"id":"ops-cli","realm":"ops","url":"https://www.stg-platform.hc.ai/auth"},"api":"https://www.stg-platform.hc.ai/api/v1","registry":"registry.stg-platform.hc.ai"}
`

exports['test/profile.test.js TAP profile create -p "staging" > must match snapshot 2'] = `
Array [
  Function Error(),
  Object {
    "message": "Profile {bold staging} created.",
    "ns": "print",
  },
]
`

exports['test/profile.test.js TAP profile create > must match snapshot 1'] = `
{"name":"test","api":"http://api.test","registry":"registry.test","auth":{"id":"ops-cli","realm":"ops","url":"https://cto.ai/auth"}}
`

exports['test/profile.test.js TAP profile create > must match snapshot 2'] = `
Array [
  Function Error(),
  Object {
    "message": "Create Profile:",
    "name": "result",
    "ns": "prompt",
    "required": true,
    "template": "{\\n  \\"name\\": \\"\${name}\\",\\n  \\"api\\": \\"\${api}\\",\\n  \\"registry\\": \\"\${registry}\\",\\n  \\"auth\\": {\\n   \\"id\\": \\"\${id}\\",\\n   \\"realm\\": \\"\${realm}\\",\\n   \\"url\\": \\"\${url}\\"\\n  }\\n}",
    "type": "snippet",
  },
  Object {
    "message": "Profile {bold test} created.",
    "ns": "print",
  },
]
`

exports['test/profile.test.js TAP profile list > must match snapshot 1'] = `
Array [
  Object {
    "message": "{bold * test1}",
    "ns": "print",
  },
  Object {
    "message": "{dim - test2}",
    "ns": "print",
  },
]
`

exports['test/profile.test.js TAP profile remove (disconfirm) > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "choices": Array [
      Object {
        "disabled": false,
        "name": "test1",
      },
      Object {
        "disabled": false,
        "name": "test2",
      },
    ],
    "message": "Remove a profile",
    "name": "profile",
    "ns": "prompt",
    "type": "select",
  },
  Object {
    "format": Function format(sure),
    "message": "Delete test2?",
    "name": "sure",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "message": "Profile {bold test2} was not deleted",
    "ns": "print",
  },
]
`

exports['test/profile.test.js TAP profile remove (disconfirm) > must match snapshot 2'] = `
Array [
  "test1",
  "test2",
]
`

exports['test/profile.test.js TAP profile remove (error) > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "choices": Array [
      Object {
        "disabled": false,
        "name": "test1",
      },
      Object {
        "disabled": false,
        "name": "test2",
      },
    ],
    "message": "Remove a profile",
    "name": "profile",
    "ns": "prompt",
    "type": "select",
  },
  Object {
    "format": Function format(sure),
    "message": "Delete test2?",
    "name": "sure",
    "ns": "prompt",
    "type": "confirm",
  },
  Error: Failed to delete profile {bold test2} {
    "command": AsyncGeneratorFunction remove(),
    "err": Error: EACCES: permission denied, scandir  {
      "code": "EACCES",
      "errno": -13,
      "path": "/profiles/test2",
      "syscall": "scandir",
    },
    "ns": "failure",
  },
]
`

exports['test/profile.test.js TAP profile remove > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "choices": Array [
      Object {
        "disabled": "<selected>",
        "name": "test1",
      },
      Object {
        "disabled": false,
        "name": "test2",
      },
    ],
    "message": "Remove a profile",
    "name": "profile",
    "ns": "prompt",
    "type": "select",
  },
  Object {
    "format": Function format(sure),
    "message": "Delete test2?",
    "name": "sure",
    "ns": "prompt",
    "type": "confirm",
  },
  Object {
    "message": "Profile {bold test2} was deleted",
    "ns": "print",
  },
]
`

exports['test/profile.test.js TAP profile remove > must match snapshot 2'] = `
Array [
  "test1",
]
`

exports['test/profile.test.js TAP profile select (backup read failure mode) > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "autofocus": null,
    "choices": Array [
      "test1",
      "test2",
    ],
    "message": "Select a profile",
    "name": "profile",
    "ns": "prompt",
    "type": "select",
  },
  Object {
    "message": "Profile {bold test2} is now selected",
    "ns": "print",
  },
]
`

exports['test/profile.test.js TAP profile select (backup->fail->restore->restore fail (config is symlinked)) > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "autofocus": "test1",
    "choices": Array [
      "test1",
      "test2",
    ],
    "message": "Select a profile",
    "name": "profile",
    "ns": "prompt",
    "type": "select",
  },
  Object {
    "message": "Unable to restore config.json after selection failure",
    "ns": "print",
  },
  Object {
    "message": "Unable to restore config.json after selection failure",
    "ns": "print",
  },
  Error: Failed to select profile {bold test2} {
    "command": AsyncGeneratorFunction select(),
    "err": Error: EEXIST: file already exists, symlink '/profiles/test2/config.json' -> '/config.json' {
      "code": "EEXIST",
      "dest": "/config.json",
      "errno": -17,
      "path": "/profiles/test2/config.json",
      "syscall": "symlink",
    },
    "ns": "failure",
  },
]
`

exports['test/profile.test.js TAP profile select (backup->fail->restore->restore fail (no current)) > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "autofocus": null,
    "choices": Array [
      "test1",
      "test2",
    ],
    "message": "Select a profile",
    "name": "profile",
    "ns": "prompt",
    "type": "select",
  },
  Object {
    "message": "Unable to restore config.json after selection failure",
    "ns": "print",
  },
  Object {
    "message": "Unable to restore config.json after selection failure",
    "ns": "print",
  },
  Error: Failed to select profile {bold test2} {
    "command": AsyncGeneratorFunction select(),
    "err": Error: EEXIST: file already exists, symlink '/profiles/test2/config.json' -> '/config.json' {
      "code": "EEXIST",
      "dest": "/config.json",
      "errno": -17,
      "path": "/profiles/test2/config.json",
      "syscall": "symlink",
    },
    "ns": "failure",
  },
]
`

exports['test/profile.test.js TAP profile select (backup->fail->restore->restore fail) > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "autofocus": "test1",
    "choices": Array [
      "test1",
      "test2",
    ],
    "message": "Select a profile",
    "name": "profile",
    "ns": "prompt",
    "type": "select",
  },
  Object {
    "message": "Profile {bold test2} is now selected",
    "ns": "print",
  },
]
`

exports['test/profile.test.js TAP profile select (backup->upgrade) > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "autofocus": null,
    "choices": Array [
      "test1",
      "test2",
    ],
    "message": "Select a profile",
    "name": "profile",
    "ns": "prompt",
    "type": "select",
  },
  Object {
    "message": "Profile {bold test2} is now selected",
    "ns": "print",
  },
]
`

exports['test/profile.test.js TAP profile select > must match snapshot 1'] = `
Array [
  Function Error(),
  Object {
    "autofocus": null,
    "choices": Array [
      "test1",
      "test2",
    ],
    "message": "Select a profile",
    "name": "profile",
    "ns": "prompt",
    "type": "select",
  },
  Object {
    "message": "Profile {bold test2} is now selected",
    "ns": "print",
  },
]
`
