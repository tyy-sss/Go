<template>
    <div>
      <div class="myOrders">
        <div class="tip">
          <span class="title">我的订单</span>
        </div>
        <div class="middle"></div>
      </div>
      <div class="myAccount">
        <div class="tip">
          <span class="title">账号余额</span>
        </div>
        <div class="middle">
          <span></span>
        </div>
      </div>
      <div class="myCard">
        <div class="tip">
          <span class="title">我的礼品卡</span>
        </div>
        <div class="middle">
          <span></span>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { defineComponent } from "@vue/composition-api";
  import holiday from "../showNews/Holiday.vue";
  
  export default defineComponent({
    components: {
      holiday,
    },
    setup() {},
  });
  </script>
  <style scoped>
  .myOrders {
    border: 2px solid RGB(139, 139, 139);
  }
  .tip {
    border-left: 5px solid RGB(0, 136, 164);
    margin: 5px;
  }
  .title {
    font-size: 20px;
    font-family: "Courier New", Courier, monospace;
    margin: 5px;
  }
  </style>
  