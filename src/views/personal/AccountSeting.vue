<template>
    <div class="accountSeting container">
        <div class="top item">
            <my-news></my-news>
        </div>
    </div>
</template>
<script>
import MyNews from '@/components/personal/my/MyNews';
export default {
    components:{
        "my-news": MyNews,
    }
}
</script>
<style scoped>
.item{
    margin: 50px;
}
</style>