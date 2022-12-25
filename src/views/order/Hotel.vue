<template>
    <div class="show">
        <hotel-order></hotel-order>
    </div>
</template>
<script>
import HotelOrder from '@/components/order/HotelOrder';
export default {
    components:{
        "hotel-order" : HotelOrder,
    }
}
</script>
<style lang="less" scoped>
.show{
    margin-top: 20px;
}
</style>