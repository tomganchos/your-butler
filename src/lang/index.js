const DEFAULT_LANGUAGE = 'ru'

let language = DEFAULT_LANGUAGE

export function setLanguage(lang) {
  console.log(language)
  language = lang
  console.log(language)
}
export function getLanguage() {
  console.log(language)
  return language
}
