const storage = window.localStorage;

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
export function getWishListByKey(key) {
  let wishList = {}
  if (storage.getItem('wishlist')) {
    wishList = JSON.parse(storage.getItem('wishlist'))
  }
  return wishList[key]
}
