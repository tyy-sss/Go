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
  export default {
    data() {
      return {
        orderIt: "订购",
        form: {},
      };
    },
    created() {
      this.getHotelNews();
    },
    methods: {
      //获得酒店的具体消息
      getHotelNews() {
        const id = this.$route.query.id;
        this.$http.get("/attraction/attractionNews/" + id).then((response) => {
          console.log(response, "attraction");
          const list = response.data.data;
          this.form = list;
          if (this.form.stock === 0) {
            this.orderIt = "库存不足";
          }
        });
      },
      //下单
      order(id) {
        if (this.orderIt === "库存不足") {
          alert("库存不足，不能定购");
        } else {
          let routeData = this.$router.resolve({
            path: "/order/attraction",
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
    },
  };
  </script>
  <style lang="less" scoped>