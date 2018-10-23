---
next: /show/
prev: /remove/
---

# fromTop

Get the distance between an element and the top of the page

## Parameters

- `el` (type: Node) - The element to check

## Returns

- (type: Number) - The distance from the top of the page

## Example

```js
$foo = $.qs('.foo')
fooFromTop = $.fromTop($foo)
```

## Source Code

```js
/**
 * Get the distance between an element and the top of the page
 * @param  {Node} el The element to check
 * @return {Number}  The distance from the top of the page
 */
export const fromTop = el => el.getBoundingClientRect().top + window.scrollY
```
