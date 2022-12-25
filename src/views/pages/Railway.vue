<template>
    <div class="railway">
      <div class="topSearch">
        <choose-railway class="chooseTrain"></choose-railway>
      </div>
      <div class="mod">
        <railway-mod></railway-mod>
      </div>
      <hr />
      <div>
        <bottom></bottom>
      </div>
    </div>
  </template>
    <style lang="less" scoped>
  .railway {
    .topSearch {
      display: flex;
      justify-content: center;
      margin: 20px;
      .chooseTrain {
        width: 60%;
        padding: 10px;
        border: 4px solid RGB(0, 208, 212);
      }
    }
    .mod{
      margin: 20px;
    }
  }
  </style>
    <script>
  import ChooseRailway from "@/components/home/homeTicket/choose/ChooseRailway";
  import Bottom from "@/components/bottom/Bottom";
import RailwayMod from "@/components/railway/railwayMod/RailwayMod";
  
  export default {
    data() {
      return {};
    },
    components: {
      "choose-railway": ChooseRailway,
      "railway-mod": RailwayMod,
      bottom: Bottom,
    },
  };
  </script>