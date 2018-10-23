---
next: /fromTop/
prev: /empty/
---

# remove

Remove element from the DOM

## Parameters

- `el` (type: Node) - The element to remove

## Example

```js
$foo = $.qs('.foo')
$.remove($foo)
```

## Source Code

```js
/**
 * Remove element from the DOM
 * @param {Node} el The element to remove
 */
export const remove = el => {
  el.parentNode.removeChild(el)
}
```
