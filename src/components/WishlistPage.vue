<template>
  <div class="container">
    <header class="container-header">
      <span class="header-text">
        {{ $route.params.id }}
      </span>
      <span>
        <router-link to="/calendar">
          <font-awesome-icon icon="times" />
        </router-link>
      </span>
    </header>
    <main class="container-main">
      <div v-for="item in list" class="item">
        <div class="item-left">
          <div class="item-top">
            <div class="item-top__title">
              {{ item.name }}
            </div>
          </div>
          <div :class="{ 'without-description': !item.description }" class="item-bottom">
            {{ item.description ? item.description : $t('today-page.without-description') }}
          </div>
        </div>
        <div :class="{ checked: item.done }" class="wishlist-check">
          <font-awesome-icon icon="check" @click="doWishlist(item.id)"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {getWishListByKey} from "../services/wishlist";

export default {
  name: "WishlistPage",
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = getWishListByKey(this.$route.params.id)
  },
  methods: {
    doWishlist (id) {

    }
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 16px);
}
.container-header {
  height: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 24px;
  font-weight: 100;
}
.container-header .header-text {
  width: calc(100vw - 16px - 25px - 8px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container-main {
  flex-grow: 1;
  overflow-y: auto;
}

.item {
  margin: 0 8px 8px;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  width: calc(100% - 32px);
  display: flex;
}
.item-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
}
.wishlist-check {
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.wishlist-check svg {
  color: #fff
}
.item-top {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.item-top__title {
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-bottom {
  width: 100%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 8px;
}
.item-bottom.without-description {
  opacity: 0.35;
}
</style>
