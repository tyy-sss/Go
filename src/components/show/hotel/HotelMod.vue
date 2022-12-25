<template>
  <div class="head">
    <div class="business">
      <div class="businessName">
        <span>{{ form.businessName }}</span>
      </div>
      <div class="businessPlace">
        <span>{{ form.businessPlace }}</span>
      </div>
    </div>
    <div class="mod">
      <div class="Img">
        <img :src="form.img" width="500px" height="400px" />
      </div>
      <div class="news">
        <div class="name">
          <span>{{ form.name }}</span>
        </div>
        <div class="description">
          <span>{{ form.description }}</span>
        </div>
        <div class="point">
          <span>{{ form.point }}分</span>
        </div>
        <div class="makePoint">
          <star :gid="gid" :type="type" ref="star"></star>
        </div>
        <div class="time">
          <div class="startTime">
            <span>入住时间：{{ formatDate(form.startTime) }}</span>
          </div>
          <div class="endTime">
            <span :formatter="formatDate"
              >结束时间：{{ formatDate(form.endTime) }}</span
            >
          </div>
        </div>
        <div class="price">
          <span>￥{{ form.price * 0.1 * form.discount }}元</span>
          <span style="text-decoration: line-through; font-size: medium"
            >￥{{ form.price }}元</span
          >
          <span class="discount">{{ form.discount }}折</span>
        </div>
        <div class="people">
          <span>{{ form.collectionNum }}个收藏</span>
          <span>{{ form.commentNum }}条评论</span>
          <img
            v-if="isCollection === false"
            @click="checkCollection"
            width="30px"
            height="30px"
            src="@/assets/picture/收藏 (1).png"
          />
          <img
            v-if="isCollection === true"
            @click="checkCollection"
            width="30px"
            height="30px"
            src="@/assets/picture/收藏.png"
          />
        </div>
        <div class="order">
          <button
            id="orderIt"
            type="button"
            class="btn btn-warning"
            @click="order(form.id)"
          >
            {{ orderIt }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import star from "@/components/common/Star.vue";
export default {
  data() {
    return {
      orderIt: "订购",
      form: {},
      isCollection: false,
      isLike: false,
      gid: 0,
      type: "酒店",
      point: 0,
    };
  },
  components: {
    star,
  },
  created() {
    this.getNews();
  },
  mounted() {
    this.gid = this.$route.query.id;
  },
  methods: {
    //获得酒店的具体消息
    getNews() {
      const id = this.$route.query.id;
      this.$http.get("/hotel/hotelNews/" + id).then((response) => {
        console.log(response, "hotel");
        const list = response.data.data;
        this.form = list;
        if (this.form.stock === 0) {
          this.orderIt = "库存不足";
        }
      });
      this.$http.get(
        "/point/getPoint/" +
          id +
          "/" +
          JSON.parse(localStorage.getItem("user")).id +
          "/" +
          this.type
      ).then((response) => {
        this.point = response.data.data;
        this.$refs.star.getCount(this.point)
      })
      this.$http.get(
        "/collection/getCollection/" +
          id +
          "/" +
          JSON.parse(localStorage.getItem("user")).id +
          "/" +
          this.type
      ).then((response) => {
        this.isCollection = response.data.data;
      })
    },
    //下单
    order(id) {
      if (this.orderIt === "库存不足") {
        alert("库存不足，不能定购");
      } else {
        let routeData = this.$router.resolve({
          path: "/order/hotel",
          query: { id: id },
        });
        window.open(routeData.href, "_self");
      }
    },
    // 格式化时间
    formatDate(time) {
      let date = new Date(new Date(time).getTime() + 8 * 3600 * 1000);
      date = date.toJSON();
      date = date.substring(0, 10);
      return date;
    },
    //收藏
    checkCollection() {
      this.isCollection = !this.isCollection;
      //给商品打分，需要子组件传过来id和商品类型
      this.$http
        .post(
          "/collection/saveCollection/" +
            this.gid +
            "/" +
            JSON.parse(localStorage.getItem("user")).id +
            "/" +
            this.type +
            "/" +
            this.isCollection
        )
        .then((response) => {});
      this.getNews();
    },
  },
};
</script>
<style lang="less" scoped>
.head {
  .business {
    .businessName {
      padding: 20px;
      background-color: RGB(0, 136, 164);
      display: flex;
      justify-items: center;
      font-size: 30px;
      font-weight: bold;
    }
    .businessPlace {
      padding: 10px;
      background-color: RGB(0, 208, 212);
      font-weight: bold;
    }
  }
  .mod {
    display: flex;
    padding-left: 200px;
    padding-top: 40px;
    width: 80%;
    .news {
      padding: 20px;
      background-color: RGB(219, 219, 219);
      justify-content: space-around;
      .name {
        font-size: 25px;
        font-weight: bold;
        color: RGB(0, 208, 212);
        margin-bottom: 10px;
      }
      .description {
        font-size: 20px;
        width: 95%;
        word-wrap: break-word;
        margin-bottom: 10px;
      }
      .price {
        font-size: 23px;
        color: RGB(255, 116, 32);
        margin-bottom: 10px;
        .discount {
          margin-left: 50px;
          color: #000;
          font-size: 18px;
          margin-right: 50px;
        }
      }
      .time {
        display: flex;
        margin: 10px;
        div {
          margin-right: 15px;
          font-size: 18px;
        }
      }
      .point {
        font-size: 23px;
        font-weight: bold;
        color: RGB(0, 208, 212);
        margin-bottom: 10px;
      }
      .makePoint {
        display: flex;
        color: RGB(0, 208, 212);
        div {
          margin-right: 15px;
        }
      }
      .people {
        span {
          margin: 10px;
          color: RGB(86, 88, 93);
        }
      }
      .order {
        margin: 10px;
      }
    }
  }
}
</style>