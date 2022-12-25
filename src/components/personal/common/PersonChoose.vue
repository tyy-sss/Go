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
      <my-order v-if="choose === 1"></my-order>
      <my-ticket v-else-if="choose === 2"></my-ticket>
      <my-hotel v-else-if="choose === 3"></my-hotel>
      <my-attraction v-else-if="choose === 4"></my-attraction>
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
import MyOrder from "@/components/personal/my/MyOrder";
import MyTicket from "@/components/personal/my/MyTicket";
import MyHotel from "@/components/personal/my/MyHotel";
import MyAttraction from "@/components/personal/my/MyAttraction";
export default {
  data() {
    return {
      choose: 1,
      form: [
        {
          id: 1,
          name: "我的订单",
        },
        {
          id: 2,
          name: "我的机票",
        },
        {
          id: 3,
          name: "我的酒店",
        },
        {
          id: 4,
          name: "我的度假",
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
    "my-order": MyOrder,
    "my-hotel": MyHotel,
    "my-ticket": MyTicket,
    "my-attraction": MyAttraction,
  },
};
</script>