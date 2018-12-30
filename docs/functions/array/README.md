# Array functions

Blah blah blah

## first

Get the first item(s) in an array

### Parameters

- `array` (type: Array) - The array to select from
- `count` (type: Number) - The number of items to retrieve (optional)
- `reverse` (type: Boolean) - Whether to reverse the returned array (optional)

### Returns

- (type: Any) - Either first item or an array of first x items

### Example

```js
$foo = $.qsa('.foo')
$firstFoo = $.first($foo)

arr = [2, 4, 6]
console.log($.first(arr, 2)) // [2, 4]
```

## last

Get the last item(s) in an array

### Parameters

- `array` (type: Array) - The array to select from
- `count` (type: Number) - The number of items to retrieve (optional)
- `reverse` (type: Boolean) - Whether to reverse the returned array (optional)

### Returns

- (type: Any) - Either last item or an array of last x items

### Example

```js
$foo = $.qsa('.foo')
$lastFoo = $.last($foo)

arr = [2, 4, 6]
console.log($.last(arr, 2)) // [4, 6]
```

## strip

Remove value(s) from an array

### Parameters

- `array` (type: Array) - The array to select from
- `values` (type: Any) - The values to remove

### Returns

- (type: Array) - The new array

### Example

```js
console.log($.strip([1, 2, 3, 4], 2, 4)) // [1, 3]
```
