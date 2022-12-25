<!-- 头部搜索组件 -->
<template>
  <div class="tip container">
    <!-- 搜索栏 -->
    <div class="search-show">
      <!-- 图片展示区 -->
      <div class="item">
        <img
          src="../../assets/picture/homePageTop.png"
          width="136px"
          height="54px"
        />
      </div>
      <!-- 搜索框 -->
      <div class="item">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="搜索酒店/门票/机票/火车票"
          />
          <div class="input-group-text">
            <img
              class="img-search"
              src="@/assets/picture/搜索 (1).png"
              width="30px"
              height="30px"
            />
          </div>
        </div>
      </div>
      <!-- 客服 -->
      <div class="item">
        <div class="customer-show">
          <!-- 客服图片 -->
          <div class="customer-show-item">
            <div>
              <img
                class="img-show"
                src="@/assets/picture/icon_serve.png"
                width="30px"
                height="30px"
              />
            </div>
            <span class="customer-time">24小时</span>
          </div>
          <!-- 客服类型方式 -->
          <div class="customer-show-item">
            <div class="customer-phone">
              <span>国内客服</span>
              <span class="customer-phone-show">95117</span>
            </div>
            <div class="customer-phone">
              <span>国际客服</span>
              <span class="customer-phone-show">(+8610)59606999</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.search-show {
  display: flex;
  justify-content: space-around;
  .item {
    margin-right: 100px;
    .input-group {
      width: 180%;
      margin: 5px;
    }
    .customer-show {
      display: flex;
      margin-left: 90px;
      .customer-show-item {
        margin: 5px;
        .customer-phone {
          display: flex;
          width: 180px;
          font-size: 13px;
          color: #757575;
          margin:5px;
          .customer-phone-show {
            color: #00d0d4;
            margin-left: auto;
          }
        }

        .customer-time {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
<script>
import { defineComponent } from "@vue/composition-api";

const list = document.querySelectorAll(".list");
const token = localStorage.getItem("token");

export default defineComponent({
  setup() {},
  created: function () {
    console.log(token);
    if (token != null || token != "") {
    }
  },
  methods: {
    activelink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    },
  },
});
</script>

  