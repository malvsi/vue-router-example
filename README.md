# 知识点
> 获取当前路由的实例对象
``` bash
let _this = router.app
```
> 自定义插件
``` bash
## 定义插件源对象
let custom = {
    save(key, value) {
        localStorage.setItem(key,JSON.stringfy(value))
    },
    fetch(key) {
        return JSON.parse(localStorage.getItem(key)) || {}
    }
}
## 装载为插件
let local = {
    install: (vm) => {
        vm.prototype.$local = custom
    }
}
## 使用插件
Vue.use(local)
```
> 获取当前路由的路径
``` bash
let path = this.$route.path 
```
## 按需加载组建的方法
> 第一种
``` bash
let App = () => import('@/components/App.vue')
```
> 第二种
```bash
let App = resolve => require.ensure([], ()=> resolve(require('@/components/App')),'chunkName')
```
> 第三种
```bash
let router = new Router({
    routes: [
        {
            path: '/app',
            name: 'App',
            component: resolve => require(['@/components/App'],resole)
        }
    ]
})
```

# vue-router-example

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
