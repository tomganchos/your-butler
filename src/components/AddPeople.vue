<template>
  <add-component @add-event="addPeople">
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
      addPeople() {
        let obj = {};
        obj.name = this.newPeople.name
        obj.event = this.newPeople.event
        obj.date = this.newPeople.date
        obj.isOnce = this.newPeople.isOnce
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
  /*svg path {*/
  /*  color: #dfdfdf;*/
  /*  padding: 0;*/
  /*}*/
  /*.container {*/
  /*  background-color: #383838;*/
  /*  position: absolute;*/
  /*  top: 8px;*/
  /*  left: 8px;*/
  /*  right: 8px;*/
  /*  bottom: 8px;*/
  /*  z-index: 10;*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*}*/
  /*.container.app-main {*/
  /*  height: calc(100vh - 16px);*/
  /*}*/
  /*.container-header {*/
  /*  height: 48px;*/
  /*  min-height: 48px;*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*  justify-content: space-between;*/
  /*  padding: 0 8px;*/
  /*  font-size: 24px;*/
  /*  font-weight: 100;*/
  /*}*/
  /*.container-header .header-text {*/
  /*  width: calc(100vw - 16px - 25px - 8px);*/
  /*  white-space: nowrap;*/
  /*  overflow: hidden;*/
  /*  text-overflow: ellipsis;*/
  /*}*/
  /*.container-main {*/
  /*  flex-grow: 1;*/
  /*  overflow-y: auto;*/
  /*}*/
  /*label.block {*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  align-items: flex-start;*/
  /*  margin: 8px;*/
  /*}*/
  /*label.block span {*/
  /*  margin-bottom: 8px;*/
  /*  margin-left: 8px;*/
  /*  font-size: 12px;*/
  /*  color: #9b52d9;*/
  /*}*/
  /*label.block input {*/
  /*  height: 32px;*/
  /*  width: calc(100% - 32px);*/
  /*  border-radius: 4px;*/
  /*  border: none;*/
  /*  padding: 0 16px;*/
  /*}*/
  /*label.block.checkbox {*/
  /*  display: flex;*/
  /*  flex-direction: row-reverse;*/
  /*  justify-content: flex-end;*/
  /*  align-items: center;*/
  /*  margin: 16px 8px;*/
  /*}*/
  /*label.block.checkbox input[type="checkbox"] {*/
  /*  width: 16px;*/
  /*  height: 16px;*/
  /*  margin: 0;*/
  /*}*/
  /*label.block.checkbox span {*/
  /*  font-size: 14px;*/
  /*  margin-bottom: 0;*/
  /*}*/
  /*.container-footer button {*/
  /*  height: 32px;*/
  /*  background-color: #9B52D9;*/
  /*  color: #ffffff;*/
  /*  border-radius: 4px;*/
  /*  border: none;*/
  /*  margin: 8px;*/
  /*  width: calc(100% - 16px);*/
  /*  font-size: 14px;*/
  /*  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;*/
  /*}*/
</style>
