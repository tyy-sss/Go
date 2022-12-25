<template>
  <!-- 低价机票消息展示 -->
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
    <div class="ticket">
      <!-- 显示机票消息 -->
      <div class="ticketNews" v-for="(item, i) in ticketPrice" :key="i">
        <div class="showPlace">
          <span>{{ item.startPlace }}</span>
          <span> to </span>
          <span>{{ item.endPlace }}</span>
        </div>
        <div class="showTime">
          <span>{{ formatDate(item.startTime) }}</span>
          <span> to </span>
          <span>{{ formatDate(item.endTime) }}</span>
        </div>
        <div class="price">
          <span class="showPrice">￥{{ item.price }}</span>
          <button type="button" class="btn btn-warning" @click="orderTicket(item.id)">
            立抢
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  padding: 10px;
  .ticket {
    display: flex;
    justify-content: space-between;
    .ticketNews {
      width: 20%;
      padding: 20px;
      background-color: RGB(247, 247, 247);
      .showPlace {
        font-size: 18px;
        color: RGB(0, 82, 136);
        margin: 10px;
      }
      .price {
        margin: 10px;
        .showPrice {
          font-size: 20px;
          color: RGB(255, 116, 0);
        }
        .btn {
          float: right;
        }
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
          title: "国内低价机票",
          path: "/",
        },
      ],
      ticketPrice: [
        {
          startPlace: "北京",
          endPlace: "澳门",
          startTime: "12月22日",
          endTime: "12月27日",
          price: 852,
        },
        {
          startPlace: "北京",
          endPlace: "澳门",
          startTime: "12月22日",
          endTime: "12月27日",
          price: 852,
        },
        {
          startPlace: "北京",
          endPlace: "澳门",
          startTime: "12月22日",
          endTime: "12月27日",
          price: 852,
        },
        {
          startPlace: "北京",
          endPlace: "澳门",
          startTime: "12月22日",
          endTime: "12月27日",
          price: 852,
        },
        {
          startPlace: "北京",
          endPlace: "澳门",
          startTime: "12月22日",
          endTime: "12月27日",
          price: 852,
        },
      ],
    };
  },
  created() {
    this.getTicketList();
  },
  methods: {
    //点击机票
    orderTicket(id) {
      alert(id);
      let routeData = this.$router.resolve({
        path: "/order/ticket",
        query: { id: id },
      });
      window.open(routeData.href, "_blank");
    },
    //获得推荐机票的数据
    getTicketList() {
      this.$http.get("/ticket/adviceTicket/" + 5).then((response) => {
        console.log(response, "hotel");
        const list = response.data.data;
        this.ticketPrice = list;
      });
    },
    // 格式化时间
    formatDate(time) {
      let date = new Date(new Date(time).getTime() + 8 * 3600 * 1000);
      date = date.toJSON();
      date = date.substring(5, 10);
      return date;
    },
  },
};
</script>