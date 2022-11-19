<template>
    <h3>商品{{ id }}</h3>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props:["id"],
    setup() {
        
    },
})
</script>
