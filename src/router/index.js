import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/Todos'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/todo/:id',
      name: 'todo',
      component: Todo
    }
  ]
})
