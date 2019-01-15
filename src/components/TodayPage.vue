<template>
    <div>
      <div>
        <h1>
          Список дел
        </h1>
        <!--<span>{{todoList}}</span>-->
        <div class="todo-list" v-for="todo in todoList">
          <strong>{{todo.text}}</strong>
          <span>{{todo.date}}</span>
          <span>{{todo.description}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  import { getStorageItem } from '../storage';
  export default {
    data() {
      return {
        name: "TodayPage",
        todoList: []
      }
    },
    created() {
      console.log('test');
      // window.localStorage.setItem("key1", "value11");
      this.todoList = JSON.parse(window.localStorage.getItem('todo'));
      console.log(this.todoList);
    }
  }
</script>

<style scoped>
  h1 {
    font-size: x-large;
    color: #f44336;
  }
  .todo-list {
    text-align: left;
    margin: 10px;
  }
</style>
