<template>
  <div class="hotelOrder container">
    <div class="business part">
      <div class="news">
        <div class="businessName item">
          <span>{{ form.businessName }}</span>
        </div>
        <div class="businessPlace item">
          <span>{{ form.businessPlace }}</span>
        </div>
        <div class="name item">
          <span>{{ form.name }}</span>
        </div>
        <div class="description item">
          <span>{{ form.description }}</span>
        </div>
      </div>
      <div class="img">
        <img
          :src="form.img"
          width="100px"
          height="100px"
          style="border-radius: 5px"
        />
      </div>
    </div>
    <div class="checkIn part">
      <div class="title checkItem">
        <span>入住消息</span>
      </div>
      <div class="time checkItem">
        <div class="timeItem">
          <span>入离时间</span>
        </div>

        <div class="startTime timeItem">
          <span>入住时间：{{ formatDate(form.startTime) }}</span>
        </div>
        <div class="endTime timeItem">
          <span>结束时间：{{ formatDate(form.endTime) }}</span>
        </div>
      </div>
      <div class="room checkItem">
        <div class="price">
          <span class="priceNews">价格：</span>
          <span>￥{{ form.price * 0.1 * form.discount * lockStock }}元</span>
          <span style="text-decoration: line-through; font-size: medium"
            >￥{{ form.price * lockStock }}元</span
          >
          <span class="discount">折扣：{{ form.discount }}折</span>
        </div>
        <div class="num">
          <div class="item">
            <span>房间数量</span>
          </div>
          <div class="item numChoose">
            <button
              type="button"
              class="btn"
              @click="reduceNum"
              style="border: 1px solid black; border-radius: 0%"
            >
              -
            </button>
            <div>{{ lockStock }}</div>
            <button
              type="button"
              class="btn"
              @click="addNum"
              style="border: 1px solid black; border-radius: 0%"
            >
              +
            </button>
            <span class="stock">当前库存{{ form.stock - lockStock }}</span>
          </div>
        </div>
        <div ref="form" class="people checkItem">
          <form ref="form">
            <div class="name form-group">
              <span>联系人</span>
              <input
                type="text"
                class="form-control"
                name="name"
                v-model="form.userName"
                v-validate="'required'"
                placeholder="请填联系人的姓名"
              />
              <div class="showErrorMessage">
                <span>{{ errors.first("name") }}</span>
              </div>
            </div>
            <div class="name form-group">
              <span>联系电话</span>
              <input
                type="text"
                class="form-control"
                name="phone"
                v-model="form.userPhone"
                v-validate="'required|phone'"
                placeholder="请填联系电话"
              />
              <div class="showErrorMessage">
                <span>{{ errors.first("phone") }}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="sumbit">
      <button type="button" class="btn btn-warning" @click="order">
        下一步，支付
      </button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.hotelOrder {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .part {
    background-color: aliceblue;
    border-radius: 10px;
    box-shadow: inset;
    margin: 20px;
    width: 50%;
  }
  .business {
    padding: 50px;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    .news {
      margin-right: 200px;
      .item {
        margin-bottom: 10px;
      }
      .businessName {
        font-size: 30px;
      }
      .businessPlace {
        color: RGB(158, 158, 158);
      }
      .name {
        font-size: 20px;
      }
    }
  }
  .checkIn {
    padding: 20px;
    .checkItem {
      margin-bottom: 10px;
    }
    .title {
      font-size: 20px;
    }
    .time {
      display: flex;
      .timeItem {
        margin-right: 15px;
      }
    }
    .room {
      .price {
        .priceNews {
          color: RGB(33, 37, 41);
          font-size: 17px;
        }
        font-size: 23px;
        color: RGB(255, 116, 32);
        margin-bottom: 10px;
        .discount {
          color: RGB(33, 37, 41);
          margin-left: 50px;
          font-size: 17px;
          margin-right: 50px;
        }
      }
      .num {
        display: flex;
        align-items: center;
        .numChoose {
          display: flex;
          margin-left: 50px;
          div {
            width: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
          }
          .stock {
            display: flex;
            align-items: center;
            justify-content: center;
            color: red;
            margin-left: 20px;
            font-size: medium;
          }
        }
      }
      .people {
        .name {
          display: flex;
          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            width: 100px;
          }
          input {
            width: 60%;
          }
        }
      }
    }
  }
}
.showErrorMessage {
  margin-left: 5px;
  font-size: 10px;
  color: red;
  height: 20px;
  width: 180px;
}
</style>
<script>
export default {
  data() {
    return {
      lockStock: 1,
      form: {},
    };
  },
  created() {
    this.getHotelNews();
  },
  methods: {
    //下单酒店
    order() {
      this.$validator.validate().then((valid) => {
        console.log(valid);
        if (valid) {
          this.$http
            .post("/order/orderHotel", {
              token: localStorage.getItem("token"),
              id: this.$route.query.id,
              userName: this.form.userName,
              userPhone: this.form.userPhone,
              businessName: this.form.businessName,
              businessPlace: this.form.businessPlace,
              goodsName: this.form.name,
              goodsNum: this.lockStock,
              goodsPrice: this.form.price,
              actualPrice: this.form.price * 0.1 * this.form.discount,
              total:
                this.form.price * 0.1 * this.form.discount * this.lockStock,
              startTime: this.form.startTime,
              endTime: this.form.endTime,
            })
            .then((response) => {
              console.log(response);
              const data = response.data;
              if (data.msg === '下单产品库存不足') {
                alert(data.msg);
              }else{
                let routeData = this.$router.resolve({
                  path: "/order/orderOver",
                  query: { id: data.data },
                });
                window.open(routeData.href, "_self");
              }
            });
        }
      });
    },
    //票数的加减
    addNum() {
      if (this.lockStock < this.form.stock) {
        this.lockStock += 1;
      }
    },
    reduceNum() {
      if (this.lockStock >= 2) {
        this.lockStock -= 1;
      }
    },
    // 格式化时间
    formatDate(time) {
      let date = new Date(new Date(time).getTime() + 8 * 3600 * 1000);
      date = date.toJSON();
      date = date.substring(0, 10);
      return date;
    },
    //获得酒店的具体消息
    getHotelNews() {
      const id = this.$route.query.id;
      this.$http.get("/hotel/hotelNews/" + id).then((response) => {
        console.log(response, "hotel");
        const list = response.data.data;
        this.form = list;
      });
    },
  },
};
</script>