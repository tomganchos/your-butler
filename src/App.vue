<template>
  <div id="app" :class="{'dark-theme': isDarkTheme, 'green': isGreen }">
    <transition name="fade" mode="out-in">
      <router-view :theme="isDarkTheme" :color="isGreen" class="app-main" @theme="setTheme" @color="setColor"/>
    </transition>

    <nav class="menu">
      <ul>
        <li><router-link to="/add"><font-awesome-icon icon="plus-circle" /></router-link></li>
        <li><router-link to="/"><span><font-awesome-icon icon="clipboard-list" /></span></router-link></li>
        <li><router-link to="/calendar"><font-awesome-icon icon="calendar-alt" /></router-link></li>
        <li><router-link to="/dictionary"><font-awesome-icon icon="globe-europe" /></router-link></li>
        <li><router-link to="/settings"><font-awesome-icon icon="sliders-h" /></router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {getSettings, setColor, setTheme} from "./services/settings"

  export default {
    name: 'App',
    data () {
      return {
        selected: 'tab2',
        isDarkTheme: false,
        isGreen: false
      }
    },
    created () {
      const settings = getSettings()
      if (settings.isGreen) {
        this.isGreen = settings.isGreen
      }
      if (settings.isDarkTheme) {
        this.isDarkTheme = settings.isDarkTheme
      }
    },
    methods: {
      setTheme (value) {
        this.isDarkTheme = value
        setTheme(this.isDarkTheme)
      },
      setColor (value) {
        this.isGreen = value
        setColor(this.isGreen)
      }
    }
  }
</script>

<style>
@import "./css/light-purple.css";
@import "./css/light-green.css";
@import "./css/dark-purple.css";
@import "./css/dark-green.css";

#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}
#app svg path {
  transition: color 0.2s ease-in-out;
}
#app .page-header {
  transition: color 0.2s ease-in-out;
}



.app-main {
  flex-grow: 1;
  height: calc(100vh - 48px);
}
textarea:focus, input:focus, button, button:focus, button:hover {
  outline: none;
}
  .menu {
    bottom: 0;
    width: 100%;
    position: fixed;
  }
  .menu ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
  .menu ul li {
    width: 100%;
    display: block;
  }
  .menu ul li a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    height: 32px;
  }
  svg {
    height: 25px !important;
    width: 25px !important;
  }
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
