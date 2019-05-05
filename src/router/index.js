import Vue from 'vue'
import VueRouter from 'vue-router'
import hello from '../components/HelloWorld.vue'
import menus from '../config/menu-config'
import BasicContainer from '../components/BasicContainer.vue'
import BasicLayout from '../components/BasicLayout.vue'
import FormCheckBox from '../components/FormCheckBox.vue'
import Atree from '../components/Atree.vue'
import TheMap from '../components/TheMap.vue'
import particle from '../components/particle.vue'
import senbosch from '../components/senbosch.vue'
import skillmap from '../components/skillmap.vue'
import Stringfigure from '../components/Stringfigure.vue'
import packaging from '../components/packaging.vue'
import treemap from '../components/treemap.vue'
import rose from '../components/rose.vue'

import DragDrop from '../components/daohang/DragDrop.vue'
// rose
Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes:[{
      path: '/BasicContainer',
      component: BasicContainer
    },{
      path: '/BasicLayout',
      component: BasicLayout
    },{
      path: '/FormCheckBox',
      component: FormCheckBox
    },{
      path: '/Atree',
      component: Atree
    },{
      path: '/TheMap',
      component: TheMap
    },{
      path: '/particle',
      component: particle
    },{
      path: '/senbosch',
      component: senbosch
    },{
      path: '/skillmap',
      component: skillmap
    },{
      path: '/Stringfigure',
      component: Stringfigure
    },{
      path: '/packaging',
      component: packaging
    },{
      path: '/treemap',
      component: treemap
    },{
      path: '/rose',
      component: rose
    },{
      path: '/DragDrop',
      component: DragDrop
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