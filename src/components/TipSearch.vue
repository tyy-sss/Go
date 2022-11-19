<!-- 头部搜索组件 -->
<template>
  <div class="tip">
    <!-- 头部信息和搜索框 -->
    <div class="container">
      <!-- 登录展示栏 -->
      <div class="showChoose">
        <ul class="choose">
          <li class="split">
            <a>适老化及无障碍</a>
          </li>
          <li>
            <router-link :to="{ path: login }">{{ loginOrUser }}</router-link>
          </li>
          <li class="split show">
            <span @click="exit" color="RGB(13,110,253)"
              >{{ RegisterOrExit }}&emsp;</span
            >
          </li>
          <li class="split">
            <img class="img-show" src="../assets/picture/massage.png" />
            <router-link :to="{ path: '/register' }">消息</router-link>
          </li>
          <li class="split">
            <img class="img-show" src="../assets/picture/资讯.png" />
            <router-link :to="{ path: '/register' }">查看订单</router-link>
          </li>
          <li class="split">
            <img class="img-show" src="../assets/picture/积分.png" />
            <router-link :to="{ path: '/register' }">积分商城</router-link>
          </li>
          <li class="split">
            <img class="img-show" src="../assets/picture/icon_serve.png" />
            <router-link :to="{ path: '/register' }">联系客服</router-link>
          </li>
          <li>
            <img class="img-show" src="../assets/picture/微信.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

const token = localStorage.getItem("token");

export default defineComponent({
  setup() {},
  data() {
    return {
      loginOrUser: "登录",
      RegisterOrExit: "注册",
      login: "/login",
    };
  },
  created: function () {
    if (token != null) {
      //登录
      this.loginOrUser = "去哪儿用户";
      this.RegisterOrExit = "退出";
      this.login = "/showPersonal";
    }
  },
  methods: {
    exit() {
      if (token != null || token != "") {
        console.log("退出");
        window.localStorage.removeItem("token");
        this.loginOrUser = "登录";
        this.RegisterOrExit = "注册";
        this.login = "/login";
      } else {
        window.location.href = "/register";
      }
    },
  },
});
</script>
<style scoped>
/* 设置头部选择栏 */
.choose {
  height: 32px;
  margin-top: 5px;
}
.choose li {
  display: inline;
  margin: 5px;
}
.choose a {
  text-decoration: none;
  padding: 10px;
}
/* 头部的图片 */
.img-show {
  width: 30px;
  height: 30px;
}
/* 分割线 */
.split {
  border-right: 1px solid black;
}
/* 设置到最左的位置 */
.showChoose {
  display: flex;
  justify-content: flex-end;
}
.show {
  color: RGB(13, 110, 253);
}
</style>
