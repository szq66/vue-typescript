<template>
  <div class="bg">
    <el-form label-position="left" label-width="0px" class="login-container">
      <div class="title"><el-divider>用户登录</el-divider></div>
      <el-form-item>
        <el-input type="text" prefix-icon="el-icon-user" v-model="user" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" prefix-icon="el-icon-lock" v-model="pwd" auto-complete="off" placeholder="密码" @keyup.enter.native="checkUser"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="checkUser">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="$router.push('/register');">账号注册</el-button>
      </el-form-item>
      <el-form-item>
        <el-link type="info" :underline="false" href="javascript: void(0);">忘记密码？</el-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class  extends Vue {
  private user: string = 'admin';
  private pwd: string = 'admin';
  private checkUser() {
    if (this.user === 'admin' && this.pwd === 'admin') {
      sessionStorage.setItem('token', 'token-fake');
      this.$router.push({path: '/index'});
    } else {
      this.$message.error('账号或密码错误！');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/container.scss";
</style>