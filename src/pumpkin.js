/**
 * Get an element in the DOM
 * @param  {String} selector The selector to match against
 * @param  {Node} scope      An element to search within [optional]
 * @return {Node}            The first matching element
 */
export const qs = (selector, scope = document) => scope.querySelector(selector)

/**
 * Get all matching elements in the DOM
 * @param  {String} selector The selector to match against
 * @param  {Node} scope      An element to search within [optional]
 * @return {Array}           The matching elements (as an array)
 */
export const qsa = (selector, scope = document) => [
  ...scope.querySelectorAll(selector)
]

/**
 * Get the first element in an array
 * @param  {Array} array The elements tomselect from
 * @return {Node}        The first element in the array
 */
export const first = array => array[0]

/**
 * Get the last element in an array
 * @param  {Array} array The elements to select from
 * @return {Node}        The last element in the array
 */
export const last = array => array[array.length - 1]

/**
 * Get the children of an element
 * @param  {Node} el The element to search
 * @return {Array}   The children of the passed element
 */
export const children = el => {
  let children = []
  for (let i = el.children.length; i--; ) {
    if (el.children[i].nodeType != 8) children.unshift(el.children[i])
  }
  return children
}

/**
 * Get the siblings of an element
 * @param  {Node} el The element to search
 * @return {Array}   The siblings of the passed element
 */
export const siblings = el => {
  let siblings = Array.prototype.slice.call(el.parentNode.children)
  for (let i = siblings.length; i--; ) {
    if (siblings[i] === el) {
      siblings.splice(i, 1)
      break
    }
  }
  return siblings
}

/**
 * Check if element contains child
 * @param  {Node} el    The element to search
 * @param  {Node} child The child element to search for
 * @return {Boolean}    Whether or not child was found
 */
export const contains = (el, child) => el !== child && el.contains(child)

/**
 * Removes all children from element
 * @param {Node} el The element to empty
 */
export const empty = el => {
  while (el.firstChild) el.removeChild(el.firstChild)
}

/**
 * Remove element from the DOM
 * @param {Node} el The element to remove
 */
export const remove = el => {
  el.parentNode.removeChild(el)
}

/**
 * Get the distance between an element and the top of the page
 * @param  {Node} el The element to check
 * @return {Number}  The distance from the top of the page
 */
export const fromTop = el => el.getBoundingClientRect().top + window.scrollY

/**
 * Show selected element
 * @param {Node} el The element to show
 */
export const show = el => {
  el.style.display = ''
}

/**
 * Hide selected element
 * @param {Node} el The element to hide
 */
export const hide = el => {
  el.style.display = 'none'
}

/**
 * Toggle visibility of selected element
 * @param {Node} el The element to toggle
 */
export const toggle = el => {
  el.style.display = el.style.display == 'none' ? '' : 'none'
}

/**
 * Apply multiple inline styles to an element
 * @param {Node} el    The element to apply the styles to
 * @param {Object} obj An object of CSS rules
 */
export const css = (el, obj) => {
  for (let rule in obj) {
    el.style[rule] = obj[rule]
  }
}

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
