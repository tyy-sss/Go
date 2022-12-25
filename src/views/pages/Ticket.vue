<template>
  <div class="ticket">
    <div class="topSearch">
      <choose-ticket class="chooseTicket"></choose-ticket>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="news">
            <carousel></carousel>
          </div>
          <div class="news">
            <check-ticket></check-ticket>
          </div>
        </div>
        <div class="col-md-4">
           <right></right>
        </div>
      </div>
    </div>
    <hr>
    <div>
        <bottom></bottom>
    </div>
  </div>
</template>
<style lang="less" scoped>
.ticket {
  .topSearch {
    display: flex;
    justify-content: center;
    .chooseTicket {
      width: 60%;
      padding: 10px;
      border: 4px solid RGB(0, 208, 212);
    }
  }
  .container {
    padding: 20px;
    .row{
        .news{
            padding: 20px;
        }
    }
  }
}
</style>
<script>
import ChooseTicket from "@/components/home/homeTicket/choose/ChooseTicket";
import Carousel from "@/components/common/Carousel.vue";
import Right from "@/components/ticket/ticketMod/Right";
import CheckTicket from "@/components/ticket/ticketMod/CheckTicket";
import Bottom from '@/components/bottom/Bottom';

export default {
  data() {
    return {};
  },
  components: {
    "choose-ticket": ChooseTicket,
    "right": Right,
    "check-ticket": CheckTicket,
    "bottom" : Bottom,
    Carousel,
  },
};
</script>