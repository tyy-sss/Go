<template>
  <div>
    <div class="container">
      <div class="row">
        <ticket-news></ticket-news>
        <div class="col-md-6">
          <div>
            <span class="title">携你同游，游览世界。</span>
          </div>
          <!-- 轮播 -->
          <carousel></carousel>
        </div>
      </div>
      <div class="row">
        <mod-ticket></mod-ticket>
      </div>
      <div class="row">
        <mod-hotel></mod-hotel>
      </div>
      <div class="row">
        <mod-attraction></mod-attraction>
      </div>
    </div>
    <div class="bottom">
      <bottom-code></bottom-code>
    </div>
    <div class="bottom">
      <bottom-news></bottom-news>
    </div>
  </div>
</template>
  <script>
import TicketNews from "@/components/home/homeTicket/TicketNews";
import ModTicket from "@/components/home/homeMod/ModTicket";
import ModHotel from "@/components/home/homeMod/ModHotel";
import ModAttraction from "@/components/home/homeMod/ModAttraction";
import Carousel from "@/components/common/Carousel";
import BottomCode from "@/components/home/homeBottom/BottomCode";
import BottomNews from "@/components/home/homeBottom/BottomNews";

export default {
  components: {
    "ticket-news": TicketNews,
    "mod-ticket": ModTicket,
    "mod-hotel": ModHotel,
    "mod-attraction": ModAttraction,
    carousel: Carousel,
    "bottom-code": BottomCode,
    "bottom-news": BottomNews,
  },
};
</script>
  <style lang="less" scoped>
.choose {
  border: 4px solid RGB(0, 208, 212);
  height: 320px;
  padding: 0;
  height: 100%;
  .nav {
    .nav-item {
      height: 45px;
      margin: 0;
      background-color: RGB(0, 208, 212);
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}
.bottom{
  padding-bottom: 50px;
}
.title {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: RGB(0, 208, 212);
  margin: 10px;
}
</style>