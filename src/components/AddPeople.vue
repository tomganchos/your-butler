<template>
  <div class="_container">
    <div class="header-container">
      <strong class="header-text">
        Добавление информации о человеке
      </strong>
      <span>
        <router-link to="/">
          <font-awesome-icon icon="times" />
        </router-link>
      </span>
    </div>
    <div class="scroll-container">

      <label>Имя Фамилия</label>
      <div class="ui fluid input">
        <input v-model="newPeople.name">
      </div>

      <label>Событие</label>
      <div class="ui fluid input">
        <input v-model="newPeople.text">
      </div>

      <label>Дата </label>
      <div class="ui fluid input">
        <input type="date" v-model="newPeople.date">
      </div>


    </div>
    <div class="submit-button">
      <button @click="addPeople()">{{submitButtonText}}</button>
    </div>
  </div>
</template>

<script>

  // import '../assets/semantic/jquery-3.3.1.min';
  // import '../assets/semantic/semantic';

  export default {
    name: "AddPeople",
    data() {
      return {
        submitButtonText: 'Добавить',
        newPeople: {
          name: '',
          text: '',
          date: ''
        }
      }
    },
    methods: {
      addPeople() {
        let obj = {};
        obj.name = this.newPeople.name;
        obj.text = this.newPeople.text;
        obj.date = this.newPeople.date;
        if (window.localStorage.getItem('people')) {
          console.log(window.localStorage.getItem('people'));
          let list = JSON.parse(window.localStorage.getItem('people'));
          list.push(obj);
          window.localStorage.setItem('people', JSON.stringify(list));
        } else {
          let list = [];
          list.push(obj);
          console.log(JSON.stringify(list));
          window.localStorage.setItem('people', JSON.stringify(list));
        }
        this.submitButtonText = 'Добавлено';

        setTimeout(this.routeToMenu, 1000);
      },
      routeToMenu() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  /*@import '../assets/semantic/semantic.min.css';*/
  svg path {
    color: #dfdfdf;
    padding: 0;
  }
  ._container {
    background-color: #383838;
    margin: 5px;
    /*box-shadow: 0 0 10px rgba(0,0,0,0.3);*/
    padding: 10px;
    text-align: left;
    color: #dfdfdf;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    overflow-y: hidden;
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: large;
  }
  .header-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header-container svg {
    padding: 0;
  }

  .scroll-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .scroll-container input {
    display: block;
    margin-top: 5px;
    width: 100%;
    margin-bottom: 15px;
  }


  .submit-button {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    display: flex;
  }
  /*button {*/
    /*background-color: #9b52d9;*/
    /*color: #fff;*/
    /*border: none;*/
    /*padding: 5px 10px;*/
    /*border-radius: 15px;*/
    /*font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;*/
    /*font-size: 16px;*/
    /*width: 100%;*/
    /*box-shadow: 0 0 10px #333333 ;*/
    /*transition: ease-in-out 0.15s;*/
    /*height: 30px;*/
  /*}*/
  /*button:focus, button:hover {*/
  /*padding: 10px 20px;*/
  /*height: 50px;*/
  /*transition: ease-in-out 0.15s;*/
  /*}*/


  /*button:active, button:focus {*/
    /*height: 100vh;*/
    /*margin: -10px;*/
    /*width: calc(100% + 20px);*/
    /*border-radius: 0;*/
    /*transition: ease-in-out 0.15s;*/
  /*}*/
  .ui.input {
    /*display: inherit;*/
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .ui.input input {
    display: flex;
    padding: 5px 10px;
    /*height: 19px;*/
  }
</style>
