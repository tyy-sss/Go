<template>
  <!-- 导航栏 -->
  <div class="show">
    <div class="item">
      <img src="@/assets/picture/homePageTop.png" width="136px" height="54px" />
    </div>
    <div class="nav_bar item choose">
      <span
        v-for="(item, i) in navigationBar"
        :key="i"
        :class="item.type === navHeader ? 'spanItem' : ''"
        @click="changeHeader(item)"
      >
        {{ item.title }}
      </span>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      navigationBar: [
        { title: "个人信息", type: "personalNews" },
        { title: "账号设置", type: "accountSeting" },
        // { title: "我的账号", type: "account" },
        { title: "消息", type: "personalMessage" },
      ],
      navHeader: 'showPersonal/personalNews',
    };
  },
  methods: {
    changeHeader(item) {
      this.navHeader = item.type;
      //FIXME:此处进行判断进行一个 路由跳转
      this.$router.push(this.navHeader);
    },
  },
};
</script>
  
  <style lang="less" scoped>
.show {
  display: flex;
  border-bottom: 2px solid RGB(0, 208, 212);
  .item {
    display: flex;
    align-items: center;
    margin-left: 100px;
    span {
      font-size: 20px;
      margin-left: 20px;
      margin-top: 15px;
    }
  }
}

.spanItem {
  font-family: AliHYAiHei;
  font-style: italic;
  color: RGB(0, 208, 212);
  text-shadow: 0px 1px 3px rgba(9, 26, 41, 0.32);
}
</style>