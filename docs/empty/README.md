---
next: /remove/
prev: /contains/
---

# empty

Removes all children from element

## Parameters

- `el` (type: Node) - The element to empty

## Example

```js
$foo = $.qs('.foo')
$.empty($foo)
```

## Source Code

```js
/**
 * Removes all children from element
 * @param {Node} el The element to empty
 */
export const empty = el => {
  while (el.firstChild) el.removeChild(el.firstChild)
}
```
