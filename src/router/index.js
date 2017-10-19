import Vue from 'vue'
import Router from 'vue-router'
import accSearch from '../components/accSearch.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/accSearch',
      component:accSearch
    }
  ]
})
