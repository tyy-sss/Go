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
            <router-link v-if="login === 0" :to="{ path: '/login' }"
              >登录</router-link
            >
            <router-link v-else-if="login === 1" :to="{ path: '/showPersonal' }"
              >去哪儿用户</router-link
            >
          </li>
          <li class="split show">
            <router-link v-if="login === 0" :to="{ path: '/register' }"
              >注册</router-link
            >
            <span v-else-if="login === 1" @click="exit" style="margin-right: 10px"
              >退出</span>
          </li>
          <li class="split">
            <img class="img-show" src="@/assets/picture/massage.png" />
            <router-link :to="{ path: '/register' }">消息</router-link>
          </li>
          <li class="split">
            <img class="img-show" src="@/assets/picture/资讯.png" />
            <router-link :to="{ path: '/register' }">查看订单</router-link>
          </li>
          <li class="split">
            <img class="img-show" src="@/assets/picture/积分.png" />
            <router-link :to="{ path: '/register' }">积分商城</router-link>
          </li>
          <li class="split">
            <img class="img-show" src="@/assets/picture/icon_serve.png" />
            <router-link :to="{ path: '/chat' }">联系客服</router-link>
          </li>
          <li>
            <img class="img-show" src="@/assets/picture/微信.png" />
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
      login: 0,
    };
  },
  created: function () {
    if (token != null) {
      this.login = 1;
    }
  },
  methods: {
    exit() {
      window.localStorage.removeItem("token");
      this.login = 0;
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
  