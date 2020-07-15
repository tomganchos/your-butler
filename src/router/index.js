import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddPage from "@/components/AddPage"
import TodayPage from "@/components/TodayPage"
import CalendarPage from "@/components/CalendarPage"
import AddTodo from "@/components/AddTodo"
import TodoItem from "@/components/TodoItem";
import AddWishList from "@/components/AddWishList";
import AddPeople from "@/components/AddPeople";
import AddNewWord from "@/components/AddNewWord";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/add',
      name: 'AddPage',
      component: AddPage
    },
    {
      path: '/',
      name: 'TodayPage',
      component: TodayPage
    },
    {
      path: '/task/:id',
      name: 'TodoItem',
      component: TodoItem
    },
    {
      path: '/calendar',
      name: 'CalendarPage',
      component: CalendarPage
    },
    {
      path: '/add-todo',
      name: 'AddTodo',
      component: AddTodo
    },
    {
      path: '/add-wishlist',
      name: 'AddWishList',
      component: AddWishList
    },
    {
      path: '/add-people',
      name: 'AddPeople',
      component: AddPeople
    },
    {
      path: '/add-new-word',
      name: 'AddNewWord',
      component: AddNewWord
    }
  ]
})
