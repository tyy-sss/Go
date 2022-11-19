<template>
    <div class="holiday">
        <img class="showPic">
        <div>
            <span>{{ price }}</span>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    data() {
        return {
            price: 123,
        }
    },
    setup() {
        
    },
})
</script>

<style scoped>
.holiday{
    width: 180px;
    height: 150px;
}
.showPic{
    width: 170px;
    height: 118px;
    border: 1px solid black;
}
</style>