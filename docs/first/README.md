---
next: /last/
prev: /qsa/
---

# first

Get the first element in an array

## Parameters

- `array` (type: String) - The elements tomselect from

## Returns

- (type: Node) - The first element in the array

## Example

```js
$foo = $.qsa('.foo')
$firstFoo = $.first($foo)
```

## Source Code

```js
/**
 * Get the first element in an array
 * @param  {Array} array The elements tomselect from
 * @return {Node}        The first element in the array
 */
export const first = array => array[0]
```
