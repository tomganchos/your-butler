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
          <router-link v-for="task in todoListWeek" :to="'/task/' + task.id" :key="task.id" class="task">
            <div class="task-top">
              <div class="task-top__title">
                {{ task.text }}
              </div>
              <div class="task-top__date">
                {{ getWeek(task) }}
              </div>
            </div>
            <div :class="{ 'without-description': !task.description }" class="task-bottom">
              {{ task.description ? task.description : $t('today-page.without-description') }}
            </div>
          </router-link>
        </div>
        <div class="tasks">
          <label v-if="todoListFuture.length > 0">{{ $t('today-page.for-future') }}</label>
          <router-link v-for="task in todoListFuture" :to="'/task/' + task.id" :key="task.id" class="task">
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
        <div class="tasks">
          <label v-if="todoListPrev.length > 0" class="prev">{{ $t('today-page.for-prev') }}</label>
          <router-link v-for="task in todoListPrev" :to="'/task/' + task.id" :key="task.id" class="task">
            <div class="task-top">
              <div class="task-top__title">
                {{ task.text }}
              </div>
              <div class="task-top__date">
                {{ task.type === 'day' ? getDateAndTime(task) : '' + task.type === 'week' ? getWeek(task) : '' }}
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
import { getTodos } from '../services/todo'
import moment from 'moment'
  export default {
    data() {
      return {
        name: "TodayPage",
        todoListDay: [],
        todoListWeek: [],
        todoListFuture: [],
        todoListPrev: []
      }
    },
    created() {
      console.log('test');
      console.log(moment().format('YYYY-MM-DD'))
      const todayDate = moment().format('YYYY-MM-DD')
      const todayWeek = moment().format('GGGG-[W]WW')
      const monday = moment().isoWeekday('Monday').format('YYYY-MM-DD')
      const sunday = moment().isoWeekday('Sunday').format('YYYY-MM-DD')
      console.log(todayWeek)
      const todoList = getTodos()
      console.log(todoList)

      if (todoList) {
        todoList.forEach(item => {
          if (item.type === 'day' && item.date === todayDate)
            this.todoListDay.push(item);
          else if (item.type === 'day' && item.date >= todayDate && item.date <= sunday)
            this.todoListWeek.push(item);
          else if (item.type === 'week' && item.week === todayWeek)
            this.todoListWeek.push(item);
          else if (item.type === 'future') {
            this.todoListFuture.push(item);
          }
          else if (item.date < todayDate || item.week < todayWeek) {
            this.todoListPrev.push(item)
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
      },
      getWeek (todo) {
        return todo.week ? moment(todo.week, 'GGGG-[W]WW').isoWeekday('Monday').format('DD.MM') + ' - ' + moment(todo.week, 'GGGG-[W]WW').isoWeekday('Sunday').format('DD.MM') : ''
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
  label.prev {
    color: #F54E4E !important;
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
