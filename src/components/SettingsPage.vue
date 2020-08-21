<template>
  <div>
    <header class="header">
        <span class="page-header">
          {{ $t('settings-page.header') }}
        </span>
    </header>
    <main class="settings-list">
      <label class="block">
        <span>{{ $t('settings-page.current-language') }}</span>
        <select v-model="currentLanguage" @change="changeLanguage()">
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </label>
      <label class="block slide-checkbox">
        <span>{{ $t('settings-page.light-theme') }}</span>
        <input type="checkbox" v-model="isDarkTheme">
        <div class="slider theme"/>
        <span>{{ $t('settings-page.dark-theme') }}</span>
      </label>
      <label class="block slide-checkbox">
        <span>{{ $t('settings-page.purple') }}</span>
        <input type="checkbox" v-model="isGreen">
        <div class="slider color"/>
        <span>{{ $t('settings-page.green') }}</span>
      </label>
    </main>
  </div>
</template>

<script>
  import { getLanguage, setLanguage } from '../lang'

  export default {
    name: "SettingsPage",
    props: [ 'theme', 'color' ],
    data () {
      return {
        isDarkTheme: false,
        isGreen: false,
        currentLanguage: 'ru'
      }
    },
    created () {
      this.isDarkTheme = this.theme
      this.isGreen = this.color
      this.currentLanguage = getLanguage()
    },
    watch: {
      isDarkTheme () {
        this.$emit('theme', this.isDarkTheme)
      },
      isGreen () {
        this.$emit('color', this.isGreen)
      }
    },
    methods: {
      changeLanguage () {
        console.log(this.currentLanguage)
        setLanguage(this.currentLanguage)
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
  .settings-list {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 96px);
    overflow-y: auto;
  }
  label.block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 8px;
  }
  label.block span {
    margin-bottom: 8px;
    margin-left: 8px;
    font-size: 12px;
    transition: .4s;
  }
  label.block select {
    height: 32px;
    width: 100%;
    border-radius: 4px;
    border: none;
    padding: 0 16px;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
  }
  label.block.slide-checkbox {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    position: relative;
    width: calc(100% - 16px);
  }
  label.block.slide-checkbox span {
    width: calc(50% - 40px);
    margin: 0 8px;
    font-size: 14px;
    transition: .4s;
  }
  label.block.slide-checkbox span:first-child {
    text-align: left;
  }
  label.block.slide-checkbox span:last-child {
    text-align: right;
  }
  label.block.slide-checkbox input {
    display: none;
  }
  label.block.slide-checkbox .slider {
    bottom: 0;
    cursor: pointer;
    left: calc(50% - 40px);
    position: absolute;
    right: calc(50% - 40px);;
    top: 0;
    transition: .4s;
  }
  label.block.slide-checkbox .slider.theme {
    background-color: #dfdfdf;
  }
  label.block.slide-checkbox .slider.color {
    background-color: #9b52d9;
  }
  label.block.slide-checkbox .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 24px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 24px;
  }
  input:checked + .slider.theme {
    background-color: #383838 !important;
  }
  input:checked + .slider.color {
    background-color: #55D952 !important;
  }
  input:checked + .slider:before {
    transform: translateX(48px);
  }
  .slider {
    border-radius: 8px;
  }
  .slider:before {
    border-radius: 5px;
  }
</style>
