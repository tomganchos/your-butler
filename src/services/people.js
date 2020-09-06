const storage = window.localStorage;

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
