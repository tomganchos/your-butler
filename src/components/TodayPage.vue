<template>
    <div>
      <header class="header">
        <span class="page-header">
          {{ $t('today-page.header') }}
        </span>
      </header>
      <main class="tasks-list">
        <div class="tasks">
          <label>{{ $t('today-page.for-today') }}</label>
          <router-link v-for="task in todoListDay" :to="'/' + task.id" :key="task.id" class="task">
            <div class="task-top">
              <div class="task-top__title">
                {{ task.text }}
              </div>
              <div class="task-top__date">
                {{ task.date }} {{ task.time }}
              </div>
            </div>
            <div :class="{ 'without-description': !task.description }" class="task-bottom">
              {{ task.description ? task.description : $t('today-page.without-description') }}
            </div>
          </router-link>
        </div>
        <div class="tasks">
          <label>{{ $t('today-page.for-week') }}</label>
          <router-link v-for="task in todoListWeek" :to="'/' + task.id" :key="task.id" class="task">
            <div class="task-top">
              <div class="task-top__title">
                {{ task.text }}
              </div>
              <div class="task-top__date">
                {{ task.week }}
              </div>
            </div>
            <div :class="{ 'without-description': !task.description }" class="task-bottom">
              {{ task.description ? task.description : $t('today-page.without-description') }}
            </div>
          </router-link>
        </div>
        <div class="tasks">
          <label>{{ $t('today-page.for-future') }}</label>
          <router-link v-for="task in todoListFuture" :to="'/' + task.id" :key="task.id" class="task">
            <div class="task-top">
              <div class="task-top__title">
                {{ task.text }}
              </div>
            </div>
            <div :class="{ 'without-description': !task.description }" class="task-bottom">
              {{ task.description ? task.description : $t('today-page.without-description') }}
            </div>
          </router-link>
        </div>
      </main>
<!--      <div>-->
<!--        <h1>-->
<!--          Список дел-->
<!--        </h1>-->
<!--        &lt;!&ndash;<span>{{todoList}}</span>&ndash;&gt;-->
<!--        <div style="text-align: left; margin-left: 10px">-->
<!--          <strong>На сегодня</strong>-->
<!--        </div>-->
<!--        <div class="todo-list" v-for="todo in todoListDay">-->
<!--          <div class="todo-item">-->
<!--            <strong>{{todo.text}}</strong>-->
<!--            <span>{{todo.date}}</span>-->
<!--            <span>{{todo.description}}</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div style="text-align: left; margin-left: 10px">-->
<!--          <strong>На неделю</strong>-->
<!--        </div>-->
<!--        <div class="todo-list" v-for="todo in todoListWeek">-->
<!--          <div class="todo-item">-->
<!--            <strong>{{todo.text}}</strong>-->
<!--            <span>{{todo.date}}</span>-->
<!--            <span>{{todo.description}}</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div style="text-align: left; margin-left: 10px">-->
<!--          <strong>На будущее</strong>-->
<!--        </div>-->
<!--        <div class="todo-list" v-for="todo in todoListFuture">-->
<!--          <div class="todo-item">-->
<!--            <strong>{{todo.text}}</strong>-->
<!--            <span>{{todo.date}}</span>-->
<!--            <span>{{todo.description}}</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
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
      // this.todoList = JSON.parse(window.localStorage.getItem('todo'));
      let todoList = [
        {
          date: "2020-07-14",
          description: "Описание тестовой задачи\nВторая строка тестовой задачи",
          done: false,
          text: "Тестовое задание",
          time: "23:22",
          type: "day",
          id: 123213
        },
        {
          date: "2020-07-15",
          description: "",
          text: "Тестовое задание 2",
          time: "23:22",
          type: "day",
          id: 132432
        },
        {
          week: "2020-W30",
          description: "Задача на неделю",
          done: false,
          text: "Тестовое задание 2",
          type: "week",
          id: 3121
        },
        {
          description: "Задача на неделю",
          done: false,
          text: "Тестовое задание 2",
          type: "future",
          id: 43111
        }
      ]
      console.log(todoList)

      if (todoList) {
        todoList.forEach(item => {
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
  }
</script>

<style scoped>
  .header {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page-header {
    font-size: 24px;
    font-weight: 100;
    color: #9b52d9;
  }
  .tasks-list {
    display: flex;
    flex-direction: column;
  }
  .tasks {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  label {
    margin-bottom: 8px;
    margin-left: 16px;
    font-size: 12px;
    color: #9b52d9;
  }
  .task {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #3E2D4B;
    margin: 0 8px 8px;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: #dfdfdf;
    width: calc(100% - 32px);
  }
  .task-top {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .task-top__title {
    font-weight: bold;
    text-align: left;
  }
  .task-top__date {
    text-align: right;
  }
  .task-bottom {
    width: 100%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 8px;
  }
  .task-bottom.without-description {
    opacity: 0.25;
  }
</style>
