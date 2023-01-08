<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="name"
              required
              lay-verify="required"
              placeholder="请输入用户名"
              v-modela.trim="name"
              v-validate="'required|email'"
              autocomplete="off"
              class="layui-input"
              v-model="name"
            />
          </div>
          <div class="error layui-form-mid">
            {{ errors.first('name') }}
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password"
              required
              lay-verify="required"
              placeholder="请输入密码"
              v-modela.trim="password"
              v-validate="'required|min:6'"
              autocomplete="off"
              class="layui-input"
              v-model="password"
            />
          </div>
          <div class="error layui-form-mid">
            {{ errors.first('password') }}
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="code"
              required
              lay-verify="required"
              placeholder="请输入验证码"
              v-validate="'required|length:4'"
              autocomplete="off"
              class="layui-input"
              v-model.trim="code"
            />
          </div>
           <div class="error layui-form-mid">
            {{ errors.first('code') }}
          </div>
          <div
            class="layui-form-mid svg"
            v-html="svg"
            @click="getCaptcha"
          ></div>
        </div>
        <button type="button" class="layui-btn">立即登录</button>
        <a class="forget-link" href="">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errorMsg: [],
    };
  },
  mounted() {
    this.getCaptcha();
  },
  methods: {
    getCaptcha() {
      axios.get('http://localhost:3000/api/getCaptcha').then((res) => {
        console.log(res);
        if (res?.status === 200 && res?.data?.code === 200) {
          this.svg = res.data.data;
        }
      });
    },
    checkForm() {
      this.errorMsg = [];
      if (!this.name) {
        this.errorMsg.push('登录密码为空！');
      }
      if (!this.password) {
        this.errorMsg.push('密码为空！');
      }
      if (!this.code) {
        this.errorMsg.push('验证码为空！');
      }
    },
  },
};
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

.svg {
  position: relative;
  top: -15px;
  cursor: pointer;
}

.error {
  color: red;
}
</style>
