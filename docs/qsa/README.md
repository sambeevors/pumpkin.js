---
next: /first/
prev: /qs/
---

# qsa

Get all matching elements in the DOM

## Parameters

- `selector` (type: String) - The selector to match against
- `scope` (type: Node) - An element to search within

## Returns

- (type: Array) - The matching elements

:::tip
Because `qsa` returns as an array, you have access to [array prototype methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
:::

## Example

```js
$foo = $.qsa('.foo')
```

## Source Code

```js
/**
 * Get all matching elements in the DOM
 * @param  {String} selector The selector to match against
 * @param  {Node} scope      An element to search within [optional]
 * @return {Array}           The matching elements (as an array)
 */
export const qsa = (selector, scope = document) => [
  ...scope.querySelectorAll(selector)
]
```
