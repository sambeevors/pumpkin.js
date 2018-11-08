---
next: /children/
prev: /last/
---

# strip

Remove value(s) from an array

## Parameters

- `array` (type: Array) - The array to select from
- `values` (type: Any) - The values to remove

## Returns

- (type: Array) - The new array

## Example

```js
console.log($.strip([1, 2, 3, 4], 2, 4)) // [1, 3]
```

## Source Code

```js
/**
 * Remove value(s) from an array
 * @param  {Array} array The array to select from
 * @param  {Any} values  The values to remove
 * @return {Array}       The new array
 */
export const strip = (array, ...values) => {
  values.forEach(value => {
    array = array.filter(item => item !== value)
  })
  return array
}
```
