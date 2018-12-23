<template>
    <div>
      <div style="display: flex">
        <img class="image image-cover" src="../assets/bg.png" alt="фон">
      </div>
      <div>
        <h1>
        Добавление
        </h1>
      </div>
      <div style="display: flex; flex-direction: column">
        <!--<h2>-->
          <!--Добавление задач:-->
        <!--</h2>-->
        <div class="button">
          <div style="display: flex; align-items: center">
            <font-awesome-icon icon="check-square" />
            <strong>Добавление задачи</strong>
          </div>
          <div>
            <span class="description">TODO на день, неделю, на будущее. Добавление подзадач</span>
          </div>
        </div>

        <div class="button">
          <div style="display: flex; align-items: center">
            <font-awesome-icon icon="thumbs-up" />
            <strong>Добавление "на потом"</strong>
          </div>
          <div>
            <span class="description">Кино, сериал, песня, альбом, игра, книга, статья и т.д.</span>
          </div>
        </div>

        <div class="button">
          <div style="display: flex; align-items: center">
            <font-awesome-icon icon="user" />
            <strong style="margin-left: 10px">Добавление информации о человеке</strong>
          </div>
          <div>
            <span class="description">Дни рождения людей, которых нет в социальных сетях</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AddPage"
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
    color: #f44336;
  }
  h2 {
    font-size: large;
    color: #333333;
    margin: 0;
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
  .button {
    display: block;
    padding: 10px 10px 15px 10px;
    border-radius: 10px;
    margin: 10px;
    background-color: #F4433611;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    cursor: pointer;
    /*border: 1px #f4433670 solid;*/
  }
  .button:hover, .button:focus, .button:active,
  .button:hover svg path, .button:focus svg path, .button:active svg path {
    color: #f44336;
    background-color: #F4433621;
  }
</style>
