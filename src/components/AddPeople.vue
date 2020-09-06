<template>
  <add-component @add-event="addPerson">
    <template slot="header">
      {{ $t('add-page.add-people.header') }}
    </template>
    <template slot="main">
      <label class="block">
        <span>{{ $t('add-page.add-people.name') }}</span>
        <input v-model="newPeople.name" :placeholder="$t('add-page.add-people.name-placeholder')">
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-people.event') }}</span>
        <input v-model="newPeople.event" :placeholder="$t('add-page.add-people.event-placeholder')">
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-people.date') }}</span>
        <input v-model="newPeople.date" type="date">
      </label>
      <label class="block checkbox">
        <span>{{ $t('add-page.add-people.is-once') }}</span>
        <input v-model="newPeople.isOnce" type="checkbox">
      </label>
    </template>
  </add-component>
</template>

<script>
  import AddComponent from './AddComponent'
  import moment from "moment";
  import { addPerson } from "../services/people";

  export default {
    name: "AddPeople",
    components: { AddComponent },
    data() {
      return {
        newPeople: {
          name: '',
          event: '',
          date: '',
          isOnce: false
        },
        addPeopleText: ''
      }
    },
    mounted () {

    },
    methods: {
      addPerson() {
        let obj = {};
        obj.name = this.newPeople.name
        obj.event = this.newPeople.event
        obj.date = this.newPeople.date
        obj.isOnce = this.newPeople.isOnce
        obj.id = moment().unix()
        addPerson(obj)
        // if (window.localStorage.getItem('people')) {
        //   console.log(window.localStorage.getItem('people'));
        //   let list = JSON.parse(window.localStorage.getItem('people'));
        //   list.push(obj);
        //   window.localStorage.setItem('people', JSON.stringify(list));
        // } else {
        //   let list = [];
        //   list.push(obj);
        //   console.log(JSON.stringify(list));
        //   window.localStorage.setItem('people', JSON.stringify(list));
        // }
        console.log(obj)
      }
    }
  }
</script>

<style scoped>

</style>
