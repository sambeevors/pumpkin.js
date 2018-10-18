const pumpkin = (() => {
  let m = {}

  /**
   * Get an element in the DOM
   * @param  {String} selector The selector to match against
   * @param  {Node} scope      An element to search within [optional]
   * @return {Node}            The first matching element
   */
  m.qs = (selector, scope = document) => scope.querySelector(selector)

  /**
   * Get all matching elements in the DOM
   * @param  {String} selector The selector to match against
   * @param  {Node} scope      An element to search within [optional]
   * @return {Array}           The matching elements (as an array)
   */
  m.qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)]

  /**
   * Get the first element in an array
   * @param  {Array} array The elements tomselect from
   * @return {Node}        The first element in the array
   */
  m.first = array => array[0]

  /**
   * Get the last element in an array
   * @param  {Array} array The elements to select from
   * @return {Node}        The last element in the array
   */
  m.last = array => array[array.length - 1]

  /**
   * Get the children of an element
   * @param  {Node} el The element to search
   * @return {Array}   The children of the passed element
   */
  m.children = el => {
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
  m.siblings = el => {
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
  m.contains = (el, child) => el !== child && el.contains(child)

  /**
   * Removes all children from element
   * @param {Node} el The element to empty
   */
  m.empty = el => {
    while (el.firstChild) el.removeChild(el.firstChild)
  }

  /**
   * Run callback function once DOM has fully loaded
   * @param {Function} cb The function to run once ready
   */
  m.ready = cb => {
    if (document.readyState != 'loading') cb()
    else if (document.addEventListener)
      document.addEventListener('DOMContentLoaded', cb)
    else
      document.attachEvent('onreadystatechange', () => {
        if (document.readyState == 'complete') cb()
      })
  }

  /**
   * Show selected element
   * @param {Node} el The element to show
   */
  m.show = el => {
    el.style.display = ''
  }

  /**
   * Hide selected element
   * @param {Node} el The element to hide
   */
  m.hide = el => {
    el.style.display = 'none'
  }

  /**
   * Toggle visibility of selected element
   * @param {Node} el The element to toggle
   */
  m.toggle = el => {
    el.style.display = el.style.display == 'none' ? '' : 'none'
  }

  /**
   * Remove element from the DOM
   * @param {Node} el The element to remove
   */
  m.remove = el => {
    el.parentNode.removeChild(el)
  }

  /**
   * Trim whitespace from a string
   * @param  {String} string The string to trim
   * @return {String}        The trimmed string
   */
  m.trim = string => string.replace(/^\s+|\s+$/g, '')

  return m
})()

export default pumpkin
