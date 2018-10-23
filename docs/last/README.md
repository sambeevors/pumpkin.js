---
next: /children/
prev: /first/
---

# last

Get the last element in an array

## Parameters

- `array` (type: String) - The elements tomselect from

## Returns

- (type: Node) - The last element in the array

## Example

```js
$foo = $.qsa('.foo')
$lastFoo = $.last($foo)
```

## Source Code

```js
/**
 * Get the last element in an array
 * @param  {Array} array The elements to select from
 * @return {Node}        The last element in the array
 */
export const last = array => array[array.length - 1]
```
