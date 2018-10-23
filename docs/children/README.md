---
next: /siblings/
prev: /last/
---

# children

Get the children of an element

## Parameters

- `el` (type: Node) - The element to search

## Returns

- (type: Array) - The children of the passed element

## Example

```js
$foo = $.qs('.foo')
$fooChildren = $.children($foo)
```

## Source Code

```js
/**
 * Get the children of an element
 * @param  {Node} el The element to search
 * @return {Array}   The children of the passed element
 */
export const children = el => {
  let children = []
  for (let i = el.children.length; i--; ) {
    if (el.children[i].nodeType != 8) children.unshift(el.children[i])
  }
  return children
}
```
