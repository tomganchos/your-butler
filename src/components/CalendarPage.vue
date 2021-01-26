<template>
  <div>
    <header class="header">
        <span class="page-header">
          {{ $t('calendar-page.header') }}
        </span>
    </header>
    <main>
      <calendar></calendar>

      <div class="wishlist">
        <router-link to="/wishlist/movie">
          <button type="button" class="button movie">
            <font-awesome-icon icon="film" />
          </button>
        </router-link>
        <router-link to="/wishlist/serial">
          <button type="button" class="button serial">
            <font-awesome-icon icon="tv" />
          </button>
        </router-link>
        <router-link to="/wishlist/book" >
          <button type="button" class="button book">
            <font-awesome-icon icon="book" />
          </button>
        </router-link>
        <router-link to="/wishlist/link">
          <button type="button" class="button link">
            <font-awesome-icon icon="newspaper" />
          </button>
        </router-link>
        <router-link to="/wishlist/music">
          <button type="button" class="button music">
            <font-awesome-icon icon="music" />
          </button>
        </router-link>
        <router-link to="/wishlist/game">
          <button type="button" class="button game">
            <font-awesome-icon icon="gamepad" />
          </button>
        </router-link>
        <router-link to="/wishlist/cook">
          <button type="button" class="button cook">
            <font-awesome-icon icon="utensils" />
          </button>
        </router-link>
        <router-link to="/wishlist/place">
          <button type="button" class="button place">
            <font-awesome-icon icon="map-marked-alt" />
          </button>
        </router-link>
        <router-link to="/wishlist/other">
          <button type="button" class="button other">
            <font-awesome-icon icon="file-alt" />
          </button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
  import calendar from './calendar'
  export default {
    name: "CalendarPage",
    components: {
      calendar
    },
    data() {
      return {
        // submitButtonText: 'Добавить'
        todoListDay: [],
        todoListWeek: [],
        todoListFuture: [],
        todoWishList: [],
        peopleList: [],
        nightTheme: false,
        greenColor: false,
        calendarData: {},
        attributes: [
          {
            dot: 'red',
            dates: [ { start: new Date(2020, 7, 1), end: new Date(2020, 7, 5) },
          { start: new Date(2020, 7, 15), span: 2 }]
          }
        ],
        showDate: new Date()
      }
    },
    created() {
      this.getTodoList();
      this.getPeople();
    },
    methods: {
      getTodoList() {
        this.todoList = JSON.parse(window.localStorage.getItem('todo'));

        this.todoList.forEach(item => {
          if (item.type === 'day')
            this.todoListDay.push(item);
          else if (item.type === 'week')
            this.todoListWeek.push(item);
          else if (item.type === 'future') {
            this.todoListFuture.push(item);
          }
        })
      },
      setTodoList() {
        this.todoList = this.todoListDay.concat(this.todoListWeek,this.todoListFuture);
        console.log(this.todoList);
        window.localStorage.setItem('todo', JSON.stringify(this.todoList));
      },
      setPeopleList() {
        window.localStorage.setItem('people', JSON.stringify(this.peopleList));
      },

      getWishList() {
        this.todoList = JSON.parse(window.localStorage.getItem('wishlist'));

        this.todoList.forEach(item => {
          if (item.type === 'day')
            this.todoListDay.push(item);
          else if (item.type === 'week')
            this.todoListWeek.push(item);
          else if (item.type === 'future') {
            this.todoListFuture.push(item);
          }
        })
      },

      getPeople() {
        this.peopleList = JSON.parse(window.localStorage.getItem('people'));
      },

      removeTodo(type ,id) {
        console.log(this[type][id]);
        console.log(id);
        console.log(type);
        this[type].splice(id, 1);
        this.setTodoList();
      },
      removePeople(id) {
        this.peopleList.splice(id, 1);
        this.setPeopleList();
      },
      setShowDate(d) {
        this.showDate = d
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
  .calendar {
    margin-left: 8px;
    margin-right: 8px;
    margin: auto;
    width: auto;
    max-width: 400px;
  }
  .wishlist {
    overflow-x: auto;
    white-space: nowrap;
    margin: 8px;
  }
  .wishlist .button {
    height: 64px;
    width: 64px;
    border-radius: 8px;
    border: none;
    color: #fff;
    padding: 0;
    margin: 8px;
  }
  .wishlist .button.movie {
    background-color: #EA607A;
  }
  .wishlist .button.serial {
    background-color: #966B9D;
  }
  .wishlist .button.book {
    background-color: #9D9C62;
  }
  .wishlist .button.link {
    background-color: #6184D8;
  }
  .wishlist .button.music {
    background-color: #A98743;
  }
  .wishlist .button.game {
    background-color: #6F8695;
  }
  .wishlist .button.place {
    background-color: #235789;
  }
  .wishlist .button.cook {
    background-color: #255957;
  }
  .wishlist .button.other {
    background-color: #5CA4A9;
  }
</style>
