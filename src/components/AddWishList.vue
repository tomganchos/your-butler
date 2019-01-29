<template>
  <div class="container">
    <div class="header-container">
      <strong>
        Добавление "на потом"
      </strong>
      <span>
        <router-link to="/">
          <font-awesome-icon icon="times" />
        </router-link>
      </span>
    </div>
    <div class="scroll-container">
      <div>
        <label>Тематика</label>
        <select class="form" v-model="newWishList.type">
          <option v-for="type in types" value="type.value">{{type.text}}</option>
        </select>
      </div>
      <div>
        <label>Название</label>
        <input v-model="newWishList.text">
      </div>
      <div>
        <label>Описание</label>
        <textarea v-model="newWishList.description"></textarea>
      </div>
    </div>
    <div class="submit-button">
      <button @click="addWishList()">{{submitButtonText}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddWishList",
    data() {
      return {
        submitButtonText: 'Добавить',
        types: [
          {
            value: 'movie',
            text: 'Кино',
            icon: ''
          }, {
            value: 'book',
            text: 'Книга',
            icon: ''
          }, {
            value: 'site',
            text: 'Ссылка',
            icon: ''
          }, {
            value: 'music',
            text: 'Музыка',
            icon: ''
          }, {
            value: 'game',
            text: 'Игра',
            icon: ''
          }, {
            value: 'cook',
            text: 'Рецепт',
            icon: ''
          }, {
            value: 'place',
            text: 'Место',
            icon: ''
          }, {
            value: 'other',
            text: 'Другое',
            icon: ''
          }
        ],
        newWishList: {
          type: '',
          text: '',
          description: '',
          updateDate: '',
          done: false
        }
      }
    },
    methods: {
      addWishList() {
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
  svg path {
    color: #dfdfdf;
    padding: 0;
  }
  .container {
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

  .header-container svg {
    padding: 0;
  }
  .submit-button {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  select {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  input {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  textarea {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  button {
    background-color: #9b52d9;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 15px;
    font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
    width: 100%;
    box-shadow: 0 0 10px #333333 ;
    transition: ease-in-out 0.15s;
    height: 30px;
  }
  /*button:focus, button:hover {*/
    /*padding: 10px 20px;*/
    /*height: 50px;*/
    /*transition: ease-in-out 0.15s;*/
  /*}*/
  button:active, button:focus {
    height: 100vh;
    margin: -10px;
    width: calc(100% + 20px);
    border-radius: 0;
    transition: ease-in-out 0.15s;
  }

</style>
