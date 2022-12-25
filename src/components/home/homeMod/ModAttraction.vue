<template>
  <!-- 低价机票消息展示 -->
  <div class="container">
    <!-- 导航栏 -->
    <div class="row">
      <ul class="nav">
        <li class="nav-item" v-for="(item, i) in form" :key="i">
          <div
            :class="item.id == choose ? 'spanItem' : ''"
            @click="handleChange(item)"
          >
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
    <div class="attraction">
      <div class-="left">
        <hot-attraction v-if="choose === 1"></hot-attraction>
        <cheap-attraction v-else-if="choose === 2"></cheap-attraction>
      </div>
      <div class="right">
        <img onload="banner_home_qingtianzhu1669388879985()" id="banner_home_qingtianzhu_img" border="0" src="https://source.qunarzz.com/site/images/wns/20210319_qunar_dujia_p218x460.jpg">
      </div>
    </div>
  </div>
</template> 
<style lang="less" scoped>
.nav {
  display: flex;
  padding-top: 20px;
  border-bottom: 1px solid RGB(0, 208, 212);
  border-radius: 5px;
  .nav-item {
    margin-right: 20px;
    font-size: 20px;
  }
}
.attraction{
  padding: 10px;
  display: flex;
}
.spanItem {
  border-bottom: 5px solid RGB(0, 208, 212);
}
.container {
  .attraction {
    display: flex;
    justify-content: space-between;
    .attractionNews {
      width: 20%;
      padding-top: 20px;
      background-color: RGB(247, 247, 247);
      .title {
        overflow: hidden;
        font-size: 18px;
      }
      .news {
        display: flex;
        margin-left: 10px;
        .point {
          font-size: 17px;
          color: RGB(0, 208, 212);
        }
        .commint {
          font-size: 12px;
          color: RGB(153, 153, 153);
          display: flex;
          align-items: center;
          margin-left: 20px;
        }
      }
      .price {
        font-size: 20px;
        float: right;
        color: RGB(255, 116, 0);
      }
    }
  }
}
</style>
<script>
import HotAttraction from "./attraction/HotAttraction";
import CheapAttraction from "./attraction/CheapAttraction";
export default {
  data() {
    return {
      choose: 1,
      form: [
        {
          id: 1,
          title: "当季热门度假",
          path: "/hotAttraction",
        },
        {
          id: 2,
          title: "今日特惠度假",
          path: "/cheapAttraction",
        },
      ],
      hotelPrice: [
        {
          img: "https://userimg.qunarzz.com/imgs/202011/24/C.v0fmGwxmDG1a4ehwx480.jpg",
          title: "金百子酒店(广州中山医东山口地铁站店)",
          point: 4.5,
          commint: 637,
          price: 282,
        },
        {
          img: "https://userimg.qunarzz.com/imgs/202011/24/C.v0fmGwxmDG1a4ehwx480.jpg",
          title: "金百子酒店(广州中山医东山口地铁站店)",
          point: 4.5,
          commint: 637,
          price: 282,
        },
        {
          img: "https://userimg.qunarzz.com/imgs/202011/24/C.v0fmGwxmDG1a4ehwx480.jpg",
          title: "金百子酒店(广州中山医东山口地铁站店)",
          point: 4.5,
          commint: 637,
          price: 282,
        },
        {
          img: "https://userimg.qunarzz.com/imgs/202011/24/C.v0fmGwxmDG1a4ehwx480.jpg",
          title: "金百子酒店(广州中山医东山口地铁站店)",
          point: 4.5,
          commint: 637,
          price: 282,
        },
        {
          img: "https://userimg.qunarzz.com/imgs/202011/24/C.v0fmGwxmDG1a4ehwx480.jpg",
          title: "金百子酒店(广州中山医东山口地铁站店)",
          point: 4.5,
          commint: 637,
          price: 282,
        },
      ],
    };
  },
  created() {},
  methods: {
    handleChange(item) {
      this.choose = item.id;
    },
  },
  components: {
    "hot-attraction": HotAttraction,
    "cheap-attraction": CheapAttraction,
  },
};
</script>