<template>
    <div class="show">
        <ticket-order></ticket-order>
    </div>
</template>
<script>
import TicketOrder from '@/components/order/TicketOrder';
export default {
    components:{
        "ticket-order" : TicketOrder,
    }
}
</script>
<style lang="less" scoped>
.show{
    margin-top: 20px;
}
</style>