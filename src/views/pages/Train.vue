<template>
  <div class="ticket">
    <div class="topSearch">
      <choose-train class="chooseTrain"></choose-train>
    </div>
    <div class="mod">
      <div class="imgShow"><img src="@/assets/picture/train.png" height="195px" width="100%"/></div>
      <train-mod></train-mod>
    </div>
    <hr />
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
    .chooseTrain {
      width: 60%;
      padding: 10px;
      border: 4px solid RGB(0, 208, 212);
    }
  }
  .mod{
    .imgShow{
      margin-top: 20px;
      border-bottom: 2px solid #848484;
      border-top: 2px solid #848484;
      border-radius: 5px;
    }
  }
}
</style>
  <script>
import ChooseTrain from "@/components/home/homeTicket/choose/ChooseTrain";
import Bottom from "@/components/bottom/Bottom";
import TrainMod from "@/components/train/mod/TainMod";

export default {
  data() {
    return {};
  },
  components: {
    "choose-train": ChooseTrain,
    "train-mod": TrainMod,
    bottom: Bottom,
  },
};
</script>