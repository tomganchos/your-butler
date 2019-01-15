let storage = window.localStorage;

export function getStorageItem(key) {
  return storage.getItem(key);
}

export function setStorageItem(key, value) {

}

export function addTodo(text, date) {
  todo.text = text;
  todo.date = date;


  let ls = JSON.parse(localStorage.todo);
  localStorage.todo = JSON.stringify(todo);
}

let todo = {
  text: '',
  date: null
}
