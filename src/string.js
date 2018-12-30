/**
 * Slugify a string
 * @param  {String} text      The string to slugify
 * @param  {String} separator Custom word seperator [optional]
 * @return {String}           The 'slugified' string
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
    { to: '-', from: '[·/_,:;]' }
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

/**
 * Truncates a string
 * @param  {String} text   The string to truncate
 * @param  {String} limit  Custom word seperator
 * @param  {Mixed}  append Character(s) to append to the truncated string (or false to omit) [optional]
 * @return {String}        The 'truncated' string
 */
export const truncate = (text, limit, append = '...') => {
  if (text.length > limit)
    for (let i = limit; i > 0; i--)
      if (
        (text.charAt(i) === ' ' && text.charAt(i - 1) != ',') ||
        text.charAt(i - 1) != '.' ||
        text.charAt(i - 1) != ';'
      )
        return text.substring(0, i).trim() + (append || '')
  return text
}
