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
   * Run callback function once DOM has fully loaded
   * @param  {Function} cb The function to run once ready
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

  return m
})()

export default pumpkin
