<template>
  <div class="container">
    <div class="header-container">
      <strong>
        Добавление задачи
      </strong>
      <span>
        <router-link to="/">
          <font-awesome-icon icon="times" />
        </router-link>
      </span>
    </div>
    <div class="scroll-container">
      <div>
        <label>Название задачи</label>
        <input class="form" v-model="newTodo.text" placeholder="Задача ">
      </div>
      <div>
        <label>Задача на день/неделю/будущее</label>
        <select class="form" v-model="newTodo.type">
          <option value="day">На день</option>
          <option value="week">На неделю</option>
          <option value="future">На будущее</option>
        </select>
      </div>
      <div>
        <label>Дата и время</label>
        <div>
          <input class="input-date" type="date" v-model="newTodo.date">
          <input class="input-date" type="time" v-model="newTodo.time">
        </div>
      </div>
      <div>
        <label>Описание задачи</label>
        <textarea v-model="newTodo.description"></textarea>
      </div>
      <!--<span>{{storage}}</span>-->
    </div>
    <div class="submit-button">
      <button @click="addTodo()">Добавить</button>
    </div>
  </div>
</template>

<script>
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
        storage: []
      }
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
    },
    created() {
      console.log('test');
      // window.localStorage.setItem("key1", "value11");
      this.storage = getStorageItem();
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
    margin: 5px;
    /*box-shadow: 0 0 10px rgba(0,0,0,0.3);*/
    padding: 10px;
    text-align: left;
    color: #dfdfdf;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    overflow-y: hidden;
  }
  .container input, .container select, .container textarea {
    /*width: 100%;*/
    margin-bottom: 15px;
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: large;
  }
  .header-container svg {
    padding: 0;
  }
  .scroll-container {
    overflow-y: scroll;
  }
  .form {
    padding: 5px;
    display: flex;
    width: calc(100% - 15px);
    margin-top: 5px;
  }
  select.form {
    width: 100%;
    border-style: inset;
    border-width: 1.99653px;
    border-color: white;
    margin-top: 5px;
  }

  .submit-button {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 10px;
  }
  .submit-button button {
    width: 100%;
    padding: 5px;
    color: #222222;
    font-weight: bold;
  }
  .input-date {
    width: calc(50% - 16px);
    padding: 5px;
    margin-top: 5px;
  }
  textarea {
    width: 100%;
    margin-top: 5px;
    height: 40px;
  }

</style>
