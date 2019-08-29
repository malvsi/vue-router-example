<template>
    <div calss='main'>
        <div class="home-header">
            <img src="../assets/miaov.png" alt="">
            <div class="portrait" :class="{portraitLogin: isLogin}">
                <router-link v-if='!isLogin' to='/login' tag='span'>登陆</router-link>
                <img v-if="isLogin" src="../assets/portrait.png" alt="">
            </div>
        </div>
        <div class="phrase">
            一起学习Vue-router
        </div>
        <div class="btns">
            <router-link to="/project" tag='div' class="trans">我的项目</router-link>
            <router-link to="/doc" tag='div' class="trans">我的文档</router-link>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: false
    }
  },
  created () {
    let isLogin = this.$local.fetch('miaov').login
    this.isLogin = isLogin
  }
}
</script>

<style>

</style>
