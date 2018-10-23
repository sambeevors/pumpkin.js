---
next: /hide/
prev: /fromTop/
---

# show

Show selected element

## Parameters

- `el` (type: Node) - The element to show

## Example

```js
$foo = $.qs('.foo')
$.show($foo)
```

## Source Code

```js
/**
 * Show selected element
 * @param {Node} el The element to show
 */
export const show = el => {
  el.style.display = ''
}
```
