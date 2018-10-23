---
next: /css/
prev: /hide/
---

# toggle

Toggle visibility of selected element

## Parameters

- `el` (type: Node) - The element to toggle

## Example

```js
$foo = $.qs('.foo')
$.toggle($foo)
```

## Source Code

```js
/**
 * Toggle visibility of selected element
 * @param {Node} el The element to toggle
 */
export const toggle = el => {
  el.style.display = el.style.display == 'none' ? '' : 'none'
}
```
