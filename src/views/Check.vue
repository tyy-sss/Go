<template>
    <div class="check">
        <common-header></common-header>
        <router-view></router-view>
    </div>
</template>
<script>
import CommonHeader from '@/components/common/CommonHeader';

export default {
  components: { 
    "common-header" : CommonHeader, 
},
}
</script>
<style lang="less" scoped>

</style>