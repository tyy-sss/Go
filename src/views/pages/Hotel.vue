<template>
  <div class="hotel">
    <div class="topSearch">
      <div class="left">
        <choose-hotel class="chooseHotel"></choose-hotel>
      </div>
      <div class="right">
        <img
          src="https://img1.qunarzz.com/m_appPromotion/wap/2002/43/9777e857d6df2802.jpg"
        />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="left col-md-8">
          <mod-hotel></mod-hotel>
        </div>
        <div class="right col-md-4">
          <right></right>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <bottom></bottom>
    </div>
  </div>
</template>
  <style lang="less" scoped>
.hotel {
  .topSearch {
    display: flex;
    justify-content: space-around;

    .left {
      margin: 0;
      padding-top: 20px;
      .chooseHotel {
        width: 615px;
        height: 280px;
        padding: 10px;
        border: 4px solid RGB(0, 208, 212);
      }
    }
  }
}
</style>
  <script>
import Bottom from "@/components/bottom/Bottom";
import ChooseHotel from "@/components/home/homeTicket/choose/ChooseHotel";
import ModHotel from "@/components/home/homeMod/ModHotel";
import Right from "@/components/hotel/Right";

export default {
  data() {
    return {};
  },
  components: {
    bottom: Bottom,
    "choose-hotel": ChooseHotel,
    "mod-hotel": ModHotel,
    right: Right,
  },
};
</script>