<template>
  <div>
    <div class="container">
      <div>
        <input v-model="newTodo.text">
      </div>
      <div>
        <select v-model="newTodo.type">
          <option value="day">На день</option>
          <option value="week">На неделю</option>
          <option value="future">На будущее</option>
        </select>
      </div>
      <div>
        <input type="datetime-local" v-model="newTodo.date">
      </div>
      <div>
        <textarea v-model="newTodo.description"></textarea>
      </div>
      <div>
        <button @click="addTodo()">Добавить</button>
      </div>
      <!--<span>{{storage}}</span>-->
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
  .container {
    background-color: rgba(244, 67, 54, .2);
    margin: 0 15px 15px 15px;
    border-radius: 10px;
    /*box-shadow: 0 0 10px rgba(0,0,0,0.3);*/
    padding: 10px;
    text-align: left;
  }
  .container input, .container select, .container textarea {
    width: 100%;
    margin-bottom: 10px;
  }
</style>
