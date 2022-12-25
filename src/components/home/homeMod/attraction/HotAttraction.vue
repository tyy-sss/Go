<template>
  <div class="container">
    <div class="row">
      <div class="left col-md-2">
        <div v-for="(item, i) in attraction" :key="i">
          <span class="title">{{ item.title }}</span>
          <ul class="place">
            <li class="nav-item" v-for="p in item.place" :key="p">
              {{ p }}
            </li>
          </ul>
        </div>
      </div>
      <div class="right col-md-9 row">
        <div class="news col-md-3" v-for="(item, index) in list" :key="index">
          <div class="Img">
            <img :src="item.img" height="220px" width="250px" />
          </div>
          <div class="title">
            <span>{{ item.name }}</span>
          </div>
          <div class="price">
            <span>￥{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      attraction: [
        {
          title: "周边游",
          place: {
            place1: "湘西",
            place2: "长沙",
            place3: "天门山",
            place4: "湘潭",
            place5: "湘西",
            place6: "十里画廊",
            place7: "袁家界",
            place8: "周洛大峡谷",
          },
        },
        {
          title: "周边游",
          place: {
            place1: "湘西",
            place2: "长沙",
            place3: "天门山",
            place4: "湘潭",
            place5: "湘西",
            place6: "十里画廊",
            place7: "袁家界",
            place8: "周洛大峡谷",
          },
        },
      ],
      list: [],
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
    //获得推荐酒店的数据
    getList() {
      this.$http
        .get("/attraction/adviceHotAttraction/" + 6)
        .then((response) => {
          console.log(response, "attraction");
          this.list = response.data.data;
        });
    },
  },
};
</script>

<style lang="less" scoped>
.row {
  display: flex;
  .left {
    padding: 0;
    flex-direction: row;
    margin-top: 10px;
    .title {
      font-weight: bold;
      font-size: 15px;
      color: RGB(51, 51, 137);
    }
    .place {
      margin: 15px;
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    .news {
      flex-wrap: wrap;
      margin-right: 5px;
      .title {
        overflow: hidden;
        font-size: 18px;
      }
      .price {
        font-size: 20px;
        float: left;
        color: RGB(255, 116, 0);
      }
    }
  }
}
</style> 