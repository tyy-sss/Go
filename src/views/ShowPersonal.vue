<template>
  <div class="app">
    <common-header></common-header>
    <personal-navigation></personal-navigation>
    <router-view></router-view>
    <hr>
    <bottom></bottom>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import CommonHeader from "@/components/common/CommonHeader";
import PersonalNavigation from "@/components/personal/common/PersonalNavigation";
import Bottom from "@/components/bottom/Bottom.vue";

export default defineComponent({
  setup() {},
  components: {
    "common-header": CommonHeader,
    "personal-navigation": PersonalNavigation,
    "bottom": Bottom,
  },
})
    Bottom;
</script>
