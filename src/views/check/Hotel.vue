<template>
    <div class="show">
        <div class="mod">
            <hotel-mod></hotel-mod>
        </div>
        <div class="container">
            <comment-hotel></comment-hotel>
        </div>
    </div>
</template>
<script>
import HotelMod from '@/components/show/hotel/HotelMod';
import CommentHotel from '@/components/show/comment/CommentHotel';
export default {
    components:{
        "hotel-mod": HotelMod,
        "comment-hotel": CommentHotel,
    }
}
</script>
<style lang="less" scoped>
.show{
    margin-top: 20px;
    .mod{
        padding-bottom: 20px;
    }
}
</style>