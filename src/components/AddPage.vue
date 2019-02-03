<template>
    <div>
      <!--<div style="display: flex">-->
        <!--<img class="image image-cover" src="../assets/bg.png" alt="фон">-->
      <!--</div>-->
      <div>
        <h1>
        Добавление
        </h1>
      </div>
      <div class="button-list">
        <!--<h2>-->
          <!--Добавление задач:-->
        <!--</h2>-->
        <div class="button" @click="addButton('todo')">
          <!--<router-link to="/add-todo">-->
          <div class="header">
            <font-awesome-icon icon="check-square" />
            <strong class="header-text">Добавление задачи</strong>
          </div>
          <div>
            <span class="description">TODO на день, неделю, на будущее. Добавление подзадач</span>
          </div>
          <!--</router-link>-->
        </div>

        <div class="button" @click="addButton('thumbs-up')">
          <div class="header">
            <font-awesome-icon icon="thumbs-up" />
            <strong class="header-text">Добавление "на потом"</strong>
          </div>
          <div>
            <span class="description">Кино, сериал, песня, альбом, игра, книга, статья и т.д.</span>
          </div>
        </div>

        <div class="button" @click="addButton('people')">
          <div class="header">
            <font-awesome-icon icon="user" />
            <strong class="header-text">Добавление информации о человеке</strong>
          </div>
          <div>
            <span class="description">Дни рождения и другие события людей, которых нет в социальных сетях</span>
          </div>
        </div>
      </div>
      <div class="my-router" style="display: none">
        <add-todo></add-todo>
      </div>
      <div class="my-router" style="display: none">
        <add-wish-list></add-wish-list>
      </div>
      <div class="my-router" style="display: none">
        <add-people></add-people>
      </div>
    </div>
</template>

<script>
  import AddTodo from "./AddTodo";
  import AddWishList from "./AddWishList";
  import AddPeople from "./AddPeople";
  export default {
    name: "AddPage",
    components: {AddPeople, AddWishList, AddTodo},
    methods: {
      addButton(type) {
        for (let i = 0; i < document.getElementsByClassName('button').length; i++) {
          document.getElementsByClassName('button')[i].className = 'button little';
        }
        if (type === 'todo') {
          // document.getElementsByClassName('button')[0].className = 'button little chosen';
          // document.getElementsByClassName('button')[1].className = 'button little';
          // document.getElementsByClassName('button')[2].className = 'button little';
          document.querySelectorAll('.my-router')[0].style.display = 'block';
        } else if (type === 'thumbs-up') {
          // document.getElementsByClassName('button')[0].className = 'button little';
          // document.getElementsByClassName('button')[1].className = 'button little chosen';
          // document.getElementsByClassName('button')[2].className = 'button little';
          document.querySelectorAll('.my-router')[1].style.display = 'block';
        } else if (type === 'people') {
          // document.getElementsByClassName('button')[0].className = 'button little';
          // document.getElementsByClassName('button')[1].className = 'button little';
          // document.getElementsByClassName('button')[2].className = 'button little chosen';
          document.querySelectorAll('.my-router')[2].style.display = 'block';
        }
        // document.getElementsByClassName('button-list')[0].className = 'button-list little';
      }
    }
  }
</script>

<style scoped>

  .image {
    /*float: left;*/
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: -1;
  }
  .image-cover {
    object-fit: cover;
  }
  h1 {
    font-size: x-large;
    color: #9b52d9;
    padding: 10px;
  }
  h2 {
    font-size: large;
    color: #333333;
    margin: 0;
  }
  .button-list {
    display: flex;
    flex-direction: column;
    transition: 0.4s ease-in-out;
    -ms-transition: 0.4s ease-in-out;
    -moz-transition: 0.4s ease-in-out;
    -webkit-transition: 0.4s ease-in-out;
  }
  .button-list.little {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-around;
    align-items: flex-start;
    transition: 0.4s ease-in-out;
    -ms-transition: 0.4s ease-in-out;
    -moz-transition: 0.4s ease-in-out;
    -webkit-transition: 0.4s ease-in-out;
  }
  .button-list.little .header-text, .button-list.little .description {
    display: none;
  }
  .button span {
    margin-top: 5px;
    display: flex;
    text-align: left;
  }
  .button strong {
    font-size: large;
    text-align: left;
    margin-left: 10px;
  }
  .button .header {
    display: flex; align-items: center
  }
  .button .header .header-text {
    margin-left: 10px;
  }
  .button {
    display: block;
    padding: 10px 10px 15px 10px;
    border-radius: 10px;
    margin: 10px;
    background-color: rgba(173, 90, 242, 0.2);
    /*box-shadow: 0 0 10px rgba(0,0,0,0.3);*/
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.4s ease-out;
    -ms-transition: opacity 0.4s ease-out;
    -moz-transition: opacity 0.4s ease-out;
    -webkit-transition: opacity 0.4s ease-out;
    /*border: 1px #f4433670 solid;*/
  }
  .button:hover, .button:focus, .button:active,
  .button:hover svg path, .button:focus svg path, .button:active svg path {
    color: #9b52d9;
    background-color: rgba(155, 82, 217, 0.35);
  }

  .button.little {
    /*display: flex;*/
  }
  .button.little .header-text {
    opacity: 0;
    transition: opacity 0.4s ease-in;
    -ms-transition: opacity 0.4s ease-in;
    -moz-transition: opacity 0.4s ease-in;
    -webkit-transition: opacity 0.4s ease-in;
  }
  .button.little .description {
    display: none;
    /*opacity: 0;*/
    /*transition: opacity 0.4s ease-in;*/
    /*-ms-transition: opacity 0.4s ease-in;*/
    /*-moz-transition: opacity 0.4s ease-in;*/
    /*-webkit-transition: opacity 0.4s ease-in;*/
  }
  .button.little.chosen {
    border-radius: 10px 10px 0 0;
    padding-bottom: 25px;
    margin-bottom: 0;
  }

  /*@media screen and (max-width: 600px) {*/
    /*.button {*/
      /*background-color: #42b983;*/
    /*}*/
  /*}*/

</style>
