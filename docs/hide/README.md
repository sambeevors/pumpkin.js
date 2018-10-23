---
next: /toggle/
prev: /show/
---

# hide

Dide selected element

## Parameters

- `el` (type: Node) - The element to hide

## Example

```js
$foo = $.qs('.foo')
$.hide($foo)
```

## Source Code

```js
/**
 * Hide selected element
 * @param {Node} el The element to hide
 */
export const hide = el => {
  el.style.display = 'none'
}
```
