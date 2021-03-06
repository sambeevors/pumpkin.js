---
next: /functions/array/
prev: /functions/dom/
---

# String functions

The following functions concern string manipulation.

## slugify

Slugify a string

### Parameters

- `text` (type: String) - The string to slugify
- `separator` (type: String) - Custom word seperator

### Returns

- (type: String) - The 'slugified' string

### Example

```js
let str = 'Lorem Ipsum!'

$.slugify(str) // 'lorem-ipsum'
$.slugify(str, '_') // 'lorem_ipsum'
```

## truncate

Truncate a string

### Parameters

- `text` (type: String) - The string to truncate
- `limit` (type: Number) - String length limit
- `append` (type: Mixed) - Character(s) to append to the truncated string (or false to omit) [optional]

### Returns

- (type: String) - The 'truncated' string

### Example

```js
let str = 'Lorem Ipsum!'

$.truncate(str, 5) // 'Lorem…'
$.truncate(str, 5, ' - Read more 👉🏻') // 'Lorem - Read more 👉🏻'
$.truncate(str, 5, false) // 'Lorem'
```

## validateEmail

Check if a string is recognised as a potential email address

### Parameters

- `email` (type: String) - The email address to test

### Returns

- (type: String) - If the string is a valid email address

### Example

```js
let realEmail = 'someone@example.com'
let fakeEmail = 'blah blah blah'

$.validEmail(realEmail) // true
$.validEmail(fakeEmail) // false
```

## stripTags

Check if a string is recognised as a potential email address

### Parameters

- `string` (type: String) - The string to operate on

### Returns

- (type: String) - The new string, with HTML tags removed

### Example

```js
$.stripTags('<div>Hello world</div>') // 'Hello world'
$.stripTags(`
  <div>
    <h1>Hey there!</h1>
    <p>How are you?</p>
  </div>
`) // 'Hey there! How are you?'
```
