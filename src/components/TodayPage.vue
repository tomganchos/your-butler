<template>
    <div>
      <header class="header">
        <span class="page-header">
          {{ $t('today-page.header') }}
        </span>
      </header>
      <main class="tasks-list">
        <div class="tasks">
          <label v-if="todoListDay.length > 0">{{ $t('today-page.for-today') }}</label>
          <router-link v-for="task in todoListDay" :to="'/task/' + task.id" :key="task.id" class="task">
            <div class="task-top">
              <div class="task-top__title">
                {{ task.text }}
              </div>
              <div class="task-top__date">
                {{ getDateAndTime(task) }}
              </div>
            </div>
            <div :class="{ 'without-description': !task.description }" class="task-bottom">
              {{ task.description ? task.description : $t('today-page.without-description') }}
            </div>
          </router-link>
        </div>
        <div class="tasks">
          <label v-if="todoListWeek.length > 0">{{ $t('today-page.for-week') }}</label>
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
          <label v-if="todoListFuture.length > 0">{{ $t('today-page.for-future') }}</label>
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
    </div>
</template>

<script>
import {getStorageItem, getTodos} from '../storage'
import moment from 'moment'
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
      const todoList = getTodos()
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
    },
    methods: {
      getDateAndTime (todo) {
        let displayText = moment(todo.date, 'YYYY-MM-DD').locale('ru').format('D MMM')
        if (todo.time) {
          displayText += ' ' + todo.time
        }
        displayText += ', ' + moment(todo.date, 'YYYY-MM-DD').locale('ru').format('dd').toUpperCase()
        // TODO: locale
        return displayText
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
  }
  .tasks-list {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 96px);
    overflow-y: auto;
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
  }
  .task {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 8px 8px;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .task-top__date {
    text-align: right;
    white-space: nowrap;
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
    opacity: 0.35;
  }
</style>
