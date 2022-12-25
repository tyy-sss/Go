<template>
  <div id="app">
    <div></div>
  </div>
</template>
<script>
import star from "@/components/common/Star.vue";
export default {
  components: {
    star,
  },
  data() {
    return {
      count: "",
    };
  },
  methods: {
    get() {
      alert(this.count);
    },
  },
};
</script>