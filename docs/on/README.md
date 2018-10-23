---
next: /ready/
prev: /css/
---

# on

Apply propagating event handlers

## Parameters

- `event` (type: String) - The event to trigger on
- `array` (type: Array) - The array of nodes to apply to
- `selector` (type: String) - Query selector for event to bind to [optional]
- `cb` (type: Function) - The function to run upon event

## Example

```js
$foo = $.qsa('.foo')

$.on('click', $foo, 'a', e => {
  console.log(e)
})
```

## Source Code

```js
/**
 * Apply propagating event handlers
 * @param {String} event    The event to trigger on
 * @param {Array} array     The array of nodes to apply to
 * @param {String} selector Query selector for event to bind to [optional]
 * @param {Function} cb     The function to run upon event trigger
 */
export const on = (event, array, selector, cb) => {
  cb = typeof selector === 'function' ? selector : cb
  array = array.length ? array : [array]

  const listener = function(e) {
    if (typeof selector === 'string') {
      if (e.target.closest(selector)) {
        cb.apply(e.target.closest(selector), [e])
      }
    } else {
      cb.apply(this, [e])
    }
  }

  array.forEach(item => {
    item.addEventListener(event, listener)
  })
}
```
