# String functions

Blah blah blah

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
let slug = $.slugify(str) // 'lorem-ipsum'
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
let slug = $.truncate(str, 5) // 'Lorem…'
```
