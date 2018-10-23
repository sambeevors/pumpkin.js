---
next: /empty/
prev: /siblings/
---

# contains

Check if element contains child

## Parameters

- `el` (type: Node) - The element to search
- `child` (type: Node) - The child element to search for

## Returns

- (type: Boolean) - Whether or not child was found

## Example

```js
$foo = $.qs('.foo')
$bar = $.qs('.bar')

console.log($.contains($foo, $bar))
```

## Source Code

```js
/**
 * Check if element contains child
 * @param  {Node} el    The element to search
 * @param  {Node} child The child element to search for
 * @return {Boolean}    Whether or not child was found
 */
export const contains = (el, child) => el !== child && el.contains(child)
```
