import * as $ from '../dom'
import DOM from './helpers/fake-dom'

let $container
let $toDoList
let $toDoListItems
let $toDoListItem
let $hiddenElement

const dom = new DOM(
  `<div id="container">
    <h1>To Do</h1>
    <ul id="to-do-list">
      <li>Go shopping</li>
      <li>Do laundry</li>
      <li>Raid fridge!</li>
    </ul>
    <div id="hidden-element" style="display: none;"></div>
  </div>`,
  () => {
    $container = $.qs('#container')
    $toDoList = $.qs('#to-do-list')
    $toDoListItems = $.qsa('li', $toDoList)
    $toDoListItem = $.qs('li', $toDoList)
    $hiddenElement = $.qs('#hidden-element')
  }
)

test('Query Selector', () => {
  expect($toDoList).toMatchSnapshot()
})

test('Query Selector All', () => {
  expect($toDoListItems).toMatchSnapshot()
})

test('Element Children', () => {
  // Basic test
  expect($.children($toDoList)).toMatchSnapshot()
  // Test element with no children
  expect($.children($hiddenElement)).toHaveLength(0)
})

test('Element Siblings', () => {
  // Basic test
  expect($.siblings($toDoListItem)).toMatchSnapshot()
  // Test element with no siblings
  expect($.siblings($container)).toHaveLength(0)
})

test('Parent Contains Child', () => {
  // Check where true
  expect($.contains($toDoList, $toDoListItem)).toBe(true)
  // Check where false
  expect($.contains($toDoList, $hiddenElement)).toBe(false)
})

test('Empty Element', () => {
  $.empty($toDoList)
  expect($.children($toDoList)).toHaveLength(0)

  dom.resetDom()
})

test('Remove Element', () => {
  $.remove($toDoList)
  expect($.qs('#to-do-list')).toBeFalsy()

  dom.resetDom()
})

test('Distance From Top', () => {
  expect($.fromTop($toDoList)).toBeDefined()
})

test('Show Element', () => {
  $.show($hiddenElement)
  expect($hiddenElement.style.display).toBe('')

  dom.resetDom()
})

test('Hide Element', () => {
  $.hide($toDoList)
  expect($toDoList.style.display).toBe('none')

  dom.resetDom()
})

test('Toggle Element', () => {
  $.toggle($hiddenElement)
  expect($hiddenElement.style.display).toBe('')

  $.toggle($hiddenElement)
  expect($hiddenElement.style.display).toBe('none')

  dom.resetDom()
})

test('Add CSS To Element', () => {
  $.css($toDoList, {
    margin: '20px auto',
    fakeProperty: 'foo'
  })
  expect($toDoList).toMatchSnapshot()

  dom.resetDom()
})

test('Propagating Event Listeners', () => {
  // Setup click event
  let clickEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  })
  let triggered = false

  // Basic test
  $.on('click', $toDoList, () => {
    triggered = true
  })
  $toDoList.dispatchEvent(clickEvent)
  expect(triggered).toBeTruthy()

  triggered = false

  // Test with propagation
  $.on('click', $toDoList, 'li', () => {
    triggered = true
  })
  $toDoListItem.dispatchEvent(clickEvent)
  expect(triggered).toBeTruthy()

  triggered = false

  // Test clicking wrong item
  $.on('click', $container, 'h1', () => {
    triggered = true
  })
  $hiddenElement.dispatchEvent(clickEvent)
  expect(triggered).toBeFalsy()
})

test('DOM Ready', () => {
  let ready = false
  $.ready(() => {
    ready = true
  })
  expect(ready).toBeTruthy()
})
