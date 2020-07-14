<template>
  <div class="container">
    <header class="container-header">
      <span class="header-text">
        {{ $t('add-page.add-todo-page.header') }}
      </span>
      <span>
        <router-link to="/add">
          <font-awesome-icon icon="times" />
        </router-link>
      </span>
    </header>
    <main class="container-main">
      <label class="block">
        <span>{{ $t('add-page.add-todo-page.task') }}</span>
        <input v-model="newTodo.text" :placeholder="$t('add-page.add-todo-page.do-something')">
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-todo-page.day-week-future') }}</span>
        <select v-model="newTodo.type" :placeholder="$t('add-page.add-todo-page.for-day')" @change="changeType()">
          <option value="day">На день</option>
          <option value="week">На неделю</option>
          <option value="future">На будущее</option>
        </select>
      </label>
      <label v-if="newTodo.type === 'day'" class="block">
        <span>{{ $t('add-page.add-todo-page.date') }}</span>
        <input v-model="newTodo.date" type="date">
      </label>
      <label v-if="newTodo.type === 'day'" class="block">
        <span>{{ $t('add-page.add-todo-page.time') }}</span>
        <input v-model="newTodo.time" type="time">
      </label>
      <label v-if="newTodo.type === 'week'" class="block">
        <span>{{ $t('add-page.add-todo-page.time') }}</span>
        <input v-model="newTodo.week" type="week">
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-todo-page.description') }}</span>
        <textarea :placeholder="$t('add-page.add-todo-page.description-of-description')">{{ newTodo.description }}</textarea>
      </label>
<!--      <label class="block">-->
<!--        <span>{{ $t('add-page.add-todo-page.checklist') }}</span>-->

<!--      </label>-->
    </main>
    <footer class="container-footer">
      <button @click="addTodo()">{{ addTodoText }}</button>
    </footer>
  </div>
</template>

<script>
  import moment from 'moment'
  import { getStorageItem, addTodo } from "../storage";
  import {gsap} from "gsap";

  export default {
    name: "AddTodo",
    data() {
      return {
        newTodo: {
          text: '',
          date: null,
          time: null,
          week: null,
          type: 'day',
          description: '',
          done: false
        },
        storage: [],

        selectTypes: [{
          text: 'На определённый день',
          value: 'day',
        }, {
          text: 'На всю неделю',
          value: 'week',
        }, {
          text: 'На неопределённое будущее',
          value: 'future',
        }],
        addTodoText: ''
      }
    },
    mounted () {
      console.log('test');
      console.log(moment());

      // window.localStorage.setItem("key1", "value11");
      this.storage = getStorageItem();
      this.newTodo.date = moment().format('YYYY-MM-DD')
      this.addTodoText = this.$t('add-page.add-todo-page.add')
    },
    methods: {
      addTodo() {
        // addTodo(this.newTodo.text, this.newTodo.date);
        // this.storage = getStorageItem();
        let obj = {};
        obj.text = this.newTodo.text;
        obj.date = this.newTodo.date;
        obj.time = this.newTodo.time;
        obj.type = this.newTodo.type;
        obj.description = this.newTodo.description;
        obj.done = this.newTodo.done;
        console.log(obj);
        console.log(JSON.stringify(obj));
        this.addTodoText = this.$t('add-page.add-todo-page.added');
        const height = document.querySelector('.container').clientHeight
        const width = document.querySelector('.container').clientWidth
        gsap.to('.container-footer button', {duration: 0.2, height: 'calc(100vh - 16px)', width: 'calc(100vw - 16px)', marginTop: -48, marginLeft: 0 })
        setTimeout(this.routeToMenu, 1000);
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
      },
      routeToMenu() {
        this.$router.push('/add')
      },
      changeType () {
        switch (this.newTodo.type) {
          case 'day':
            this.week = null
            break
          case 'week':
            this.date = null
            this.time = null
            break
          case 'future':
            this.date = null
            this.time = null
            this.week = null
        }
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
