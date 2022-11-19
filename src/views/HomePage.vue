<template>
    <div class="app">
    <tip></tip>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import tip  from '@/components/TipSearch.vue'


export default defineComponent({
    setup() {
        
    },
    components: {
        tip
    }
})
</script>
