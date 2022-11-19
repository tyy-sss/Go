<template>
  <div id="leftChoose">
    <div class="container">
      <div>
        <ul class="menu">
          <div class="menu-indicator"></div>
          <li
            class="menu-item"
            v-for="link in links"
            :key="link.id"
            @click="sliderIndicator(link.id, link.href)"
            :ref="'menu-item_' + link.id"
          >
            <a
              class="menu-link"
              :class="link.id === selectedIndex ? 'active' : null"
            >
              <span>{{ link.text }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="showPersonal">
        <div class="showNews">
          <myOrders></myOrders>
          <div class="myAccount"></div>
          <div class="myCard"></div>
          <div class="theHot"></div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
  <script>
import { defineComponent } from "@vue/composition-api";
import news from "../components/little/MyOrders";

export default defineComponent({
  setup() {},
  data() {
    return {
      selectedIndex: 0,
      links: [
        {
          id: 1,
          text: "我的订单",
          href: "/myOrders",
        },
        {
          id: 2,
          text: "我的机票",
          href: "/myTicket",
        },
        {
          id: 3,
          text: "我的酒店",
          href: "/myHotel",
        },
        {
          id: 4,
          text: "我的度假",
          href: "/myHoliday",
        },
        {
          id: 5,
          text: "我的攻略",
          href: "/strategy",
        },
      ],
    };
  },
  methods: {
    sliderIndicator(id, href) {
      //设置当前点击的位置
      this.selectedIndex = id;
      this.$router.push(href);
    },
  },
  components: {
    "myOrders": news,
  }
});
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
/* ul */
.menu {
  position: relative;
  border-radius: 4px;
  list-style-type: none;
  overflow: hidden;
}
/* li */
.menu li {
  border: 2px solid RGB(139, 139, 139);
  border-radius: 5px;
  width: 150px;
  height: 45px;
  text-align: center;
}
/* a */
.menu-link {
  padding: 5px 5px;
  width: 1.5rem;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  color: black;
}
.menu-link:hover,
.menu-link.active {
  color: RGB(26, 133, 153);
}
.showPersonal {
  width: 1000px;
}
</style>
  