<template>
    <div>
      <div>
        <h1>
          Список дел
        </h1>
        <!--<span>{{todoList}}</span>-->
        <div style="text-align: left; margin-left: 10px">
          <strong>На сегодня</strong>
        </div>
        <div class="todo-list" v-for="todo in todoListDay">
          <div class="todo-item">
            <strong>{{todo.text}}</strong>
            <span>{{todo.date}}</span>
            <span>{{todo.description}}</span>
          </div>
        </div>
        <div style="text-align: left; margin-left: 10px">
          <strong>На неделю</strong>
        </div>
        <div class="todo-list" v-for="todo in todoListWeek">
          <div class="todo-item">
            <strong>{{todo.text}}</strong>
            <span>{{todo.date}}</span>
            <span>{{todo.description}}</span>
          </div>
        </div>
        <div style="text-align: left; margin-left: 10px">
          <strong>На будущее</strong>
        </div>
        <div class="todo-list" v-for="todo in todoListFuture">
          <div class="todo-item">
            <strong>{{todo.text}}</strong>
            <span>{{todo.date}}</span>
            <span>{{todo.description}}</span>
          </div>
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
        todoListDay: [],
        todoListWeek: [],
        todoListFuture: [],
      }
    },
    created() {
      console.log('test');
      this.todoList = JSON.parse(window.localStorage.getItem('todo'));
      console.log(this.todoList);



      this.todoList.forEach(item => {
        if (item.type === 'day')
          this.todoListDay.push(item);
        else if (item.type === 'week')
          this.todoListWeek.push(item);
        else if (item.type === 'future') {
          this.todoListFuture.push(item);
        }
        console.log(item);
      })
    }
  }
</script>

<style scoped>
  h1 {
    font-size: x-large;
    color: #9b52d9;
    padding: 10px;
  }
  .todo-list {
    text-align: left;

  }
  .todo-item {
    background-color: #383838;
    margin: 5px;
    padding: 10px;
    display: flex;
  }
</style>
