const storage = window.localStorage;

export function getStorageItem(key) {
  return storage.getItem(key);
}

export function setStorageItem(key, value) {
  storage.setItem()
}
// TODOS
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
// WISHLIST
export function addWish(key, value) {
  let wishList = {}
  if (storage.getItem('wishlist')) {
    wishList = JSON.parse(storage.getItem('wishlist'))
  }
  if (wishList[key]) {
    let wishListKey = wishList[key]
    wishListKey.push(value)
  } else {
    wishList[key] = []
    wishList[key].push(value)
  }
  storage.setItem('wishlist', JSON.stringify(wishList))
}
export function getWishList() {
  let wishList = {}
  if (storage.getItem('wishlist')) {
    wishList = JSON.parse(storage.getItem('wishlist'))
  }
  return wishList
}
// PEOPLE
export function addPerson(person) {
  let people = []
  if (storage.getItem('people')) {
    people = JSON.parse(storage.getItem('people'))
  }
  people.push(person)
  storage.setItem('people', JSON.stringify(people))
}
export function getPeople() {
  let people = []
  if (storage.getItem('people')) {
    people = JSON.parse(storage.getItem('people'))
  }
  return people
}
export function setColor (isGreen) {
  let settings = {}
  if (storage.getItem('settings')) {
    settings = JSON.parse(storage.getItem('settings'))
  }
  settings.isGreen = isGreen
  storage.setItem('settings', JSON.stringify(settings))
}
export function setTheme (isDarkTheme) {
  let settings = {}
  if (storage.getItem('settings')) {
    settings = JSON.parse(storage.getItem('settings'))
  }
  settings.isDarkTheme = isDarkTheme
  storage.setItem('settings', JSON.stringify(settings))
}
export function getSettings () {
  let settings = {}
  if (storage.getItem('settings')) {
    settings = JSON.parse(storage.getItem('settings'))
  }
  return settings
}