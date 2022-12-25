<template>
  <!-- 导航栏 -->
  <div class="nav_bar choose">
    <span
      v-for="(item, i) in navigationBar"
      :key="i"
      :class="item.type == navHeader ? 'spanItem' : ''"
      @click="changeHeader(item)"
    >
      {{ item.title }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationBar: [
        { title: "首页", type: "home" },
        { title: "机票", type: "ticket" },
        { title: "酒店", type: "hotel" },
        { title: "火车票", type: "train" },
        { title: "高铁票", type: "railway" },
        { title: "度假", type: "attraction" },
      ],
      navHeader: "home",
    };
  },
  methods: {
    changeHeader(item) {
      this.navHeader = item.type;
      //FIXME:此处进行判断进行一个 路由跳转
      this.$router.push(item.type)
    },
  },
};
</script>

<style lang="less" scoped>
.choose {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: RGB(0,208,212);
  span {
    margin: 15px;
    font-size: 20px;
  }
}
.spanItem {
  width: auto;
  height: 34px;
  text-align: center;
  line-height: 34px;
  margin-top: 3px;
  background: linear-gradient(-26deg, #56b1ff, #48fffd);
  border-radius: 20px;
  font-size: 20px;
  font-family: AliHYAiHei;
  font-style: italic;
  color: #ffffff;
  text-shadow: 0px 1px 3px rgba(9, 26, 41, 0.32);
}
</style>