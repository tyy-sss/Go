<template>
  <div class="pay">
    <span>选择以下支付方式付款</span>
    <hr />
    <div class="payFor">
      <span>支付平台</span>
      <div class="way">
        <img @click="payByWx" src="@/assets/picture/payWX.png" />
        <img @click="payByZfc" src="@/assets/picture/payZFC.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["id"],
  data() {
    return {
      type:"",
    }
  },
  methods:{
    payByWx() {
      this.type="微信";
      this.pay();
    },
    payByZfc() {
      this.type="支付宝";
      this.pay();
    },
    pay(){
      this.$http.post("/order/payOrder/" + this.id + '/' + this.type).then((response) => {
        console.log(response);
        alert(response.data.data) 
      });
    }
  }
}
</script>
<style lang="less" scoped>
.pay {
  border: 1px solid black;
  padding: 20px;
  span{
    font-size: 20px;
  }
  .payFor {
    span{
        font-size: 17px;
    }
    .way{
        img{
            height: 200px;
            width: 200px;
            margin: 30px;
        }
    }
  }
}
</style>