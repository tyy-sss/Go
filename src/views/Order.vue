<template>
  <div class="order">
    <common-header></common-header>
    <router-view></router-view>
  </div>
</template>
<script>
import CommonHeader from "@/components/common/CommonHeader";

export default {
  components: {
    "common-header": CommonHeader,
  },
};
</script>
<style lang="less" scoped>
.order {
  background-color: RGB(247, 247, 247);
  height: 100%;
}
</style>