<template>
  <div id="personalTip">
    <!-- 展示图片 -->
    <div class="container">
      <img class="img-picture" src="../assets/picture/homePageTop.png" />
    </div>
    <ul class="menu">
      <div class="menu-indicator"></div>
      <li
        class="menu-item"
        v-for="link in links"
        :key="link.id"
        @click="sliderIndicator(link.id,link.href)"
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
    <hr style="border: 5px solid red;">
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import leftChoose from '@/components/LeftChoose.vue';

export default defineComponent({
  setup() {},
  data() {
    return {
      selectedIndex: 0,
      links: [
        {
          id: 1,
          text: "个人信息",
          href: "/showPersonalChoose"
        },
        {
          id: 2,
          text: "账号设置",
          href: "/showPersonal"
        },
        {
          id: 3,
          text: "我的账号",
          href: "/showPersonal"
        },
        {
          id: 4,
          text: "消息",
          href: "/showPersonal"
        },
      ],
    };
  },
  methods: {
    sliderIndicator(id,href) {
      //设置当前点击的位置
      this.selectedIndex = id;
      this.$router.push(href)
    },
  },
  computed: {},
  components: {
    leftChoose,
  }
});
</script>
<style scoped>
/* ul */
.menu {
  padding: 0;
  margin: 0;
  position: relative;
  display: inline-flex;
  border-radius: 4px;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  text-align: center;
}
/* li */
.menu li {
  width: 150px;
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
  color:  RGB(26,133,153);
}
.img-picture {
  width: 136px;
  height: 54px;
}
</style>
