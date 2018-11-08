---
next: /strip/
prev: /first/
---

# last

Get the last item(s) in an array

## Parameters

- `array` (type: Array) - The array to select from
- `count` (type: Number) - The number of items to retrieve (optional)
- `reverse` (type: Boolean) - Whether to reverse the returned array (optional)

## Returns

- (type: Any) - Either last item or an array of last x items

## Example

```js
$foo = $.qsa('.foo')
$lastFoo = $.last($foo)

arr = [2, 4, 6]
console.log($.last(arr, 2)) // [4, 6]
```

## Source Code

```js
/**
 * Get the last item(s) in an array
 * @param  {Array} array     The array to select from
 * @param  {Number} count    The number of items to retrieve (optional)
 * @param  {Boolean} reverse Whether to reverse the returned array (optional)
 * @return {Any}             Either last item or an array of last x items
 */
export const last = (array, count, reverse) => {
  if (!count) return array[array.length - 1]

  let newArray = []
  for (let i = 1; i <= count; i++) newArray.push(array[array.length - i])
  return reverse ? newArray : newArray.reverse()
}
```
