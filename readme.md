# 🎃 pumpkin.js

A micro-library for writing vanilla javascript as efficiently as possible.

[Official Documentation](https://sambeevors.github.io/pumpkin.js/)

# ✨ Features

- Super simple shorthand DOM selectors
- Multiple nodes returned as a REAL array
- jQuery-like ready function (without the need for jQuery)
- Under 1KB in size minified
- Commonly written (and rewritten) helper functions

# 🔧 Installation

```
$ npm i --save pumpkin.js
```

# 📦 Usage

You can import the package using ESM imports

```js
import * as $ from 'pumpkin.js'
```

Or just good old CJS imports

```js
const $ = require('pumpkin.js')
```

# ✏️ Example️

```js
import * as $ from 'pumpkin.js'

$.ready(() => {
  const $header = $.qs('header')
  const $cards = $.qsa('.card')
  const $lastCard = $.last($cards)

  $header.innerHTML = `
    <h1>Hello World! 🎃</h1>
  `

  // We can use forEach because $cards is actually an array
  $cards.forEach($card => {
    $card.classList.add('-loaded')
  })

  $lastCard.classList.add('-last')
})
```

# 👫 Contributing

Contributions are welcome, feel free to suggest improvements via GitHub issues, or open any pull requests you may have
