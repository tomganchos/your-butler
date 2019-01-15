<template>
  <div id="app">
    <router-view/>

    <nav class="menu">
      <ul>
        <li><router-link to="/add"><font-awesome-icon icon="plus-circle" /></router-link></li>
        <li><router-link to="/"><span><font-awesome-icon icon="clipboard-list" /></span></router-link></li>
        <li><router-link to="/calendar"><font-awesome-icon icon="calendar-alt" /></router-link></li>
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
  color: #2c3e50;
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
    padding: 5px;
  }
  svg path {
    color: #333;
  }

  .router-link-exact-active svg path {
    /*background-color: gold;*/
    color: #f44336;
  }

</style>
