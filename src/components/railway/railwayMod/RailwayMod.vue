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
      <div class="train row">
        <!-- 显示机票消息 -->
        <div class="trainNews row" v-for="(item, i) in trainPrice" :key="i">
          <div class="price col-md-3">
            <span class="showPrice">￥{{ item.price }}</span>
          </div>
          <div class="showPlace col-md-4">
            <span>{{ item.startPlace }}</span>
            <span> to </span>
            <span>{{ item.endPlace }}</span>
          </div>
          <div class="showTime col-md-4">
            <span>{{ item.startTime }}</span>
            <span>-</span>
            <span>{{ item.endTime }}</span>
          </div>
          <div class="showDiscount col-md-1">
            <span>{{ item.discount }}折</span>
          </div>
        </div>
      </div>
    </div>
  </template> 
        <style lang="less" scoped>
  .container {
    border: 1px solid RGB(0, 208, 212);
    margin-top: 20px;
    .nav {
      border-bottom: 1px solid RGB(0, 208, 212);
      .nav-item {
        font-size: 20px;
        color: #000;
      }
    }
    .train {
      display: flex;
      .trainNews {
        display: flex;
        align-items: center;
        margin: 10px;
        .showPlace {
          font-size: 18px;
          color: RGB(0, 82, 136);
        }
        .price {
          .showPrice {
            font-size: 18px;
            color: RGB(255, 102, 0);
          }
        }
      }
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
            title: "热门",
            path: "/",
          },
        ],
        trainPrice: [
          {
            startPlace: "北京",
            endPlace: "澳门",
            startTime: "12月22日",
            endTime: "12月27日",
            price: 852,
            discount: 1,
          },
          {
            startPlace: "北京",
            endPlace: "澳门",
            startTime: "12月22日",
            endTime: "12月27日",
            price: 852,
            discount: 1,
          },
          {
            startPlace: "北京",
            endPlace: "澳门",
            startTime: "12月22日",
            endTime: "12月27日",
            price: 852,
            discount: 1,
          },
          {
            startPlace: "北京",
            endPlace: "澳门",
            startTime: "12月22日",
            endTime: "12月27日",
            price: 852,
            discount: 1,
          },
          {
            startPlace: "北京",
            endPlace: "澳门",
            startTime: "12月22日",
            endTime: "12月27日",
            price: 852,
            discount: 1,
          },
        ],
      };
    },
    created() {},
    methods: {},
  };
  </script>