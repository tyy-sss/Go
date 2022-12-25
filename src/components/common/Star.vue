<template>
  <div id="app">
    <div class="box">
      <div class="rate">
        <div class="rate-item">
          <div
            class="item"
            v-for="(val, i) in initStar"
            :key="i"
            @click="slelectStar(i)"
          >
            <img
              class="auto-img"
              :src="
                count - 1 >= i
                  ? 'http://localhost:8088/api/file/ee169dfbca6147db8e33d0f6e0361e7a.png'
                  : 'http://localhost:8088/api/file/c7a795a78274402fb9e765ccc4ee6f0c.png'
              "
            />
          </div>
        </div>
        <div class="count">{{ count }}分</div>
      </div>
    </div>
  </div>
</template>
  
<style>
.rate {
  display: flex;
  align-items: center;
  justify-content: center;
}

.rate-title {
  font-weight: bold;
}

.rate-item {
  margin: 0 15px;
}

.rate-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.item {
  width: 24px;
  height: 24px;
  margin: 0 3px;
}

.count {
  font-weight: bold;
}

.auto-img {
  width: 100%;
  display: block;
}
</style>
<script>
export default {
  props: ["gid", "type"],
  data() {
    return {
      //商品评价的数据
      initStar: 10,
      count: 0,
    };
  },
  mounted() {
  },
  methods: {
    getCount(val){
      this.count = val;
    },
    //选择星星
    slelectStar(index) {
      //判断本次是否点击星数和上一次一样的, 如果一样, 则取消选择星星
      if (this.count === index + 1) {
        this.count = 0;
        return;
      }
      this.count = index + 1;
      //给商品打分，需要子组件传过来id和商品类型
      this.$http
        .post(
          "/point/savePoint/" +
            this.gid +
            "/" +
            JSON.parse(localStorage.getItem("user")).id +
            "/" +
            this.type +
            "/" +
            this.count
        )
        .then((response) => {});
      //更新商品
      this.$parent.getNews();  
    },
  },
};
</script>