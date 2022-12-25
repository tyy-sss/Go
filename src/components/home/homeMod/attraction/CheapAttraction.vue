<template>
  <div class="cheapAttraction">
    <div class="top">
      <div
        class="topAttraction"
        v-for="(item, index) in topAttraction"
        :key="index"
      >
        <div class="left">
          <img :src="item.img" />
        </div>
        <div class="right">
          <div class="title">{{ item.name }}</div>
          <div class="description">{{ item.description }}</div>
          <div class="price">￥{{ item.price }}</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div
        class="bottomAttraction"
        v-for="item in bottomAttraction"
        :key="item"
      >
        <div class="Img">
          <img :src="item.img" height="220px" width="249px" />
        </div>
        <div class="title">
          <span>{{ item.name }}</span>
        </div>
        <div class="description">
          <span class="description">{{ item.description }}</span>
        </div>
        <div class="price">
          <span>￥{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.cheapAttraction {
  .top {
    display: flex;
    .topAttraction {
      display: flex;
      padding: 10px;
      .left {
        width: 50%;
        overflow: hidden;
      }
      .right {
        width: 40%;
        background-color: RGB(51, 51, 51);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding-left: 10px;
        .title {
          font-size: 18px;
          color: #fff;
          word-wrap: break-word;
        }
        .description {
          color: #fff;
          word-wrap: break-word;
        }
      }
    }
  }
  .bottom {
    display: flex;
    margin: 10px;
    .bottomAttraction {
      flex-direction: column;
      width: 250px;
      margin: 10px;
      padding: 0;
      border: 1px solid RGB(153, 153, 153);
      .title {
        word-wrap: break-word;
        margin: 10px;
      }
      .description {
        overflow: hidden;
        text-overflow: ellipsis; //超出部分以省略号显示
        white-space: nowrap;
        color: RGB(153, 153, 153);
        margin-bottom: 10px;
      }
    }
  }
}
.price {
  font-size: 20px;
  float: left;
  color: RGB(255, 116, 0);
}
</style>
<script>
export default {
  data() {
    return {
      topAttraction: [],
      bottomAttraction: [],
    };
  },
  created() {
    this.getList();  
  },
  methods: {
    //点击景点
    checkAttraction(id) {
      let routeData = this.$router.resolve({
        path: "/check/attraction",
        query: { id: id },
      });
      window.open(routeData.href, "_blank");
    },
    //获得推荐景点的数据
    getList() {
      this.$http
        .get("/attraction/adviceCheapTopAttraction/" + 2)
        .then((response) => {
          console.log(response, "attractions");
          this.topAttraction = response.data.data;
        });
      this.$http
        .get("/attraction/adviceCheapAttraction/" + 2 + "/" + 4)
        .then((response) => {
          console.log(response, "attractions");
          this.bottomAttraction = response.data.data;
        });
    },
  },
};
</script>