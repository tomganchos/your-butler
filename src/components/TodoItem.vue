<template>
  <div class="container">
    <header class="container-header">
      <span class="header-text">
        {{ todo && todo.text }}
      </span>
      <span>
        <router-link to="/">
          <font-awesome-icon icon="times" />
        </router-link>
      </span>
    </header>
    <main class="container-main">
      <div class="block">
        {{ todo && todo.type === 'day' ? getDateAndTime(todo) : '' }}
        {{ todo && todo.type === 'week' ? getWeek(todo) : '' }}
      </div>
      <div :class="{ 'without-description': todo && todo.description }" class="block">
        {{ todo && todo.description ? todo.description : 'Без описания' }}
      </div>
    </main>
    <footer class="container-footer">
      <button :disabled="todo && todo.done" @click="doTodo()">Выполнено</button>
      <button @click="removeTodo()" class="remove">Удалить</button>
    </footer>
  </div>
</template>

<script>
import {doTodo, getTodo, removeTodo} from '../services/todo'
import moment from "moment";

  export default {
    name: "TodoItem",
    data () {
      return {
        todo: null
      }
    },
    created () {
      this.todo = getTodo(parseInt(this.$route.params.id))
    },
    methods: {
      doTodo() {
        doTodo(parseInt(this.$route.params.id))
        this.$router.push('/')
      },
      removeTodo() {
        removeTodo(parseInt(this.$route.params.id))
        this.$router.push('/')
      },
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
.container {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 16px);
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
.container-header .header-text {
  width: calc(100vw - 16px - 25px - 8px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container-main {
  flex-grow: 1;
  overflow-y: auto;
}
.container-footer button {
   height: 32px;
   border-radius: 4px;
   border: none;
   margin: 8px;
   width: calc(50% - 18px);
   font-size: 14px;
   font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
 }
.container-footer button.remove {
  background-color: #F54E4E !important;
}
.block {
  margin: 8px;
  display: flex;
}
</style>
