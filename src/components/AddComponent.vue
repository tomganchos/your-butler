<template>
  <div class="container">
    <header class="container-header">
      <span class="header-text">
        <slot name="header"></slot>
      </span>
      <span>
        <router-link to="/add">
          <font-awesome-icon icon="times" />
        </router-link>
      </span>
    </header>
    <main class="container-main">
      <slot name="main"></slot>
    </main>
    <footer class="container-footer">
      <button @click="addEvent()">{{ addText }}</button>
    </footer>
  </div>
</template>

<script>
  import {gsap} from "gsap";

  export default {
    name: "AddComponent",
    data() {
      return {
        addText: ''
      }
    },
    mounted () {
      this.addText = this.$t('add-page.add')
    },
    beforeDestroy () {
      this.addText = this.$t('add-page.add')
    },
    methods: {
      addEvent () {
        gsap.to('.container-footer button', {duration: 0.2, height: 'calc(100vh - 16px)', width: 'calc(100vw - 16px)', marginTop: -48, marginLeft: 0 })
        this.$emit('add-event')
        this.addText = this.$t('add-page.added')
        setTimeout(this.routeToMenu, 1000)
      },
      routeToMenu() {
        this.$router.push('/')
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
  }
  .container.app-main {
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
  }
  label.block input {
    height: 32px;
    width: calc(100% - 32px);
    border-radius: 4px;
    border: none;
    padding: 0 16px;
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
  label.block textarea {
    width: calc(100% - 32px);
    height: 48px;
    border-radius: 4px;
    border: none;
    padding: 8px 16px;
  }
  label.block.checkbox {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    margin: 16px 8px;
  }
  label.block.checkbox input[type="checkbox"] {
    width: 16px;
    height: 16px;
    margin: 0;
  }
  label.block.checkbox span {
    font-size: 14px;
    margin-bottom: 0;
  }
  .container-footer button {
    height: 32px;
    border-radius: 4px;
    border: none;
    margin: 8px;
    width: calc(100% - 16px);
    font-size: 14px;
    font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
