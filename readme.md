# 🎃 pumpkin.js

[![GitHub issues](https://img.shields.io/github/issues/sambeevors/pumpkin.js.svg)](https://github.com/sambeevors/pumpkin.js/issues) [![GitHub stars](https://img.shields.io/github/stars/sambeevors/pumpkin.js.svg)](https://github.com/sambeevors/pumpkin.js/stargazers) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

A micro-library for writing vanilla javascript as efficiently as possible.

[Official Documentation](https://sambeevors.github.io/pumpkin.js/)

# ✨ Features

- ## 🤓 Super Simple

  Import and start coding without relying on any other dependencies

- ## 👣 Microscopic Footprint

  Under 1KB in size, yet incredibly powerful and time-saving

- ## 📈 Performant

  Written with performance in mind, and making use of modern Javascript methods where avaliable

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
