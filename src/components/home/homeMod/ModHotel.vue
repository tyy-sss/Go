<template>
  <!-- 消息展示 -->
  <div class="container">
    <!-- 导航栏 -->
    <div>
      <ul class="nav flex-column">
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
    <div class="ticket row">
      <!-- 显示酒店消息 -->
      <div
        class="ticketNews col-md-12"
        @click="checkHotel(item.id)"
        v-for="(item, i) in hotelPrice"
        :key="i"
      >
        <div class="Img">
          <img :src="item.img" height="220px" width="230px" />
        </div>
        <div class="title">
          <span>{{ item.name }}</span>
        </div>
        <div class="news">
          <span class="point">{{ item.point }}分</span>
          <span class="commint">{{ item.commentNum }}条评论</span>
        </div>
        <div class="price">
          <span>￥{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template> 
<style lang="less" scoped>
.container {
  .ticket {
    display: flex;
    justify-content: space-between;
    .ticketNews {
      width: 18%;
      padding-top: 20px;
      background-color: RGB(247, 247, 247);
      margin-right: 10px;
      white-space: normal;
      word-break: break-all;
      overflow: hidden;
      .title {
        overflow: hidden;
        text-overflow: ellipsis; //超出部分以省略号显示
        white-space: nowrap;
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
.nav {
  border-bottom: 1px solid RGB(0, 208, 212);
  padding: 10px;
  border-radius: 5px;
  .nav-item {
    font-size: 20px;
    color: #000;
  }
}
</style>
  <script>
export default {
  data() {
    return {
      choose: 1,
      form: [
        {
          id: 1,
          title: "酒店推荐",
          path: "/",
        },
      ],
      hotelPrice: [],
    };
  },
  created() {
    this.getHotelList();
  },
  methods: {
    //点击酒店
    checkHotel(id) {
      let routeData = this.$router.resolve({
        path: "/check/hotel",
        query: { id: id },
      });
      window.open(routeData.href, "_blank");
    },
    //获得推荐酒店的数据
    getHotelList() {
      this.$http.get("/hotel/adviceHotel/" + 10).then((response) => {
        console.log(response, "hotel");
        const list = response.data.data;
        this.hotelPrice = list;
      });
    },
  },
};
</script>