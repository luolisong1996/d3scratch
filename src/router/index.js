import Vue from 'vue'
import VueRouter from 'vue-router'
import hello from '../components/HelloWorld.vue'
import menus from '../config/menu-config'
import BasicContainer from '../components/BasicContainer.vue'
import BasicLayout from '../components/BasicLayout.vue'

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes:[{
      path: '/BasicContainer',
      component: BasicContainer
    },{
      path: '/BasicLayout',
      component: BasicLayout
    }
  ]
})
// var routes = []
// console.log(menus)
// menus.forEach((item) => {
//   item.sub.forEach((sub) => {
//     routes.push({
//       path: `/${sub.componentName}`,
//       name: sub.componentName,
//       component: () => import(`@/components/${sub.componentName}`)
//     })
//   })
// })

export default router
// export default new Router({ routes })