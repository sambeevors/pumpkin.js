import * as $ from '../array'
import DOM from './helpers/fake-dom'

let $toDoList
let $toDoListItems
let $toDoListItem

const dom = new DOM(
  `<ul id="to-do-list">
    <li>Go shopping</li>
    <li>Do laundry</li>
    <li>Raid fridge!</li>
  </ul>`,
  () => {
    $toDoList = document.querySelector('#to-do-list')
    $toDoListItems = [...$toDoList.querySelectorAll('li')]
    $toDoListItem = $toDoList.querySelector('li')
  }
)

test('First Item(s) In Array', () => {
  // Basic test
  expect($.first([1, 2, 3, 4])).toBe(1)
  // Test with count parameter
  expect($.first([1, 2, 3, 4], 2)).toContain(1, 2)
  // Test with reverse parameter
  expect($.first([1, 2, 3, 4], 2, true)).toContain(2, 1)
  // Test with DOM nodes
  expect($.first($toDoListItems)).toMatchSnapshot()
  // Test with invalid parameter
  expect($.first([1, 2], 3, true)[0]).toBeUndefined()
})

test('Last Item(s) In Array', () => {
  // Basic test
  expect($.last([1, 2, 3, 4])).toBe(4)
  // Test with count parameter
  expect($.last([1, 2, 3, 4], 2)).toContain(3, 4)
  // Test with reverse parameter
  expect($.last([1, 2, 3, 4], 2, true)).toContain(4, 3)
  // Test with DOM nodes
  expect($.last($toDoListItems)).toMatchSnapshot()
  // Test with invalid parameter
  expect($.last([1, 2], 3)[0]).toBeUndefined()
})

test('Strip Items(s) From Array', () => {
  // Basic test
  expect($.strip([1, 2, 3, 4], 1)).toContain(2, 3, 4)
  // Test with extra parameters
  expect($.strip([1, 2, 3, 4], 1, 3)).toContain(2, 4)
  // Test with non existant value
  expect($.strip([1, 2, 3, 4], 5)).toContain(1, 2, 3, 4)
  // Test with DOM nodes
  expect($.strip($toDoListItems, $toDoListItem)).toMatchSnapshot()
})