---
next: /qsa/
prev: /functions/
---

# qs

Get an element in the DOM

## Parameters

- `selector` (type: String) - The selector to match against
- `scope` (type: Node) - An element to search within

## Returns

- (type: Node) - The first matching element

## Example

```js
$foo = $.qs('.foo')
```

## Source Code

```js
/**
 * Get an element in the DOM
 * @param  {String} selector The selector to match against
 * @param  {Node} scope      An element to search within [optional]
 * @return {Node}            The first matching element
 */
export const qs = (selector, scope = document) => scope.querySelector(selector)
```
