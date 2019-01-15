import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddPage from "@/components/AddPage"
import TodayPage from "@/components/TodayPage"
import CalendarPage from "@/components/CalendarPage"
import AddTodo from "../components/AddTodo";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
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
      path: '/calendar',
      name: 'CalendarPage',
      component: CalendarPage
    },
    {
      path: '/add-todo',
      name: 'AddTodo',
      component: AddTodo
    }
  ]
})
