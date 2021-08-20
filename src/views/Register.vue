<template>
  <div class="bg">
    <el-form label-position="left" label-width="0px" class="login-container">
      <div class="title"><el-divider>用户注册</el-divider></div>
      <el-form-item>
        <el-input type="text" prefix-icon="el-icon-user" v-model="user" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" prefix-icon="el-icon-lock" v-model="pwd" auto-complete="off" placeholder="密码" @keyup.enter.native="checkUser"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" prefix-icon="el-icon-mobile-phone" v-model="phone" auto-complete="off" placeholder="手机号" @keyup.enter.native="checkUser"></el-input>
      </el-form-item>
      <el-form-item class="code">
        <el-input type="text" prefix-icon="el-icon-chat-dot-square" maxlength="12" v-model="code" auto-complete="off" placeholder="验证码"></el-input>
        <el-button type="text" class="code-btn" @click.native.prevent="getCode" :disabled="!show">
          <span v-show="show">获取验证码</span>
          <span v-show="!show">{{count}}s 后再试</span>
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="checkUser">注册</el-button>
      </el-form-item>
      <el-form-item>
        <el-link type="info" :underline="false" href="/#/login">返回登录</el-link>
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
  private user: string = '';
  private pwd: string = '';
  private phone: string = '';
  private code: string = '';
  private show: boolean = true;
  private count: any = '';
  private timer: any = null;
  private checkUser() {
    if (this.user && this.pwd) {
      this.$message.success('注册成功！');
    } else {
      this.$message.error('请填写完整！');
    }
  }
  private getCode() {
    if (!this.timer) {
        this.count = 60;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= 60) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/container.scss";
</style>