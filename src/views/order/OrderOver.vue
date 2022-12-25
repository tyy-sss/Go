<template>
    <div class="pay container">
        <order-over></order-over>
    </div>
</template>
<script>
import OrderOver from '@/components/order/OrderOver';
export default {
  components: { "order-over" : OrderOver },
}
</script>