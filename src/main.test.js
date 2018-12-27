import * as $ from './main'

let $container
let $toDoList
let $toDoListItems
let $toDoListItem
let $hiddenElement

const resetDom = () => {
  document.body.innerHTML = `
    <div id="container">
      <h1>To Do</h1>
      <ul id="to-do-list">
        <li>Go shopping</li>
        <li>Do laundry</li>
        <li>Raid fridge!</li>
      </ul>
      <div id="hidden-element" style="display: none;"></div>
    </div>
  `

  $container = $.qs('#container')
  $toDoList = $.qs('#to-do-list')
  $toDoListItems = $.qsa('li', $toDoList)
  $toDoListItem = $.qs('li', $toDoList)
  $hiddenElement = $.qs('#hidden-element')
}

resetDom()

test('Query Selector', () => {
  expect($toDoList).toMatchSnapshot()
})

test('Query Selector All', () => {
  expect($toDoListItems).toMatchSnapshot()
})

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

  resetDom()
})

test('Remove Element', () => {
  $.remove($toDoList)
  expect($.qs('#to-do-list')).toBeFalsy()

  resetDom()
})

test('Distance From Top', () => {
  expect($.fromTop($toDoList)).toBeDefined()
})

test('Show Element', () => {
  $.show($hiddenElement)
  expect($hiddenElement.style.display).toBe('')

  resetDom()
})

test('Hide Element', () => {
  $.hide($toDoList)
  expect($toDoList.style.display).toBe('none')

  resetDom()
})

test('Toggle Element', () => {
  $.toggle($hiddenElement)
  expect($hiddenElement.style.display).toBe('')

  $.toggle($hiddenElement)
  expect($hiddenElement.style.display).toBe('none')

  resetDom()
})

test('Add CSS To Element', () => {
  $.css($toDoList, {
    margin: '20px auto',
    fakeProperty: 'foo'
  })
  expect($toDoList).toMatchSnapshot()

  resetDom()
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
