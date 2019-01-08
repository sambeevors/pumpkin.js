import * as $ from '../string'

test('Slugify String', () => {
  // Basic test
  expect($.slugify('This is a test')).toBe('this-is-a-test')
  // Test with custom seperator
  expect($.slugify('This is a test', '_')).toBe('this_is_a_test')
  // Test with whitespace and extra dashes
  expect($.slugify('This is a test --- ')).toBe('this-is-a-test')
  // Test with whitespace and extra dashes with custom seperator
  expect($.slugify('This is a test --- ', '_')).toBe('this_is_a_test')
  // Test with with custom seperator and extra characters
  expect($.slugify('This is a test ___ ', '_')).toBe('this_is_a_test')
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
  // Test with string that is under limit
  expect($.truncate('This is a test', 100)).toBe('This is a test')
})

test('Valid Email', () => {
  // Basic test
  expect($.validEmail('someone@example.com')).toBe(true)
  // Test with non-.com domain
  expect($.validEmail('someone@example.net')).toBe(true)
  // Test with double-barrel domain
  expect($.validEmail('someone@example.co.uk')).toBe(true)
  // Test with double-barrel domain & subdomain
  expect($.validEmail('someone@subdomain.example.co.uk')).toBe(true)
  // Test with no domain
  expect($.validEmail('someone@.com')).toBe(false)
  // Test with invalid domain
  expect($.validEmail('someone@_.com')).toBe(false)
  // Test with two @ symbols
  expect($.validEmail('someone@@example.com')).toBe(false)
  // Test with two .s
  expect($.validEmail('someone@example..com')).toBe(false)
  // Test with single character top level domain
  expect($.validEmail('someone@example.c')).toBe(false)
  // Test with no top level domain
  expect($.validEmail('someone@example')).toBe(false)
  // Test with no username
  expect($.validEmail('@example.com')).toBe(false)
  // Test with invalid top level domain
  expect($.validEmail('someone.example.222')).toBe(false)
  // Test with invalid character (number) appending valid top level domain
  expect($.validEmail('someone@example.com1')).toBe(false)
  // Test with invalid character (special) appending valid top level domain
  expect($.validEmail('someone@example.com!')).toBe(false)
})
