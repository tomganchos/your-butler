import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPlusCircle, faClipboardList, faCalendarAlt, faHeart, faUser, faThumbsUp, faCheckSquare, faTimes,
  faFilm, faTv, faBook, faNewspaper, faMusic, faGamepad, faUtensils, faMapMarkedAlt, faFileAlt,
  faTrashAlt, faCheck, faGlobeEurope, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ru from './lang/ru.js'
import en from './lang/en.js'
import { getLanguage } from './lang'

library.add(faCoffee, faPlusCircle, faClipboardList, faCalendarAlt, faHeart, faUser, faThumbsUp, faCheckSquare, faTimes,
  faFilm, faTv, faBook, faNewspaper, faMusic, faGamepad, faUtensils, faMapMarkedAlt, faFileAlt,
  faTrashAlt, faCheck, faGlobeEurope, faSlidersH );

const messages = {
  en: en,
  ru: ru
}

Vue.component('font-awesome-icon', FontAwesomeIcon);
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
