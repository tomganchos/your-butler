<template>
  <add-component @add-event="addNewWord">
    <template slot="header">
      {{ $t('add-page.add-word.header') }}
    </template>
    <template slot="main">
      <label class="block">
        <span>{{ $t('add-page.add-word.word') }}</span>
        <input v-model="newWord.word" :placeholder="$t('add-page.add-word.word-placeholder')">
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-word.language') }}</span>
        <select v-model="newWord.language">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="it">Italiano</option>
          <option value="ee">Eesti</option>
        </select>
      </label>
      <label class="block">
        <span>{{ $t('add-page.add-word.translate') }}</span>
        <input v-model="newWord.translate" :placeholder="$t('add-page.add-word.translate-translate')">
      </label>
    </template>
  </add-component>
</template>

<script>
  import AddComponent from './AddComponent'

  export default {
    name: "AddNewWord",
    components: { AddComponent },
    data() {
      return {
        newWord: {
          word: '',
          language: 'en',
          translate: ''
        },
        addNewWordText: ''
      }
    },
    methods: {
      addNewWord () {

      }
    }
  }
</script>

<style scoped>

</style>
