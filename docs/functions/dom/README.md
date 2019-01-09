---
next: /functions/string/
prev: /functions/array/
---

# DOM functions

The following functions concern DOM manipulation including events.

## qs

Get an element in the DOM

### Parameters

- `selector` (type: String) - The selector to match against
- `scope` (type: Node) - An element to search within

### Returns

- (type: Node) - The first matching element

### Example

```js
$foo = $.qs('.foo')
```

## qsa

Get all matching elements in the DOM as an array

### Parameters

- `selector` (type: String) - The selector to match against
- `scope` (type: Node) - An element to search within

### Returns

- (type: Array) - The matching elements

:::tip
Because `qsa` returns as an array, you have access to [array prototype methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
:::

### Example

```js
$foo = $.qsa('.foo')
```

## children

Get the children of an element

### Parameters

- `el` (type: Node) - The element to search

### Returns

- (type: Array) - The children of the passed element

### Example

```js
$foo = $.qs('.foo')
$fooChildren = $.children($foo)
```

## siblings

Get the siblings of an element

### Parameters

- `el` (type: Node) - The element to search

### Returns

- (type: Array) - The siblings of the passed element

### Example

```js
$foo = $.qs('.foo')
$fooSiblings = $.siblings($foo)
```

## contains

Check if element contains child

### Parameters

- `el` (type: Node) - The element to search
- `child` (type: Node) - The child element to search for

### Returns

- (type: Boolean) - Whether or not child was found

### Example

```js
$foo = $.qs('.foo')
$bar = $.qs('.bar')

console.log($.contains($foo, $bar))
```

## empty

Removes all children from element

### Parameters

- `el` (type: Node) - The element to empty

### Example

```js
$foo = $.qs('.foo')
$.empty($foo)
```

## remove

Remove element from the DOM

### Parameters

- `el` (type: Node) - The element to remove

### Example

```js
$foo = $.qs('.foo')
$.remove($foo)
```

## fromTop

Get the distance between an element and the top of the page

### Parameters

- `el` (type: Node) - The element to check

### Returns

- (type: Number) - The distance from the top of the page (in pixels)

### Example

```js
$foo = $.qs('.foo')
$.fromTop($foo) // 100
```

## show

Show selected element

### Parameters

- `el` (type: Node) - The element to show

### Example

```js
$foo = $.qs('.foo')
$.show($foo)
```

## hide

Hide selected element

### Parameters

- `el` (type: Node) - The element to hide

### Example

```js
$foo = $.qs('.foo')
$.hide($foo)
```

## toggle

Toggle visibility of selected element

### Parameters

- `el` (type: Node) - The element to toggle

### Example

```js
$foo = $.qs('.foo')
$.toggle($foo)
```

## css

Apply multiple inline styles to an element

### Parameters

- `el` (type: Node) - The element to apply the styles to
- `obj` (type: Object) - An object of CSS rules

### Example

```js
$foo = $.qs('.foo')
$.css($foo, {
  backgroundColor: 'red',
  fontWeight: 'bold'
})
```

## on

Apply propagating event handlers

### Parameters

- `event` (type: String) - The event to trigger on
- `array` (type: Array) - The array of nodes to apply to
- `selector` (type: String) - Query selector for event to bind to [optional]
- `cb` (type: Function) - The function to run upon event

### Example

```js
$foo = $.qsa('.foo')

$.on('click', $foo, 'a', e => {
  console.log(e)
})
```

## ready

Run callback function once DOM has fully loaded

### Parameters

- `cb` (type: Function) - The function to run once ready

### Example

```js
$.ready(() => {
  console.log('DOM is ready')
})
```
