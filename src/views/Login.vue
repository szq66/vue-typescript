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
        <el-button type="primary" style="width:100%;" @click.native.prevent="checkUser">登录</el-button>
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
  private isCollapse: boolean = false;
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
@keyframes gradientBG {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}
div.bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  .login-container {
    -webkit-border-radius: 25px;
    border-radius: 25px;
    -moz-border-radius: 25px;
    background-clip: padding-box;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      color: #505458;
      .el-divider__text {
        font-size: 24px;
        letter-spacing: 5px;
      }
    }
    .el-input /deep/ .el-input__prefix {
      margin-left: 2px;
      font-size: 18px;
    }
    .el-input /deep/ .el-input__inner, .el-button {
      border-radius: 25px;
      font-size: 24px;
    }
  }
}
</style>