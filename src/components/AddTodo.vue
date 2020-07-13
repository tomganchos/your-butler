<template>
  <div class="container">
    <header class="container-header">
      <span class="header-text">
        {{ $t('add-page.add-todo-page.header') }}
      </span>
      <span>
        <router-link to="/">
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
        <select v-model="newTodo.type" :placeholder="$t('add-page.add-todo-page.for-day')">
          <option value="day">На день</option>
          <option value="week">На неделю</option>
          <option value="future">На будущее</option>
        </select>
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-todo-page.date') }}</span>
        <input v-model="newTodo.date" type="date">
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-todo-page.time') }}</span>
        <input v-model="newTodo.time" type="time">
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
      <button @click="addTodo()">Добавить</button>
    </footer>
<!--    <div class="scroll-container">-->


<!--      <div class="ui fluid input">-->
<!--        <input>-->
<!--      </div>-->


<!--      <div class="ui fluid selection dropdown">-->
<!--        <input type="hidden" name="user">-->
<!--        <i class="dropdown icon"></i>-->
<!--        <div class="default text">На день / неделю / будущее</div>-->
<!--        <div class="menu">-->
<!--          <div class="item" data-value="day">-->
<!--            На определённый день-->
<!--          </div>-->
<!--          <div class="item" data-value="week">-->
<!--            На всю неделю-->
<!--          </div>-->
<!--          <div class="item" data-value="future">-->
<!--            На неопределённое будущее-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div>-->
<!--        <label>Задача на день/неделю/будущее</label>-->
<!--        <select class="form" v-model="newTodo.type">-->
<!--          <option value="day">На день</option>-->
<!--          <option value="week">На неделю</option>-->
<!--          <option value="future">На будущее</option>-->
<!--        </select>-->
<!--      </div>-->
<!--      <div>-->
<!--        <label>Дата и время</label>-->
<!--        <div>-->
<!--          <input class="input-date" type="date" v-model="newTodo.date">-->
<!--          <input class="input-date" type="time" v-model="newTodo.time">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <label>Описание задачи</label>-->
<!--        <textarea v-model="newTodo.description"></textarea>-->
<!--      </div>-->
<!--      &lt;!&ndash;<span>{{storage}}</span>&ndash;&gt;-->
<!--    </div>-->
<!--    <div class="submit-button">-->
<!--      <button @click="addTodo()">Добавить</button>-->
<!--    </div>-->
  </div>
</template>

<script>
  import moment from 'moment'
  import { getStorageItem, addTodo } from "../storage";

  export default {
    name: "AddTodo",
    data() {
      return {
        newTodo: {
          text: '',
          date: null,
          time: null,
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
      }
    },
    mounted () {
      console.log('test');
      console.log(moment());

      // window.localStorage.setItem("key1", "value11");
      this.storage = getStorageItem();
      this.newTodo.date = moment().format('YYYY-MM-DD')
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
        if (window.localStorage.getItem('todo')) {
          console.log(window.localStorage.getItem('todo'));
          let list = JSON.parse(window.localStorage.getItem('todo'));
          list.push(obj);
          window.localStorage.setItem('todo', JSON.stringify(list));
        } else {
          let list = [];
          list.push(obj);
          console.log(JSON.stringify(list));
          window.localStorage.setItem('todo', JSON.stringify(list));
        }
        this.storage = window.localStorage.getItem('todo');
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
  /*.container input, .container select, .container textarea {*/
  /*  !*width: 100%;*!*/
  /*  margin-bottom: 15px;*/
  /*}*/
  /*.header-container {*/
  /*  display: flex;*/
  /*  justify-content: space-between;*/
  /*  align-items: center;*/
  /*  margin-bottom: 20px;*/
  /*  font-size: large;*/
  /*}*/
  /*.header-text {*/
  /*  white-space: nowrap;*/
  /*  overflow: hidden;*/
  /*  text-overflow: ellipsis;*/
  /*}*/
  /*.header-container svg {*/
  /*  padding: 0;*/
  /*}*/
  /*.scroll-container {*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  flex-grow: 1;*/
  /*}*/
  /*.scroll-container input {*/
  /*  display: block;*/
  /*  margin-top: 5px;*/
  /*  width: 100%;*/
  /*  margin-bottom: 15px;*/
  /*}*/
  /*!*.form {*!*/
  /*  !*padding: 5px;*!*/
  /*  !*display: flex;*!*/
  /*  !*width: calc(100% - 15px);*!*/
  /*  !*margin-top: 5px;*!*/
  /*!*}*!*/
  /*select.form {*/
  /*  width: 100%;*/
  /*  border-style: inset;*/
  /*  border-width: 1.99653px;*/
  /*  border-color: white;*/
  /*  margin-top: 5px;*/
  /*}*/

  /*.submit-button {*/
  /*  position: absolute;*/
  /*  bottom: 0;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  margin: 10px;*/
  /*}*/
  /*.submit-button button {*/
  /*  width: 100%;*/
  /*  padding: 5px;*/
  /*  color: #222222;*/
  /*  font-weight: bold;*/
  /*}*/
  /*.input-date {*/
  /*  width: calc(50% - 16px);*/
  /*  padding: 5px;*/
  /*  margin-top: 5px;*/
  /*}*/
  /*textarea {*/
  /*  width: 100%;*/
  /*  margin-top: 5px;*/
  /*  height: 40px;*/
  /*}*/
  /*.menu.visible {*/
  /*  z-index: 1000;*/
  /*  height: max-content;*/
  /*  display: block;*/
  /*}*/

</style>
