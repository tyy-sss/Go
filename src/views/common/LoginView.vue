<template>
  <div id="app" class="container-fluid login_container">
    <div class="row">
      <!-- 左边照片区 -->
      <div class="show_news">
        <img class="img-thumbnail" src="../../assets/picture/01.jpg" />
      </div>
      <!-- 登录表单区 -->
      <form ref="form" class="show_news from-inline">
        <!-- 标题区 -->
        <div class="form-group">
          <h3 class="text-center text-primary"><i>去哪儿</i></h3>
        </div>
        <!-- 用户名 -->
        <div class="form-group">
          <label class="form-label">邮箱</label>
          <input
            v-model="loginForm.email"
            v-validate="'required|email'"
            name="email"
            type="text"
          />
          <div class="showErrorMessage">
            <span>{{ errors.first("email") }}</span>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">密码</label>
          <input
            v-model="loginForm.password"
            v-validate="'required|alpha_dash|min:6|max:12'"
            name="password"
            type="password"
          />
          <div class="showErrorMessage">
            <span>{{ errors.first("password") }}</span>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="check form-group">
          <!-- 登录 -->
          <button @click="login" type="button" class="btn btn-default">
            登录
          </button>
          <button @click="reset" class="btn btn-default">重置</button>
        </div>
        <div class="bottom">
          <!-- 注册 -->
          <router-link :to="{ path: '/register' }">注册</router-link>
          <!-- 忘记密码 -->
          <router-link :to="{ path: '/forgetpassword' }"
            >忘记密码？</router-link
          >
        </div>
      </form>
    </div>
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  data() {
    return {
      loginForm: [
        {
          email: null,
          password: null,
        },
      ],
    };
  },
  setup: {},
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    login() {
      this.$validator.validate().then((valid) => {
        console.log(valid);
        if (valid) {
          //校验正确，向后端发请求
          this.$http
            .post("/user/login", {
              email: this.loginForm.email,
              password: this.loginForm.password,
            })
            .then((response) => {
              console.log(response.data);
              let message = response.data;
              if (message.code == 0) {
                alert(message.msg);
              } else {
                //登录成功，取出token,将token保存在localStorage
                localStorage.setItem("token", message.data.token);
                console.log(message.data)
                localStorage.setItem("user",JSON.stringify(message.data));
                alert("登录成功,返回主界面");
                window.location.href = "/home";
              }
            });
        }
      });
    },
  },
});
</script>
<style scoped>
.container-fluid {
  width: 100%;
  height: 100%;
  background-size: auto;
}
/* 显示的盒子 */
.row {
  border: 3px inset RGB(152, 191, 33);
  padding: 10px;
}
/* 将内容设置在正中心 */
.row,
.container-fluid {
  /* 设置成flex容器 */
  display: flex;
  /* 按行排 */
  flex-direction: row;
  /* 居中显示 */
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
}
/* check是按钮 form-group是表单 */
.row,
.check,
.bottom {
  display: flex;
  justify-content: space-around;
}
/* 图片显示 */
.img-thumbnail {
  /* 图片 */
  height: 100%;
  width: 180px;
}
/* 输入框和显示 */
.show_news {
  /* 输入框 */
  flex: 2;
  display: inline-block;
  vertical-align: middle;
}
/* bottom底部跳转链接 */
.form-group,
.check,
.bottom {
  padding-top: 15px;
}
.btn-default {
  /* 按钮 */
  border: 1px solid black;
}
/* 显示效验提示 */
.showErrorMessage {
  font-size: 10px;
  color: red;
  height: 20px;
  width: 180px;
}
</style>