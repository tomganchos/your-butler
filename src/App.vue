<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <nav class="menu">
      <ul>
        <li><router-link to="/add"><font-awesome-icon icon="plus-circle" /></router-link></li>
        <li><router-link to="/"><span><font-awesome-icon icon="clipboard-list" /></span></router-link></li>
        <li><router-link to="/calendar"><font-awesome-icon icon="calendar-alt" /></router-link></li>
        <li><router-link to="/dictionary"><font-awesome-icon icon="globe-europe" /></router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'App',
    selected: 'tab2'
  }
</script>

<style>
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dfdfdf;
}
textarea:focus, input:focus, button, button:focus, button:hover {
  outline: none;
}
  .menu {
    position: absolute;
    bottom: 0;
    width: 100%;
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
    display: block;
    width: 100%;
    height: 40px;
    /*color: #333;*/
  }
  svg {
    height: 25px !important;
    width: 25px !important;
    /*padding: 5px;*/
  }
  svg path {
    color: #dfdfdf;
  }

  .router-link-exact-active svg path {
    /*background-color: gold;*/
    color: #9b52d9;
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
