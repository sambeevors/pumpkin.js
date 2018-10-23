---
next: /contains/
prev: /children/
---

# siblings

Get the siblings of an element

## Parameters

- `el` (type: Node) - The element to search

## Returns

- (type: Array) - The siblings of the passed element

## Example

```js
$foo = $.qs('.foo')
$fooSiblings = $.siblings($foo)
```

## Source Code

```js
/**
 * Get the siblings of an element
 * @param  {Node} el The element to search
 * @return {Array}   The siblings of the passed element
 */
export const siblings = el => {
  let siblings = Array.prototype.slice.call(el.parentNode.children)
  for (let i = siblings.length; i--; ) {
    if (siblings[i] === el) {
      siblings.splice(i, 1)
      break
    }
  }
  return siblings
}
```
