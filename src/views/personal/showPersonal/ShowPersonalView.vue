<template>
  <div class="app">
    <tip></tip>
    <personalTip></personalTip>
    <router-view></router-view>
  </div>
</template>
  
<script>
// 使用头像上传组件
import myUpload from "vue-image-crop-upload";
import tip from "@/components/TipSearch.vue";
import personalTip from "@/components/PersonalTip.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "my-upload": myUpload,
    tip,
    personalTip,
  },
};
</script>
  