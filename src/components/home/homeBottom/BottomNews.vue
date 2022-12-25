<template>
  <div class="bottomNews">
    <div class="top">
      <div class="topNews" v-for="( item, i) in form" :key="i">
        <div class="title">{{ item.title }}</div>
        <div class="place" v-for="place in item.place" :key="place">
          <span>{{ place }}</span>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <bottom></bottom>
    </div>
  </div>
</template>
<style lang="less" scoped>
.bottomNews {
  .top {
    padding-left: 50px;
    padding-right: 50px;
    .topNews {
      display: flex;
      flex-wrap: wrap;
      margin: 10px;
      .title {
        margin: 10px;
      }
      .place {
        color: RGB(153, 153, 153);
        margin: 10px;
      }
    }
  }
}
</style>
<script>
import Bottom from '@/components/bottom/Bottom.vue';

export default {
  components: { 
    "bottom" : Bottom, 
  },
  data() {
    return {
      form: [
        {
          title: "酒店",
          place: {
            place1: "酒店川主庙附近的酒店预订",
            place2: "孟屯河谷附近的酒店预订",
            place3: "中查沟附近的酒店预订",
            place4: "坪头羌寨附近的酒店预订",
            place5: "九曲黄河第一湾附近的酒店预订",
            place6: "九寨沟风景区附近的酒店预订",
            place7: "三江生态旅游区附近",
            place8: "九寨黄龙机场附近",
          },
        },
        {
          title: "酒店",
          place: {
            place1: "酒店川主庙附近的酒店预订",
            place2: "孟屯河谷附近的酒店预订",
            place3: "中查沟附近的酒店预订",
            place4: "坪头羌寨附近的酒店预订",
            place5: "九曲黄河第一湾附近的酒店预订",
            place6: "九寨沟风景区附近的酒店预订",
            place7: "三江生态旅游区附近",
            place8: "九寨黄龙机场附近",
          },
        },
      ],
    };
  },
};
</script>