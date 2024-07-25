import { createRouter, createWebHistory } from 'vue-router'
import MenuData from '../data/menu.json'

import Index from '../views/index.vue'

const routes:any = [
  { 
    path: '/', component: Index,
    redirect: '/hello',
    children: []
  },
]
routes[0].children.push({
  path: '/hello',
  name: 'Hello',
  component: () => import(`../views/hello.vue`)
})
for(let i = 0; i < Object.values(MenuData).length; i++){
  const item = Object.values(MenuData)[i];
  routes[0].children.push({
    path: item.path,
    name: item.name,
    component: () => import(`../views/${item.type}.vue`)
  })
}
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router