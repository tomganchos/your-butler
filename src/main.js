// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPlusCircle, faClipboardList, faCalendarAlt, faHeart, faUser, faThumbsUp, faCheckSquare, faTimes,
  faFilm, faBook, faNewspaper, faMusic, faGamepad, faUtensils, faMapMarkedAlt, faFileAlt,
  faTrashAlt, faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faPlusCircle, faClipboardList, faCalendarAlt, faHeart, faUser, faThumbsUp, faCheckSquare, faTimes,
  faFilm, faBook, faNewspaper, faMusic, faGamepad, faUtensils, faMapMarkedAlt, faFileAlt,
  faTrashAlt, faCheck);

const messages = {
  en: {
    'add-page': {
      'header': 'Adding',
      'adding-task': 'Adding a task',
      'adding-task-description': 'TODO for the day / week / future. Adding subtasks'
    }
  },
  ru: {
    'add-page': {
      'header': 'Добавление',
      'adding-task': 'Добавление задачи',
      'adding-task-description': 'TODO на день, неделю, на будущее. Добавление подзадач'
    }
  }
}

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(require('vue-moment'));
Vue.use(VueI18n)

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: 'ru',
  messages
})

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
