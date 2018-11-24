import * as $ from './pumpkin'

let $toDoList
let $toDoListItems
let $toDoListItem
let $hiddenElement

const resetDom = () => {
  document.body.innerHTML = `
    <div>
      <h1>To Do</h1>
      <ul id="to-do-list">
        <li>Go shopping</li>
        <li>Do laundry</li>
        <li>Raid fridge!</li>
      </ul>
      <div id="hidden-element" style="display: none;"></div>
    </div>
  `

  $toDoList = $.qs('#to-do-list')
  $toDoListItems = $.qsa('li', $toDoList)
  $toDoListItem = $.qs('li', $toDoList)
  $hiddenElement = $.qs('#hidden-element')
}

resetDom()

test('Query Selector', () => {
  expect($toDoList).toEqual(document.querySelector('#to-do-list'))
})

test('Query Selector All', () => {
  expect($toDoListItems).toHaveLength(3)
})

test('First Item(s) In Array', () => {
  // Basic test
  expect($.first([1, 2, 3, 4])).toBe(1)
  // Test with count parameter
  expect($.first([1, 2, 3, 4], 2)).toContain(1, 2)
  // Test with reverse parameter
  expect($.first([1, 2, 3, 4], 2, true)).toContain(2, 1)
})

test('Last Item(s) In Array', () => {
  // Basic test
  expect($.last([1, 2, 3, 4])).toBe(4)
  // Test with count parameter
  expect($.last([1, 2, 3, 4], 2)).toContain(3, 4)
  // Test with reverse parameter
  expect($.last([1, 2, 3, 4], 2, true)).toContain(4, 3)
})

test('Strip Items(s) From Array', () => {
  // Basic test
  expect($.strip([1, 2, 3, 4], 1)).toContain(2, 3, 4)
  // Test with extra parameters
  expect($.strip([1, 2, 3, 4], 1, 3)).toContain(2, 4)
})

test('Element Children', () => {
  expect($.children($toDoList)).toHaveLength(3)
})

test('Element Siblings', () => {
  expect($.siblings($toDoListItem)).toHaveLength(2)
})

test('Parent Contains Child', () => {
  expect($.contains($toDoList, $toDoListItem))
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
  expect($hiddenElement.style.display).toBeFalsy()

  resetDom()
})

test('Hide Element', () => {
  $.hide($toDoList)
  expect($toDoList.style.display).toBe('none')

  resetDom()
})

test('Toggle Element', () => {
  $.toggle($hiddenElement)
  expect($hiddenElement.style.display).toBeFalsy()

  $.toggle($hiddenElement)
  expect($hiddenElement.style.display).toBe('none')

  resetDom()
})

test('Add CSS To Element', () => {
  $.css($toDoList, {
    margin: '20px auto'
  })
  expect($toDoList.style.margin).toBe('20px auto')

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
})

test('DOM Ready', () => {
  let ready = false
  $.ready(() => {
    ready = true
  })
  expect(ready).toBeTruthy()
})
