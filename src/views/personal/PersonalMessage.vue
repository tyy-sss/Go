<template>
    <div class="personalNews">
      <div class="row">
          <div class="person">
              <personal-news></personal-news>
          </div>
      </div>
    </div>
  </template>
  <script>
import PersonalNews from '@/components/personal/common/PersonalNews.vue';
  export default {
      components: {
          "personal-news" :  PersonalNews,
      }
  };
  </script>
  <style lang="less" scoped>
  </style>