<template>
    <div>
      <div>
        <h1>
          Календарь
        </h1>
      </div>

      <div>

        <sui-accordion exclusive>
          <sui-accordion-title>
            <sui-icon name="dropdown" />
            <strong>Задачи на день</strong>
          </sui-accordion-title>
          <sui-accordion-content>
            <div class="todo-list" v-for="(todo, index) in todoListDay">
              <div class="todo-item">
                <sui-accordion exclusive>
                  <sui-accordion-title>
                    <span class="icon-done" v-if="todo.done">
                      <font-awesome-icon icon="check" />
                    </span>
                    <span class="icon-done" v-else>
                      <font-awesome-icon icon="times" />
                    </span>
                    <strong>{{todo.text}}</strong>
                  </sui-accordion-title>
                  <sui-accordion-content>
                    <div class="title-strong"><span>{{todo.date | moment('DD.MM.YYYY')}}</span></div>
                    <div class="title-span"><span>{{todo.description}}</span></div>
                  </sui-accordion-content>
                </sui-accordion>
                <div class="icon-remove" @click="removeTodo('todoListDay', index)">
                  <font-awesome-icon icon="trash-alt" />
                </div>
              </div>
            </div>
          </sui-accordion-content>
          <sui-accordion-title>
            <sui-icon name="dropdown" />
            <strong>Задачи на неделю</strong>
          </sui-accordion-title>
          <sui-accordion-content>
            <div class="todo-list" v-for="(todo, index) in todoListWeek">
              <div class="todo-item">
                <sui-accordion exclusive>
                  <sui-accordion-title>
                    <span class="icon-done" v-if="todo.done">
                      <font-awesome-icon icon="check" />
                    </span>
                    <span class="icon-done" v-else>
                      <font-awesome-icon icon="times" />
                    </span>
                    <strong>{{todo.text}}</strong>
                  </sui-accordion-title>
                  <sui-accordion-content>
                    <div class="title-strong"><span>{{todo.date}}</span></div>
                    <div class="title-span"><span>{{todo.description}}</span></div>
                  </sui-accordion-content>
                </sui-accordion>
                <div class="icon-remove" @click="removeTodo('todoListWeek', index)">
                  <font-awesome-icon icon="trash-alt" />
                </div>
              </div>
            </div>
          </sui-accordion-content>
          <sui-accordion-title>
            <sui-icon name="dropdown" />
            <strong>Задачи на будущее</strong>
          </sui-accordion-title>
          <sui-accordion-content>
            <div class="todo-list" v-for="(todo, index) in todoListFuture">
              <div class="todo-item">
                <sui-accordion exclusive>
                  <sui-accordion-title>
                    <span class="icon-done" v-if="todo.done">
                      <font-awesome-icon icon="check" />
                    </span>
                    <span class="icon-done" v-else>
                      <font-awesome-icon icon="times" />
                    </span>
                    <strong>{{todo.text}}</strong>
                  </sui-accordion-title>
                  <sui-accordion-content>
                    <div class="title-strong"><span>{{todo.date}}</span></div>
                    <div class="title-span"><span>{{todo.description}}</span></div>
                  </sui-accordion-content>
                </sui-accordion>
                <div class="icon-remove" @click="removeTodo('todoListFuture', index)">
                  <font-awesome-icon icon="trash-alt" />
                </div>
              </div>
            </div>
          </sui-accordion-content>

          <sui-accordion-title>
            <sui-icon name="dropdown" />
            <strong>Информация о людях</strong>
          </sui-accordion-title>
          <sui-accordion-content>
            <div class="todo-list" v-for="(todo, index) in peopleList">
              <div class="todo-item">
                <sui-accordion exclusive>
                  <sui-accordion-title>
                    <span class="icon-done" v-if="todo.done">
                      <font-awesome-icon icon="check" />
                    </span>
                    <span class="icon-done" v-else>
                      <font-awesome-icon icon="times" />
                    </span>
                    <div>
                      <div class="title-strong"><strong>{{todo.name}}</strong></div>
                      <div class="title-span"><span>{{todo.date}}</span></div>
                    </div>
                  </sui-accordion-title>
                  <sui-accordion-content>
                    <span>{{todo.text}}</span>
                  </sui-accordion-content>
                </sui-accordion>
                <div class="icon-remove" @click="removePeople(index)">
                  <font-awesome-icon icon="trash-alt" />
                </div>
              </div>
            </div>
          </sui-accordion-content>

          <sui-accordion-title>
            <sui-icon name="dropdown" />
            <strong>Настройки</strong>
          </sui-accordion-title>
          <sui-accordion-content>
            <div class="todo-list">
              <div class="todo-item">
                <sui-accordion exclusive>
                  <sui-accordion-title>
                    <div class="settings">
                      <div><span>Изменить язык</span></div>
                      <div><span>Русский</span></div>
                    </div>
                  </sui-accordion-title>
                  <sui-accordion-content>
                    <div><span>Русский</span></div>
                    <div><span>English</span></div>
                  </sui-accordion-content>
                </sui-accordion>

              </div>
              <div class="todo-item">
                <div class="settings">
                  <div><span>Ночная тема</span></div>
                  <sui-checkbox label="" toggle v-model="nightTheme"/>
                </div>
              </div>
              <div class="todo-item">
                <div class="settings">
                  <div><span>Фиолетовый/Зелёный</span></div>
                  <sui-checkbox label="" toggle v-model="greenColor"/>
                </div>
              </div>
            </div>
          </sui-accordion-content>
        </sui-accordion>

      <sui-accordion>
        <sui-accordion-title>
          <sui-icon name="dropdown" />
          <strong>Кино</strong>
        </sui-accordion-title>
        <sui-accordion-content>
          <div class="todo-list" v-for="todo in peopleList">
            <div class="todo-item">
              <sui-accordion exclusive>
                <sui-accordion-title>
                  <div class="title-strong"><strong>{{todo.name}}</strong></div>
                  <div class="title-span"><span>{{todo.date}}</span></div>
                </sui-accordion-title>
                <sui-accordion-content>
                  <span>{{todo.text}}</span>
                </sui-accordion-content>
              </sui-accordion>
            </div>
          </div>
        </sui-accordion-content>
        <sui-accordion-title>
          <sui-icon name="dropdown" />
          <strong>Музыка</strong>
        </sui-accordion-title>
        <sui-accordion-content>
          <div class="todo-list" v-for="todo in peopleList">
            <div class="todo-item">
              <sui-accordion exclusive>
                <sui-accordion-title>
                  <div class="title-strong"><strong>{{todo.name}}</strong></div>
                  <div class="title-span"><span>{{todo.date}}</span></div>
                </sui-accordion-title>
                <sui-accordion-content>
                  <span>{{todo.text}}</span>
                </sui-accordion-content>
              </sui-accordion>
            </div>
          </div>
        </sui-accordion-content>
      </sui-accordion>


      </div>
    </div>
</template>

<script>
  export default {
    name: "CalendarPage",
    data() {
      return {
        // submitButtonText: 'Добавить'
        todoListDay: [],
        todoListWeek: [],
        todoListFuture: [],
        todoWishList: [],
        peopleList: [],
        nightTheme: false,
        greenColor: false
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
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size: x-large;
    color: #9b52d9;
    padding: 10px;
  }
  .todo-list {
    text-align: left;

  }
  .todo-item {
    background-color: #383838;
    margin: 5px;
    padding: 10px;
    display: flex;
    /*align-items: center;*/
  }
  .icon-remove {
    align-self: flex-start;
    margin-left: 10px;
  }
  .icon-remove svg {
    height: 20px !important;
    width: 20px !important;
  }
  .ui.accordion, .ui.accordion .accordion {
    margin: 0;
    width: 100%;
  }
  .accordion .title {
    color: #ffffff !important;
    text-align: left;
    padding-left: 10px !important;
    padding-right: 10px !important;
    display: flex;
    align-items: center;
  }
  .accordion .title .dropdown.icon {
    margin-right: 10px;
  }
  .accordion .content.active {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .todo-item .accordion .title {
    padding: 0 !important;
    width: 100%;
  }
  .todo-item .accordion .content.active {
    padding: .5em 0 !important;
  }

  .title-span {
    font-size: 80%;
    display: block;
  }
  .icon-done {
    margin-right: 10px;
    align-self: flex-start;
  }
  .icon-done svg {
    height: 20px !important;
    width: 20px !important;
  }
  .settings {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
  }
  /*.ui.checkbox label::after {*/
    /*content: '';*/
  /*}*/
  /*.ui.toggle.checkbox input:checked~.box:before,.ui.toggle.checkbox input:checked~label:before {*/
    /*background-color: #9b52d9 !important;*/
  /*}*/

</style>
