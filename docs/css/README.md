---
next: /on/
prev: /toggle/
---

# css

Apply multiple inline styles to an element

## Parameters

- `el` (type: Node) - The element to apply the styles to
- `obj` (type: Object) - An object of CSS rules

## Example

```js
$foo = $.qs('.foo')
$.css($foo, {
  backgroundColor: 'red',
  fontWeight: 'bold'
})
```

## Source Code

```js
/**
 * Apply multiple inline styles to an element
 * @param {Node} el    The element to apply the styles to
 * @param {Object} obj An object of CSS rules
 */
export const css = (el, obj) => {
  for (let rule in obj) {
    el.style[rule] = obj[rule]
  }
}
```
