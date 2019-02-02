// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'


import 'semantic-ui-css/semantic.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPlusCircle, faClipboardList, faCalendarAlt, faHeart, faUser, faThumbsUp, faCheckSquare, faTimes,
  faFilm, faBook, faNewspaper, faMusic, faGamepad, faUtensils, faMapMarkedAlt, faFileAlt,
  faTrashAlt, faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faPlusCircle, faClipboardList, faCalendarAlt, faHeart, faUser, faThumbsUp, faCheckSquare, faTimes,
  faFilm, faBook, faNewspaper, faMusic, faGamepad, faUtensils, faMapMarkedAlt, faFileAlt,
  faTrashAlt, faCheck);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(SuiVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
