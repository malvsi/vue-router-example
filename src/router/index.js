import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
// import Layout from '@/views/layout'
// import Project from '@/views/backend/project'
// import Doc from '@/views/backend/doc'
// import Workbench from '@/views/backend/workbench'
import Login from '@/components/login'

Vue.use(Router)

// 实现懒加载-->异步加载
let Layout = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/layout'))
  }, 'layout')
}

// require.ensure()第三个参数：‘chunkName’如果相同，那么会把两个js文件合并成同一个文件
let Project = require.ensure([], () => {
  require('@/views/backend/project')
}, 'chunk')

let Workbench = require.ensure([], () => {
  require('@/views/backend/workbench')
}, 'chunk')

let Doc = (resolve) => {
  return import('@/views/backend/doc')
}

let router = new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/managment',
      name: 'Managment',
      component: Layout,
      children: [
        {
          path: '/project',
          name: 'Project',
          component: Project,
          meta: {
            login: true
          }
        },
        {
          path: '/workbench',
          name: 'workbench',
          component: Workbench,
          meta: {
            login: true
          }
        },
        {
          path: '/doc',
          name: 'Doc',
          component: Doc,
          meta: {
            login: false
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  let flag = to.matched.some(item => item.meta.login)
  if (flag) {
    // 判断当前用户是否登陆
    let info = router.app.$local.fetch('miaov')
    if (info.login) {
      next()
    } else {
      router.push({
        path: '/login',
        // 获取当前路由的目标路径，当登陆之后直接进入目标路由
        query: {
          redirect: to.path.slice(1)
        }
      })
    }
  } else {
    next()
  }
})

export default router
