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
