<template>
    <div class="show">
        <div class="mod">
            <attraction-mod></attraction-mod>
        </div>
        <div class="container">
            <comment-attraction></comment-attraction>
        </div>
    </div>
</template>
<script>
import CommentAttraction from '@/components/show/comment/CommentAttraction';
import AttractionMod from '@/components/show/attraction/AttractionMod'
export default {
    components:{
        "attraction-mod": AttractionMod,
        "comment-attraction": CommentAttraction,
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