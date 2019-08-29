<template>
    <div class="login">
        <div class="login-box">
            <h2>登陆</h2>
            <form @submit.prevent="sendLogin" autocomplete="off">
                <div><input type="text" placeholder="请输入用户名" name="user" ref="userInput"/></div>
                <div><input type="password" placeholder="请输入密码" name="password"/></div>
                <div class="login-btn"><input type="submit" value="一键登入"></div>
            </form>
            <div class="back-index">
                <router-link to="/">首页>>></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    sendLogin () {
      // 登陆
      let userName = this.$refs.userInput.value // 获取用户输入的用户名
      this.$local.save('miaov', { // 把用户存储到local中
        login: true,
        userName: userName
      })

      // 获取来访路由的路径
      let redirect = this.$route.query.redirect

      // 如果是从首页直接登陆的,那么redirect应该为空，并且登陆之后默认到project路由下
      if (!redirect) {
        redirect = 'project'
      }
      this.$router.push({
        path: '/' + redirect
      }
      )
    }
  }
}
</script>

<style>

</style>
