<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text" name="title" required  lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="title" required  lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="title" required  lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-form-mid" v-html="svg"></div>
        </div>
        <button type="button" class="layui-btn">立即登录</button>
        <a class="forget-link" href="">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      svg: ''
    }
  },
  mounted () {
    axios.get('http://localhost:3000/api/getCaptcha').then(res => {
      console.log(res)
      if (res?.status === 200 && res?.data?.code === 200) {
        this.svg = res.data.data
      }
    })
  }
}
</script>
<style lang="scss" scoped>
#app {
  background-color: #f2f2f2;
}
.layui-container {
  background: #fff;
}

.layui-form-pane {
  margin: 0 12px;
}

input {
  width: 190px;
}

.forget-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
</style>
