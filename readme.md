# 🎃 pumpkin.js

[![GitHub issues](https://img.shields.io/github/issues/sambeevors/pumpkin.js.svg)](https://github.com/sambeevors/pumpkin.js/issues) [![GitHub stars](https://img.shields.io/github/stars/sambeevors/pumpkin.js.svg)](https://github.com/sambeevors/pumpkin.js/stargazers) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A micro-library for writing vanilla javascript as efficiently as possible.

[Official Documentation](https://pumpkinjs.netlify.com/)

# ✨ Why pumpkin.js?

With Javascript being so good nowadays, big libraries like jQuery are becoming less and less necessary. There are a few things, however, which you find yourself rewriting a lot, and bulking up your code with random stack overflow snippets.

Pumpkin attempts to eliminate this by adding numerous little helper functions to achieve common goals consistently. It's dependency free, and microscopic in size (written with tree-shaking in mind), making it an easy win on any project.

# 🔧 Installation

pumpkin.js can be installed via npm or yarn
```
npm i --save pumpkin.js
```
```
yarn add pumpkin.js
```

# 📦 Usage

You can import the package using ESM imports

```js
// Import all functions under one variable...
import * as $ from 'pumpkin.js'
```

```js
// ...or just import the function(s) you need
import { css, empty } from 'pumpkin.js'
```

Or just good old CJS imports

```js
const $ = require('pumpkin.js')
```

# ✏️ Example️s

Empty an element of all its children

```js
$.empty(el)
```

Add CSS to an element

```js
$.css(el, {
  margin: '20px auto',
  background: 'red'
})
```

Get the last 2 items in an array, in reverse order
```js
$.last([1, 2, 3, 4], 2, true) // [4, 3]
```

Validate an email address

```js
let realEmail = 'someone@example.com'
let fakeEmail = 'blah blah blah'

$.validEmail(realEmail) // true
$.validEmail(fakeEmail) // false
```

Strip HTML tags from a string

```js
$.stripTags('<div>Hello world</div>') // 'Hello world'
```

There's loads more you can do, too. You can see all the avaliable functions in [the docs](https://pumpkinjs.netlify.com/).

# ❓FAQs

*
  **Q**. Isn't this quite a random selection of functions?

  **A**. Yes, yes it is. The aim of the project is to essentially eliminate the amount of times you need to paste some questionable code in from Stack Overflow *(How many times have you typed something like "Check if element contains child javascript no jquery", only to have to filter through all the jQuery answers to find out what you need to write)*. The benefit of this is all the functions in pumpkin.js are heavily tested in lots of different scenarios and are performance optimized.

*
  **Q**. Why would I use this over something like jQuery?

  **A**. These big libraries are massive in size, and add a lot of weight your page which negatively impacts performance. A lot of the time (but not always), these huge libraries are overkill, and the same effect can be achieved easily with vanilla Javascript, and a bit of help from pumpkin.js.

# 👫 Contributing

Contributions are welcome, feel free to suggest improvements via GitHub issues, or open any pull requests you may have.
