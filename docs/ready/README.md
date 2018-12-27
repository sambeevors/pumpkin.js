---
prev: /on/
next: /slugify/
---

# ready

Run callback function once DOM has fully loaded

## Parameters

- `cb` (type: Function) - The function to run once ready

## Example

```js
$.ready(() => {
  console.log('DOM is ready')
})
```

## Source Code

```js
/**
 * Run callback function once DOM has fully loaded
 * @param {Function} cb The function to run once ready
 */
export const ready = cb => {
  if (document.readyState != 'loading') cb()
  else if (document.addEventListener)
    document.addEventListener('DOMContentLoaded', cb)
  else
    document.attachEvent('onreadystatechange', () => {
      if (document.readyState == 'complete') cb()
    })
}
```
