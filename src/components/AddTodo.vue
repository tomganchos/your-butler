<template>
  <add-component @add-event="addTodo">
    <template slot="header">
      {{ $t('add-page.add-todo-page.header') }}
    </template>
    <template slot="main">
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
        <textarea :placeholder="$t('add-page.add-todo-page.description-of-description')" v-model="newTodo.description"></textarea>
      </label>
      <!--      <label class="block">-->
      <!--        <span>{{ $t('add-page.add-todo-page.checklist') }}</span>-->

      <!--      </label>-->
    </template>
  </add-component>
</template>

<script>
  import AddComponent from "./AddComponent";
  import moment from 'moment'
  import { getStorageItem, addTodo } from "../storage";
  import {gsap} from "gsap";

  export default {
    name: "AddTodo",
    components: { AddComponent },
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

        addTodoText: ''
      }
    },
    mounted () {
      // this.storage = getStorageItem();
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
        obj.id = moment().unix()
        console.log(obj);
        console.log(JSON.stringify(obj));
        addTodo(obj)
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

</style>
