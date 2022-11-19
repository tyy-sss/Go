<template>
    <div class="news">
      <div class="tip">
        <span class="title">我的订单</span>
      </div>
      <div class="middle"></div>
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
.news{
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
