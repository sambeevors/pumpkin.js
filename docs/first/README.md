---
next: /last/
prev: /qsa/
---

# first

Get the first item(s) in an array

## Parameters

- `array` (type: Array) - The array to select from
- `count` (type: Number) - The number of items to retrieve (optional)
- `reverse` (type: Boolean) - Whether to reverse the returned array (optional)

## Returns

- (type: Any) - Either first item or an array of first x items

## Example

```js
$foo = $.qsa('.foo')
$firstFoo = $.first($foo)

arr = [2, 4, 6]
console.log($.first(arr, 2)) // [2, 4]
```

## Source Code

```js
/**
 * Get the first item(s) in an array
 * @param  {Array} array     The array to select from
 * @param  {Number} count    The number of items to retrieve (optional)
 * @param  {Boolean} reverse Whether to reverse the returned array (optional)
 * @return {Any}             Either first item or an array of first x items
 */
export const first = (array, count, reverse) => {
  if (!count) return array[0]

  let newArray = []
  for (let i = 0; i < count; i++) newArray.push(array[i])
  return reverse ? newArray.reverse() : newArray
}
```
