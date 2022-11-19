<!-- 头部搜索组件 -->
<template>
    <div class="tip">
      <div class="left"></div>
      <div class="right">
        <!-- 头部信息和搜索框 -->
        <div class="container">
          <!-- 登录展示栏 -->
          <div class="showChoose">
            <ul class="choose">
              <li class="split">
                <a>适老化及无障碍</a>
              </li>
              <li>
                <span>请</span>
                <router-link :to="{ path: '/login' }">登录</router-link>
              </li>
              <li class="split">
                <span>或</span>
                <router-link :to="{ path: '/register' }">免费注册</router-link>
              </li>
              <li class="split">
                <img class="img-show" src="../assets/picture/massage.png" />
                <router-link :to="{ path: '/register' }">消息</router-link>
              </li>
              <li class="split">
                <img class="img-show" src="../assets/picture/资讯.png" />
                <router-link :to="{ path: '/register' }">查看订单</router-link>
              </li>
              <li class="split">
                <img class="img-show" src="../assets/picture/积分.png" />
                <router-link :to="{ path: '/register' }">积分商城</router-link>
              </li>
              <li class="split">
                <img class="img-show" src="../assets/picture/icon_serve.png" />
                <router-link :to="{ path: '/register' }">联系客服</router-link>
              </li>
              <li>
                <img class="img-show" src="../assets/picture/微信.png" />
              </li>
            </ul>
          </div>
          <!-- 搜索栏 -->
          <div class="search-show">
            <!-- 图片展示区 -->
            <div class="item">
              <img class="img-picture" src="../assets/picture/homePageTop.png" />
            </div>
            <!-- 搜索框 -->
            <div class="item">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="搜索酒店/门票/机票/火车票"
                />
                <span class="input-group-text">
                  <img class="img-search" src="../assets/picture/搜索 (1).png" />
                </span>
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
                      src="../assets/picture/icon_serve.png"
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
        <!-- 导航栏 -->
        <div class="container-fluid">
          <ul class="choose choosePage">
            <li class="list active">
              <router-link to="/homePage/home">
                首页
              </router-link>
            </li>
            <li class="list">
              <router-link to="/homePage/ticket">
                机票
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </template>
  <script>
  import RegisterView from "@/views/RegisterView.vue";
  import { defineComponent } from "@vue/composition-api";
  
  const list = document.querySelectorAll(".list");
  const token = localStorage.getItem('token');
  
  export default defineComponent({
    components: { RegisterView },
    setup() {},
    created: function(){
      console.log(token)
      if( token != null || token != ''){
  
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
  <style scoped>
  /* 设置头部选择栏 */
  .choose {
    height: 32px;
    margin-top: 5px;
  }
  .choose li {
    display: inline;
    margin: 5px;
  }
  .choose a {
    text-decoration: none;
    padding: 10px;
  }
  /* 去哪儿的图片 */
  .img-picture {
    width: 136px;
    height: 54px;
  }
  /* 头部的图片 */
  .img-show {
    width: 30px;
    height: 30px;
  }
  /* 搜索的图片 */
  .img-search {
    width: 45px;
    height: 45px;
  }
  /* 分割线 */
  .split {
    border-right: 1px solid black;
  }
  /* 设置到最左的位置 */
  .showChoose {
    display: flex;
    justify-content: flex-end;
  }
  .search-show,
  .customer-show {
    display: flex;
    justify-content: space-between;
  }
  /* 输入框的长度 */
  .input-group {
    width: 600px;
  }
  .customer-time {
    font-size: 15px;
  }
  .customer-phone {
    display: flex;
    width: 180px;
    font-size: 13px;
    color: #757575;
    margin: 5px;
  }
  .customer-phone-show {
    color: #00d0d4;
    margin-left: auto;
  }
  .customer-show-item {
    margin: 5px;
  }
  /* 导航栏 */
  .choosePage {
    background-color: #00d0d4;
    height: 50px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .choosePage a {
    font-size: 25px;
    color: white;
    margin: 5px;
    font-weight: bold;
  }
  .choose ul li a:active {
    height: 100%;
    background-color: RGB(0, 188, 212);
    border-radius: 30px;
  }
  </style>
  