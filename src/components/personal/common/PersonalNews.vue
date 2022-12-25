<template>
  <div class="personChoose">
    <div class="leftChoose">
      <div v-for="(item, i) in form" :key="i">
        <div
          class="choose"
          :class="choose == item.id ? 'spanItem' : ''"
          @click="change(item)"
        >
          <span class="name">{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="right">
        <my-collection></my-collection>
    </div>
  </div>
</template>
  <style lang="less" scoped>
.personChoose {
  display: flex;
  margin: 20px;
  .leftChoose {
    margin-right: 90px;
    .choose {
      margin-left: 200px;
      padding: 20px;
      width: 38%;
      border: 1px solid RGB(169, 166, 165);
      border-radius: 5px;
      span {
        font-size: 18px;
      }
    }
  }
}

.spanItem {
  color: RGB(0, 208, 212);
}
</style>
<script>
import MyCollection from '../my/MyCollection.vue';

export default {
  data() {
    return {
      choose: 1,
      form: [
        {
          id: 1,
          name: "我的收藏",
        },
      ],
    };
  },
  methods: {
    change(item) {
      this.choose = item.id;
    },
  },
  components: {
    "my-collection": MyCollection,
  },
};
</script>