<template>
  <div class="order">
    <div class="top">
      <ul class="nav" v-for="(item, i) in order" :key="i">
        <li
          class="nav-item"
          :class="choose == item.id ? 'spanItem' : ''"
          @click="change(item)"
        >
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="mod">
      <div class="time">
        <div class="item">
          <div>时间</div>
        </div>
        <div class="item">
          <input type="date" v-model="time" @change="changeOrder" />
        </div>
      </div>
      <div id="showOrder" style="display: none" class="showOrder">
        <table class="table table-hover table-success">
          <thead class="thead-default">
            <tr>
              <th>标号</th>
              <th>订单编号</th>
              <th>订单时间</th>
              <th>支付方式</th>
              <th>总价</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in orderList"
              :key="index"
              @click="checkOrder(item)"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.code }}</td>
              <td>{{ formatDate(item.orderTime) }}</td>
              <td>
                {{ item.payMethod === null ? "未支付" : item.payMethod }}
              </td>
              <td>{{ item.amount }}</td>
            </tr>
          </tbody>
        </table>
        <div class="pager">
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            @current-change="handlePage"
          >
          </el-pagination>
        </div>
      </div>
      <div id="noItem" class="noItem">
        <span>对不起没有你要查找的内容</span>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      choose: 1,
      order: [
        {
          id: 1,
          name: "所有机票",
        },
        {
          id: 2,
          name: "支付机票",
        },
        {
          id: 3,
          name: "未支付机票",
        },
      ],
      type: "机票",
      time: "",
      pageData: {
        page: 1,
        limit: 10,
      },
      orderList: [],
      total: 0,

    };
  },
  created() {
    this.getList();
  },
  methods: {
    change(item) {
      this.choose = item.id;
      this.getList();
    },
    getList() {
      const id = JSON.parse(localStorage.getItem("user")).id;
      this.$http
        .get(
          "/order/checkAllOrder/" +
            id +
            "/" +
            this.pageData.page +
            "/" +
            this.pageData.limit +
            "/" +
            this.choose,
          {
            params: {
              time: this.time,
              type: this.type,
            },
          }
        )
        .then((response) => {
          console.log(response, "order");
          const list = response.data.data;
          this.orderList = list.records;
          if (this.orderList.length === 0) {
            //查询结果为空
            document.getElementById("showOrder").style.display = "none";
            document.getElementById("noItem").style.display = "";
          } else {
            document.getElementById("showOrder").style.display = "";
            document.getElementById("noItem").style.display = "none";
          }
          this.total = list.total;
        });
    },
    changeOrder() {
      this.getList();
    },
    //格式化时间
    formatDate(time) {
      let date = new Date(new Date(time).getTime() + 8 * 3600 * 1000);
      date = date.toJSON();
      date = date.substring(0, 19).replace("T", " ");
      return date;
    },
    //查看订单详情
    checkOrder(item) {
      if (item.payMethod === null) {
        //未支付
        let routeData = this.$router.resolve({
          path: "/order/orderOver",
          query: { id: item.id },
        });
        window.open(routeData.href, "_blank");
      } else {
      }
    },
    //选择页面的回调函数
    handlePage(val) {
      this.pageData.page = val;
      this.getList();
    },
  },
};
</script>
  <style lang="less" scoped>
.order {
  border: 2px solid RGB(231, 236, 239);
  padding: 30px;
  .top {
    display: flex;
    width: 950px;
    .nav {
      width: 100%;
      background: RGB(247, 249, 250);
      border-bottom: 2px solid RGB(1, 134, 160);
      .nav-item {
        margin-right: 30px;
        font-size: 18px;
      }
    }
  }
  .mod {
    .time {
      display: flex;
      margin: 10px;
      .item {
        display: flex;
        align-items: center;
        margin-right: 20px;
      }
    }
    .noItem {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: large;
    }
  }
}
.spanItem {
  border-bottom: 6px solid RGB(1, 134, 160);
  color: RGB(1, 134, 160);
}
</style>