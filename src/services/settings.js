const storage = window.localStorage;

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
