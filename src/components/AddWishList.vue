<template>
  <div class="container">
    <header class="container-header">
      <span class="header-text">
        {{ $t('add-page.add-wishlist.header') }}
      </span>
      <span>
        <router-link to="/add">
          <font-awesome-icon icon="times" />
        </router-link>
      </span>
    </header>
    <main class="container-main">
      <label class="block">
        <span>{{ $t('add-page.add-wishlist.thematic') }}</span>
        <select v-model="newWishList.type">
          <option v-for="type in types" :key="type.value" :value="type.value">{{ type.text }}</option>
        </select>
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-wishlist.name') }}</span>
        <input v-model="newWishList.name" :placeholder="$t('add-page.add-wishlist.name-placeholder')">
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-wishlist.description') }}</span>
        <textarea :placeholder="$t('add-page.add-wishlist.description-placeholder')">{{ newWishList.description }}</textarea>
      </label>
    </main>
    <footer class="container-footer">
      <button @click="addWishList()">{{ addWishListText }}</button>
    </footer>
  </div>
</template>

<script>
  import {gsap} from "gsap";
  import {getStorageItem} from "../storage";
  import moment from "moment";

  export default {
    name: "AddWishList",
    data() {
      return {
        types: [
          {
            value: 'movie',
            text: this.$t('add-page.add-wishlist.movie'),
            icon: 'film'
          }, {
            value: 'book',
            text: this.$t('add-page.add-wishlist.book'),
            icon: 'book'
          }, {
            value: 'site',
            text: this.$t('add-page.add-wishlist.link'),
            icon: 'newspaper'
          }, {
            value: 'music',
            text: this.$t('add-page.add-wishlist.music'),
            icon: 'music'
          }, {
            value: 'game',
            text: this.$t('add-page.add-wishlist.game'),
            icon: 'gamepad'
          }, {
            value: 'cook',
            text: this.$t('add-page.add-wishlist.cook'),
            icon: 'utensils'
          }, {
            value: 'place',
            text: this.$t('add-page.add-wishlist.place'),
            icon: 'map-marked-alt'
          }, {
            value: 'other',
            text: this.$t('add-page.add-wishlist.other'),
            icon: 'file-alt'
          }
        ],
        newWishList: {
          type: 'movie',
          name: '',
          description: '',
          done: false
        },
        addWishListText: ''
      }
    },
    mounted () {
      this.storage = getStorageItem();
      this.addWishListText = this.$t('add-page.add-todo-page.add')
    },
    methods: {
      addWishList() {
        // this.storage = getStorageItem();
        let obj = {};
        obj.type = this.newWishList.text;
        obj.name = this.newWishList.date;
        obj.description = this.newWishList.time;
        obj.done = this.newWishList.done;
        console.log(obj);
        console.log(JSON.stringify(obj));
        this.addWishListText = this.$t('add-page.add-wishlist.added');
        gsap.to('.container-footer button', {duration: 0.2, height: 'calc(100vh - 16px)', width: 'calc(100vw - 16px)', marginTop: -48, marginLeft: 0 })
        // if (window.localStorage.getItem('todo')) {
        //   console.log(window.localStorage.getItem('todo'));
        //   let list = JSON.parse(window.localStorage.getItem('todo'));
        //   list.push(obj);
        //   window.localStorage.setItem('todo', JSON.stringify(list));
        // } else {
        //   let list = [];
        //   list.push(obj);
        //   console.log(JSON.stringify(list));
        //   window.localStorage.setItem('todo', JSON.stringify(list));
        // }
        // this.storage = window.localStorage.getItem('todo');
        setTimeout(this.routeToMenu, 1000);
      },
      routeToMenu() {
        this.$router.push('/')
      }
    }
  }

</script>

<style scoped>
  svg path {
    color: #dfdfdf;
    padding: 0;
  }
  .container {
    background-color: #383838;
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    z-index: 10;
    display: flex;
    flex-direction: column;
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
  .container-main {
    flex-grow: 1;
    overflow-y: auto;
  }
  label.block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 8px;
  }
  label.block span {
    margin-bottom: 8px;
    margin-left: 8px;
    font-size: 12px;
    color: #9b52d9;
  }
  label.block input {
    height: 32px;
    width: calc(100% - 32px);
    border-radius: 4px;
    border: none;
    padding: 0 16px;
  }
  label.block select {
    height: 32px;
    width: 100%;
    border-radius: 4px;
    border: none;
    padding: 0 16px;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
  }
  label.block textarea {
    width: calc(100% - 32px);
    height: 48px;
    border-radius: 4px;
    border: none;
    padding: 8px 16px;
  }
  .container-footer button {
    height: 32px;
    background-color: #9B52D9;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    margin: 8px;
    width: calc(100% - 16px);
    font-size: 14px;
    font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
