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
 * Get the first item(s) in an array
 * @param  {Array} array     The array to select from
 * @param  {Number} count    The number of items to retrieve [optional]
 * @param  {Boolean} reverse Whether to reverse the returned array [optional]
 * @return {Any}             Either first item or an array of first x items
 */
export const first = (array, count, reverse) => {
  if (!count) return array[0]

  let newArray = []
  for (let i = 0; i < count; i++) newArray.push(array[i])
  return reverse ? newArray.reverse() : newArray
}

/**
 * Get the last item(s) in an array
 * @param  {Array} array     The array to select from
 * @param  {Number} count    The number of items to retrieve [optional]
 * @param  {Boolean} reverse Whether to reverse the returned array [optional]
 * @return {Any}             Either last item or an array of last x items
 */
export const last = (array, count, reverse) => {
  if (!count) return array[array.length - 1]

  let newArray = []
  for (let i = 1; i <= count; i++) newArray.push(array[array.length - i])
  return reverse ? newArray : newArray.reverse()
}

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

/**
 * Slugify a string
 * @param {String} text The string to slugify
 * @param {String} text Custom word seperator [optional]
 * @return {String}     The 'slugified' string
 */
export const slugify = (text, separator) => {
  text = text
    .toString()
    .toLowerCase()
    .trim()

  const sets = [
    { to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]' },
    { to: 'c', from: '[ÇĆĈČ]' },
    { to: 'd', from: '[ÐĎĐÞ]' },
    { to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]' },
    { to: 'g', from: '[ĜĞĢǴ]' },
    { to: 'h', from: '[ĤḦ]' },
    { to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]' },
    { to: 'j', from: '[Ĵ]' },
    { to: 'ij', from: '[Ĳ]' },
    { to: 'k', from: '[Ķ]' },
    { to: 'l', from: '[ĹĻĽŁ]' },
    { to: 'm', from: '[Ḿ]' },
    { to: 'n', from: '[ÑŃŅŇ]' },
    { to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]' },
    { to: 'oe', from: '[Œ]' },
    { to: 'p', from: '[ṕ]' },
    { to: 'r', from: '[ŔŖŘ]' },
    { to: 's', from: '[ßŚŜŞŠ]' },
    { to: 't', from: '[ŢŤ]' },
    { to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]' },
    { to: 'w', from: '[ẂŴẀẄ]' },
    { to: 'x', from: '[ẍ]' },
    { to: 'y', from: '[ÝŶŸỲỴỶỸ]' },
    { to: 'z', from: '[ŹŻŽ]' },
    { to: '-', from: "[·/_,:;']" }
  ]

  sets.forEach(set => {
    text = text.replace(new RegExp(set.from, 'gi'), set.to)
  })

  text = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text

  if (typeof separator !== 'undefined' && separator !== '-') {
    text = text.replace(/-/g, separator)
  }

  return text
}
