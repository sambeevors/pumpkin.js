# 🎃 pumpkin.js

A micro-library for writing vanilla javascript as efficiently as possible.

# ✨ Features

- Super simple shorthand DOM selectors
- Multiple nodes returned as a REAL array
- jQuery-like ready function (without the need for jQuery)

# 🔧 Installation

```
$ npm i --save pumpkin.js
```

# 📦 Usage

You can import the package using ESM imports

```js
import pumpkin from 'pumpkin.js'
```

Or just good old CJS imports

```js
const pumpkin = require('pumpkin.js')
```

> Pumpkin!? That's a terrible name!

You're probably right, which is why pumpkin is returned as a default function, letting you import it as whatever you want

```js
import $ from 'pumpkin.js'
```

# ✏️ Example️

```js
import $ from 'pumpkin.js'

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
