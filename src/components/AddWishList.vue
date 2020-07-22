<template>
  <add-component @add-event="addWishList">
    <template slot="header">
      {{ $t('add-page.add-wishlist.header') }}
    </template>
    <template slot="main">
      <label class="block">
        <span>{{ $t('add-page.add-wishlist.thematic') }}</span>
        <select v-model="newWishList.type" @change="changeType()">
          <option v-for="type in types" :key="type.value" :value="type.value">{{ type.text }}</option>
        </select>
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-wishlist.name') }}</span>
        <input v-model="newWishList.name" :placeholder="placeholderName">
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-wishlist.description') }}</span>
        <textarea :placeholder="$t('add-page.add-wishlist.description-placeholder')">{{ newWishList.description }}</textarea>
      </label>
    </template>
  </add-component>
</template>

<script>
  import AddComponent from './AddComponent'
  import {gsap} from "gsap";
  import {getStorageItem} from "../storage";
  import moment from "moment";

  export default {
    name: "AddWishList",
    components: { AddComponent },
    data() {
      return {
        types: [
          {
            value: 'movie',
            text: this.$t('add-page.add-wishlist.movie'),
            icon: 'film'
          }, {
            value: 'serial',
            text: this.$t('add-page.add-wishlist.serial'),
            icon: 'tv'
          }, {
            value: 'book',
            text: this.$t('add-page.add-wishlist.book'),
            icon: 'book'
          }, {
            value: 'link',
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
        placeholderName: this.$t('add-page.add-wishlist.movie-placeholder'),
        addWishListText: this.$t('add-page.add-todo-page.add')
      }
    },
    mounted () {
      this.storage = getStorageItem();
      this.addWishListText = this.$t('add-page.add-wishlist.add')
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
      changeType () {
        console.log(this.newWishList.type)
        this.placeholderName = this.$t('add-page.add-wishlist.' + this.newWishList.type + '-placeholder')
      },
      routeToMenu() {
        this.$router.push('/')
      }
    }
  }

</script>

<style scoped>

</style>
