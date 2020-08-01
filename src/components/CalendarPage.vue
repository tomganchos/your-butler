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
        <button type="button">
          <font-awesome-icon icon="film" />
        </button>
        <button type="button">
          <font-awesome-icon icon="tv" />
        </button>
      </div>
    </main>
  </div>
<!--        <sui-accordion exclusive>-->
<!--          <sui-accordion-title>-->
<!--            <sui-icon name="dropdown" />-->
<!--            <strong>Задачи на день</strong>-->
<!--          </sui-accordion-title>-->
<!--          <sui-accordion-content>-->
<!--            <div class="todo-list" v-for="(todo, index) in todoListDay">-->
<!--              <div class="todo-item">-->
<!--                <sui-accordion exclusive>-->
<!--                  <sui-accordion-title>-->
<!--                    <span class="icon-done" v-if="todo.done">-->
<!--                      <font-awesome-icon icon="check" />-->
<!--                    </span>-->
<!--                    <span class="icon-done" v-else>-->
<!--                      <font-awesome-icon icon="times" />-->
<!--                    </span>-->
<!--                    <strong>{{todo.text}}</strong>-->
<!--                  </sui-accordion-title>-->
<!--                  <sui-accordion-content>-->
<!--                    <div class="title-strong"><span>{{todo.date}}</span></div>-->
<!--                    <div class="title-span"><span>{{todo.description}}</span></div>-->
<!--                  </sui-accordion-content>-->
<!--                </sui-accordion>-->
<!--                <div class="icon-remove" @click="removeTodo('todoListDay', index)">-->
<!--                  <font-awesome-icon icon="trash-alt" />-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </sui-accordion-content>-->
<!--          <sui-accordion-title>-->
<!--            <sui-icon name="dropdown" />-->
<!--            <strong>Задачи на неделю</strong>-->
<!--          </sui-accordion-title>-->
<!--          <sui-accordion-content>-->
<!--            <div class="todo-list" v-for="(todo, index) in todoListWeek">-->
<!--              <div class="todo-item">-->
<!--                <sui-accordion exclusive>-->
<!--                  <sui-accordion-title>-->
<!--                    <span class="icon-done" v-if="todo.done">-->
<!--                      <font-awesome-icon icon="check" />-->
<!--                    </span>-->
<!--                    <span class="icon-done" v-else>-->
<!--                      <font-awesome-icon icon="times" />-->
<!--                    </span>-->
<!--                    <strong>{{todo.text}}</strong>-->
<!--                  </sui-accordion-title>-->
<!--                  <sui-accordion-content>-->
<!--                    <div class="title-strong"><span>{{todo.date}}</span></div>-->
<!--                    <div class="title-span"><span>{{todo.description}}</span></div>-->
<!--                  </sui-accordion-content>-->
<!--                </sui-accordion>-->
<!--                <div class="icon-remove" @click="removeTodo('todoListWeek', index)">-->
<!--                  <font-awesome-icon icon="trash-alt" />-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </sui-accordion-content>-->
<!--          <sui-accordion-title>-->
<!--            <sui-icon name="dropdown" />-->
<!--            <strong>Задачи на будущее</strong>-->
<!--          </sui-accordion-title>-->
<!--          <sui-accordion-content>-->
<!--            <div class="todo-list" v-for="(todo, index) in todoListFuture">-->
<!--              <div class="todo-item">-->
<!--                <sui-accordion exclusive>-->
<!--                  <sui-accordion-title>-->
<!--                    <span class="icon-done" v-if="todo.done">-->
<!--                      <font-awesome-icon icon="check" />-->
<!--                    </span>-->
<!--                    <span class="icon-done" v-else>-->
<!--                      <font-awesome-icon icon="times" />-->
<!--                    </span>-->
<!--                    <strong>{{todo.text}}</strong>-->
<!--                  </sui-accordion-title>-->
<!--                  <sui-accordion-content>-->
<!--                    <div class="title-strong"><span>{{todo.date}}</span></div>-->
<!--                    <div class="title-span"><span>{{todo.description}}</span></div>-->
<!--                  </sui-accordion-content>-->
<!--                </sui-accordion>-->
<!--                <div class="icon-remove" @click="removeTodo('todoListFuture', index)">-->
<!--                  <font-awesome-icon icon="trash-alt" />-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </sui-accordion-content>-->

<!--          <sui-accordion-title>-->
<!--            <sui-icon name="dropdown" />-->
<!--            <strong>Информация о людях</strong>-->
<!--          </sui-accordion-title>-->
<!--          <sui-accordion-content>-->
<!--            <div class="todo-list" v-for="(todo, index) in peopleList">-->
<!--              <div class="todo-item">-->
<!--                <sui-accordion exclusive>-->
<!--                  <sui-accordion-title>-->
<!--                    <span class="icon-done" v-if="todo.done">-->
<!--                      <font-awesome-icon icon="check" />-->
<!--                    </span>-->
<!--                    <span class="icon-done" v-else>-->
<!--                      <font-awesome-icon icon="times" />-->
<!--                    </span>-->
<!--                    <div>-->
<!--                      <div class="title-strong"><strong>{{todo.name}}</strong></div>-->
<!--                      <div class="title-span"><span>{{todo.date}}</span></div>-->
<!--                    </div>-->
<!--                  </sui-accordion-title>-->
<!--                  <sui-accordion-content>-->
<!--                    <span>{{todo.text}}</span>-->
<!--                  </sui-accordion-content>-->
<!--                </sui-accordion>-->
<!--                <div class="icon-remove" @click="removePeople(index)">-->
<!--                  <font-awesome-icon icon="trash-alt" />-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </sui-accordion-content>-->

<!--          <sui-accordion-title>-->
<!--            <sui-icon name="dropdown" />-->
<!--            <strong>Настройки</strong>-->
<!--          </sui-accordion-title>-->
<!--          <sui-accordion-content>-->
<!--            <div class="todo-list">-->
<!--              <div class="todo-item">-->
<!--                <sui-accordion exclusive>-->
<!--                  <sui-accordion-title>-->
<!--                    <div class="settings">-->
<!--                      <div><span>Изменить язык</span></div>-->
<!--                      <div><span>Русский</span></div>-->
<!--                    </div>-->
<!--                  </sui-accordion-title>-->
<!--                  <sui-accordion-content>-->
<!--                    <div><span>Русский</span></div>-->
<!--                    <div><span>English</span></div>-->
<!--                  </sui-accordion-content>-->
<!--                </sui-accordion>-->

<!--              </div>-->
<!--              <div class="todo-item">-->
<!--                <div class="settings">-->
<!--                  <div><span>Ночная тема</span></div>-->
<!--                  <sui-checkbox label="" toggle v-model="nightTheme"/>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="todo-item">-->
<!--                <div class="settings">-->
<!--                  <div><span>Фиолетовый/Зелёный</span></div>-->
<!--                  <sui-checkbox label="" toggle v-model="greenColor"/>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </sui-accordion-content>-->
<!--        </sui-accordion>-->

<!--      <sui-accordion>-->
<!--        <sui-accordion-title>-->
<!--          <sui-icon name="dropdown" />-->
<!--          <strong>Кино</strong>-->
<!--        </sui-accordion-title>-->
<!--        <sui-accordion-content>-->
<!--          <div class="todo-list" v-for="todo in peopleList">-->
<!--            <div class="todo-item">-->
<!--              <sui-accordion exclusive>-->
<!--                <sui-accordion-title>-->
<!--                  <div class="title-strong"><strong>{{todo.name}}</strong></div>-->
<!--                  <div class="title-span"><span>{{todo.date}}</span></div>-->
<!--                </sui-accordion-title>-->
<!--                <sui-accordion-content>-->
<!--                  <span>{{todo.text}}</span>-->
<!--                </sui-accordion-content>-->
<!--              </sui-accordion>-->
<!--            </div>-->
<!--          </div>-->
<!--        </sui-accordion-content>-->
<!--        <sui-accordion-title>-->
<!--          <sui-icon name="dropdown" />-->
<!--          <strong>Музыка</strong>-->
<!--        </sui-accordion-title>-->
<!--        <sui-accordion-content>-->
<!--          <div class="todo-list" v-for="todo in peopleList">-->
<!--            <div class="todo-item">-->
<!--              <sui-accordion exclusive>-->
<!--                <sui-accordion-title>-->
<!--                  <div class="title-strong"><strong>{{todo.name}}</strong></div>-->
<!--                  <div class="title-span"><span>{{todo.date}}</span></div>-->
<!--                </sui-accordion-title>-->
<!--                <sui-accordion-content>-->
<!--                  <span>{{todo.text}}</span>-->
<!--                </sui-accordion-content>-->
<!--              </sui-accordion>-->
<!--            </div>-->
<!--          </div>-->
<!--        </sui-accordion-content>-->
<!--      </sui-accordion>-->
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
</style>
