<template>
  <div class="personalNews">
    <div class="row">
        <div class="person">
            <person-choose></person-choose>
        </div>
    </div>
  </div>
</template>
<script>
import PersonChoose from '@/components/personal/common/PersonChoose';
export default {
    components: {
        "person-choose" : PersonChoose,
    }
};
</script>
<style lang="less" scoped>
</style>