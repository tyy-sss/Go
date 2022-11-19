<template>
    <div id="app" class="container-fluid login_container">
      <div class="row">
        <!-- 注册表单区 -->
        <form ref="form" class="show_news from-inline">
          <!-- 标题区 -->
          <div class="form-group">
            <h3 class="text-center text-primary"><i>去哪儿</i></h3>
          </div>
          <!-- 邮箱 -->
          <div class="form-group">
            <label class="form-label">邮箱</label>
            <input
              v-model="forgetpasswordForm.email"
              v-validate="'required|email'"
              name="email"
              type="text"
              class="form-control"
            />
            <div class="showErrorMessage">
              <span>{{ errors.first("email") }}</span>
            </div>
          </div>
          <!-- 验证码 -->
          <div class="form-group">
            <label class="form-label">验证码</label>
            <div class="input-group">
              <input
                v-model="forgetpasswordForm.code"
                v-validate="'required|digits:6'"
                name="code"
                type="text"
                class="form-control col-lg-6"
              />
              <span v-if="isSend" @click="sendemail" class="input-group-text">{{
                yzmtext
              }}</span>
              <span v-if="!isSend" class="input-group-text">{{ yzmtext }}</span>
            </div>
            <div class="showErrorMessage">
              <span>{{ errors.first("code") }}</span>
              <span>{{ sendCodeNews }}</span>
            </div>
          </div>
          <!-- 密码 -->
          <div class="form-group">
            <label class="form-label">密码</label>
            <input
              v-model="forgetpasswordForm.password"
              v-validate="'required|alpha_dash|min:6|max:12'"
              name="password"
              type="password"
              class="form-control"
            />
            <div class="showErrorMessage">
              <span>{{ errors.first("password") }}</span>
            </div>
          </div>
           <!-- 再次输入密码 -->
           <div class="form-group">
            <label class="form-label">再次输入密码</label>
            <input
              v-model="forgetpasswordForm.passwordAgain"
              v-validate="'confirmed:password'"
              name="passwordAgain"
              type="password"
              class="form-control"
            />
            <div class="showErrorMessage">
              <span>{{ errors.first("passwordAgain") }}</span>
            </div>
          </div>
          <!-- 按钮 -->
          <div class="check form-group">
            <!-- 注册 -->
            <button @click="forgetPassword" type="button" class="btn btn-default">
              修改密码
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  import { defineComponent } from "@vue/composition-api";
  
  export default defineComponent({
    data() {
      return {
        forgetpasswordForm: [
          {
            email: null,
            password: null,
            passwordAgain: null,
            code: null,
          },
        ],
        sendCodeNews: null,
        isSend: true,
        yzmtext: "获取验证码",
      };
    },
    setup: {},
    methods: {
      //发送验证码
      sendemail() {
        //判断邮箱是否输入正确
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (!reg.test(this.forgetpasswordForm.email)) {
          this.sendCodeNews = "邮箱错误不能发送验证码";
          return;
        } else {
          this.sendCodeNews = null;
          console.log(this.forgetpasswordForm.email);
          this.$http.get("/user/forgetPasswordSendCode/"+
          this.forgetpasswordForm.email
          ).then((response) =>{
            console.log(response)
            let res = response.data;
            if(res.code == 0){//邮箱没有注册
              this.sendCodeNews = res.msg;
            }else{//邮箱已经注册
              this.isSend = false;
                let time = 60; //倒计时时间
                let timer = setInterval(() => {
                  this.yzmtext =  time + "s后获取验证码";
                  time--;
                  if (time < 0) {
                    this.isSend = true;
                    this.yzmtext = "获取验证码";
                    clearInterval(timer);
                  }
                }, 1000);
            }
          })
        }
      },
      //修改密码
      forgetPassword() {
        this.sendCodeNews = null;
        this.$validator.validate().then((valid) => {
          console.log(valid);
          if (valid) {
            //校验正确，向后端发请求
            this.$http
              .post("/user/forgetPassword", {
                email: this.forgetpasswordForm.email,
                password: this.forgetpasswordForm.password,
                code: this.forgetpasswordForm.code
              })
              .then((response) => {
                console.log(response.data);
                let message = response.data;
                if (message.code == 0) {
                  this.sendCodeNews = message.msg;
                } else {
                  //登录成功，取出token,将token保存在localStorage
                  localStorage.setItem("token", message.data.token);
                  alert("修改密码成功，返回主界面")
                  window.location.href = '/homePage';
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
    bottom: 50px;
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
  .check {
    display: flex;
    justify-content: space-around;
  }
  .btn-default {
    /* 按钮 */
    border: 1px solid black;
  }
  .showErrorMessage {
    font-size: 12px;
    color: red;
    height: 20px;
  }
  .input-group-text{
    width: 150px;
    text-align: center;
  }
  </style>