<template>
    <div>
      <header class="header">
        <span class="page-header">
          {{ $t('add-page.header') }}
        </span>
      </header>
      <nav class="button-list">
        <!--<h2>-->
          <!--Добавление задач:-->
        <!--</h2>-->
        <router-link to="/add-todo" class="button">
          <!--<router-link to="/add-todo">-->
          <div class="button-header">
            <font-awesome-icon icon="check-square" />
            <strong class="header-text">{{ $t('add-page.adding-task') }}</strong>
          </div>
          <div>
            <span class="header-description">{{ $t('add-page.adding-task-description') }}</span>
          </div>
          <!--</router-link>-->
        </router-link>

        <router-link to="/add-wishlist" class="button">
          <div class="button-header">
            <font-awesome-icon icon="thumbs-up" />
            <strong class="header-text">{{ $t('add-page.adding-for-late') }}</strong>
          </div>
          <div>
            <span class="header-description">{{ $t('add-page.adding-for-late-description') }}</span>
          </div>
        </router-link>

        <router-link to="/add-people" class="button">
          <div class="button-header">
            <font-awesome-icon icon="user" />
            <strong class="header-text">{{ $t('add-page.adding-person') }}</strong>
          </div>
          <div>
            <span class="header-description">{{ $t('add-page.adding-person-description') }}</span>
          </div>
        </router-link>

        <router-link to="/add-new-word" class="button">
          <div class="button-header">
            <font-awesome-icon icon="globe-europe" />
            <strong class="header-text">{{ $t('add-page.adding-new-word') }}</strong>
          </div>
          <div>
            <span class="header-description">{{ $t('add-page.adding-new-word-description') }}</span>
          </div>
        </router-link>
      </nav>
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
    color: #9b52d9;
  }

  .button-list {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 96px);
    overflow-y: auto;
  }
  .button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #3E2D4B;
    margin: 4px 8px;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: #dfdfdf;
  }
  .button-header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .button-header svg {
    margin-right: 8px;
  }
  .button .header-text {
    text-align: left;
  }
  .button .header-description {
    display: flex;
    text-align: left;
  }

</style>
