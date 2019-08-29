<template>
    <div>
        <custom-nav></custom-nav>
        <div class="breadcrumb">
            <router-link to='/'>首页</router-link>
            /
            <span :style="{color: '#97a8be'}">{{ flag }}</span>
        </div>
        <transition name='fade' mode='out-in'>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Custom from '@/components/custom'
let flags = {
  project: '我的项目',
  workbench: '工作台',
  doc: '文档'
}
export default {
  data () {
    return {
      flag: '' // 面包屑导航
    }
  },
  components: {
    'custom-nav': Custom
  },
  beforeRouteEnter (to, from, next) { // 进入路由之前获取面包屑导航的路径
    next((vm) => {
      vm.flag = flags[to.path.slice(1)]
    })
  },
  watch: {
    $route () {
      this.flag = flags[this.$route.path.slice(1)]
    }
  }
}
</script>

<style>

</style>
