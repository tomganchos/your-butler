const storage = window.localStorage;
import moment from 'moment';

export function addTodo(todo) {
  let todoList = []
  if (storage.getItem('todo')) {
    todoList = JSON.parse(storage.getItem('todo'))
  }
  todoList.push(todo)
  storage.setItem('todo', JSON.stringify(todoList))
}
export function getTodos() {
  let todoList = []
  if (storage.getItem('todo')) {
    todoList = JSON.parse(storage.getItem('todo'))
  }
  return todoList
}
export function getTodo(id) {
  let todoList = []
  if (storage.getItem('todo')) {
    todoList = JSON.parse(storage.getItem('todo'))
  }
  return todoList.find(item => item.id === id)
}
export function getTodoDay(date) {
  let todoList = []
  if (storage.getItem('todo')) {
    todoList = JSON.parse(storage.getItem('todo'))
  }
  return todoList.filter(item => (item.type === 'day' && item.date === date))
}
export function getTodoWeek(week) {
  console.log(week)
  let todoList = []
  let filteredTodoList = []
  if (storage.getItem('todo')) {
    todoList = JSON.parse(storage.getItem('todo'))
  }
  let firstDay = moment(week, 'GGGG-[W]WW')
  for (let i = 0; i < 7; i++) {
    console.log(todoList)
    console.log(firstDay.format('YYYY-MM-DD'))
    filteredTodoList.concat(todoList.filter(item => (item.type === 'day' && item.date === firstDay.format('YYYY-MM-DD'))))
    firstDay.add(1, 'days')
  }
  filteredTodoList.concat(todoList.filter(item => (item.type === 'week' && item.week === week)))
  console.log(filteredTodoList)
  return filteredTodoList
}
export function doTodo(id) {
  let todoList = []
  if (storage.getItem('todo')) {
    todoList = JSON.parse(storage.getItem('todo'))
  }
  todoList.find(item => item.id === id).done = true
  storage.setItem('todo', JSON.stringify(todoList))
}
export function undoTodo(id) {
  let todoList = []
  if (storage.getItem('todo')) {
    todoList = JSON.parse(storage.getItem('todo'))
  }
  todoList.find(item => item.id === id).done = false
  storage.setItem('todo', JSON.stringify(todoList))
}
export function removeTodo(id) {
  let todoList = []
  if (storage.getItem('todo')) {
    todoList = JSON.parse(storage.getItem('todo'))
  }
  todoList.splice(todoList.findIndex(item => item.id === id), 1)
  storage.setItem('todo', JSON.stringify(todoList))
}
