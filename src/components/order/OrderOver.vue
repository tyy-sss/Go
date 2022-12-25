<template>
  <div class="order">
    <div class="orderNews">
      <div class="left">
        <div class="leftImg">
          <img src="@/assets/picture/pay.png" width="150px" height="150px" />
        </div>
        <div class="rightNews">
          <div class="title"><span> 订单提交成功！去付款 </span></div>
          <span>请在 {{ time }} 分钟内完成支付,超时后将取消订单</span>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <span class="title">应付金额：</span>
          <span style="color: red">{{ order.total }}元</span>
        </div>
        <div class="modOrder">
          <span>订单详情</span>
          <div class="item">
            <span>订单编号：</span>
            <span>{{ order.code }}</span>
          </div>
          <div class="item">
            <span>商家名称：</span>
            <span>{{ order.businessName }}</span>
          </div>
          <div class="item" v-if="this.order.businessPlace !== null">
            <span>商家地址：</span>
            <span>{{ order.businessPlace }}</span>
          </div>
          <div class="item" v-if="this.order.goodsName !== null">
            <span>商品名称：</span>
            <span>{{ order.goodsName }}</span>
          </div>
          <div class="item" v-if="this.order.startPlace !== null">
            <span>出发地址：</span>
            <span>{{ order.startPlace }}</span>
          </div>
          <div class="item" v-if="this.order.endPlace !== null">
            <span>到达地址：</span>
            <span>{{ order.endPlace }}</span>
          </div>
          <div class="item">
            <span>开始时间：</span>
            <span>{{ formatDateOne(order.startTime) }}</span>
          </div>
          <div class="item">
            <span>结束时间：</span>
            <span>{{ formatDateOne(order.endTime) }}</span>
          </div>
          <div class="item">
            <span>商品数量：</span>
            <span>{{ order.goodsNum }}</span>
          </div>
          <div class="item">
            <span>商品单价：</span>
            <span>{{ order.goodsPrice }}元</span>
          </div>
          <div class="item">
            <span>商品结算价格：</span>
            <span>{{ order.actualPrice }}元</span>
          </div>
          <div class="item">
            <span>总价：</span>
            <span>{{ order.total }}元</span>
          </div>
          <div class="item">
            <span>联系人姓名：</span>
            <span>{{ order.userName }}</span>
          </div>
          <div class="item">
            <span>联系人电话：</span>
            <span>{{ order.userPhone }}</span>
          </div>
          <div class="item">
            <span>下单时间：</span>
            <span>{{ formatDate(order.orderTime) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pay">
      <pay :id="id"></pay>
    </div>
  </div>
</template>
<style lang="less" scoped>
.order {
  .orderNews {
    display: flex;
    padding: 20px;
    border: 1px solid black;
    margin: 20px;
    .left {
      display: flex;
      .rightNews {
        margin: 20px;
        .title {
          font-size: 20px;
          font-weight: bold;
          margin: 10px;
        }
      }
    }
    .right {
      margin-left: 60px;
      .top {
        margin: 5px;
        .title {
          font-size: 20px;
          font-weight: bold;
        }
      }
      .modOrder {
        .item {
          padding-left: 20px;
          margin: 5px;
        }
      }
    }
  }
}
</style>
<script>
import Pay from "./pay/Pay";
export default {
  data() {
    return {
      time: 30,
      order: {
        actualPrice: "",
        total: "",
        code: "",
        businessName: "",
        businessPlace: "",
        goodsName: "",
        goodsNum: "",
        goodsPrice: "",
        startTime: "",
        endTime: "",
        userName: "",
        userPhone: "",
        orderTime: "",
      },
      id:"",
    };
  },
  components: {
    pay: Pay,
  },
  created() {
    this.getOrderNews();
    this.getTime(this.time);
  },
  methods: {
    //得到订单的具体消息
    getOrderNews() {
      this.id = this.$route.query.id;
      this.$http.get("/order/getOrderNews/" + this.id).then((response) => {
        console.log(response);
        this.order = response.data.data;
      });
    },
    //格式化时间
    formatDate(time) {
      let date = new Date(new Date(time).getTime() + 8 * 3600 * 1000);
      date = date.toJSON();
      date = date.substring(0, 19).replace("T", " ");
      return date;
    },
    //格式化开始时间
    formatDateOne(time) {
      let date = new Date(new Date(time).getTime() + 8 * 3600 * 1000);
      date = date.toJSON();
      date = date.substring(0, 10);
      return date;
    },
  },
};
</script>