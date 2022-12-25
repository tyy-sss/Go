<template>
    <!-- 机票查询 -->
    <div class="col-md-6 choose">
        <!-- 选择栏 -->
        <div class="row">
          <div class="col-md-2">
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
          <div class="col-md-10">
            <choose-ticket v-if="choose === 1"></choose-ticket>
            <choose-train v-else-if="choose === 2"></choose-train>
            <choose-rainway v-else-if="choose === 3"></choose-rainway>
            <choose-attraction v-else-if="choose === 4"></choose-attraction>
            <choose-hotel v-else></choose-hotel>
          </div>
        </div>
      </div>
</template>
<script>
import ChooseTicket from './choose/ChooseTicket';
import ChooseTrain from './choose/ChooseTrain';
import ChooseHotel from './choose/ChooseHotel';
import ChooseAttraction from './choose/ChooseAttraction';
import ChooseRailway from './choose/ChooseRailway';

export default {
    data() {
    return {
      choose: 1,
      form: [
        {
          id: 1,
          title: "机票",
        },
        {
          id: 2,
          title: "火车票",
        },
        {
          id: 3,
          title: "高铁",
        },
        {
          id: 4,
          title: "度假",
        },
        {
          id: 5,
          title: "酒店",
        },
      ],
    };
  },
  components:{
    "choose-ticket" : ChooseTicket,
    "choose-train" : ChooseTrain,
    "choose-hotel" : ChooseHotel,
    "choose-attraction" : ChooseAttraction,
    "choose-rainway" : ChooseRailway,
  },
  methods: {
    handleChange(item) {
      this.choose = item.id;
    },
  },
}
</script>
<style lang="less" scoped>
.choose {
  border: 4px solid RGB(0, 208, 212);
  padding: 20px;
  height: 100%;
  .nav {
    .nav-item {
      height: 55px;
      margin: 0;
      background-color: RGB(0, 208, 212);
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      cursor: pointer;
    }
  }
}
.spanItem {
  height: 55px;
  width: 100%;
  margin: 0;
  background-color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: RGB(0, 208, 212);
}
</style>