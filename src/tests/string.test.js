import * as $ from '../string'

test('Slugify String', () => {
  // Basic test
  expect($.slugify('This is a test')).toBe('this-is-a-test')
  // Test with whitespace and extra dashes
  expect($.slugify('This is a test --- ')).toBe('this-is-a-test')
  // Test with numerous dashes and invalid characters
  expect($.slugify('This -- is a ## test ---')).toBe('this-is-a-test')
  // Test with accented characters & apostrophes
  expect($.slugify("C'est déjà l'été.")).toBe('cest-deja-lete')
})

test('Truncate String', () => {
  // Basic test
  expect($.truncate('This is a test', 5)).toBe('This…')
  // Test with custom appendature
  expect($.truncate('This is a test', 5, '.')).toBe('This.')
  // Test with whitespace
  expect($.truncate('This            is a test', 10)).toBe('This…')
  // Test with end of sentance
  expect($.truncate('This.', 5)).toBe('This.')
  // Test with no appendature
  expect($.truncate('This is a test', 5, false)).toBe('This')
  // Test with end of sentance & no appendature
  expect($.truncate('This.', 5, false)).toBe('This.')
  // Test with appendature match
  expect($.truncate('This…', 5)).toBe('This…')
})
