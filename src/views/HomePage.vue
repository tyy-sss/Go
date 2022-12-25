<template>
    <div class="app">
        <common-header></common-header>
        <common-search></common-search>
        <common-navigation></common-navigation>
        <router-view></router-view>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import CommonHeader from '@/components/common/CommonHeader';
import CommonSearch from '@/components/common/CommonSearch';
import CommonNavigation from '@/components/common/CommonNavigation';

export default defineComponent({
    setup() {
        
    },
    components: {
        "common-header" : CommonHeader,
        "common-navigation": CommonNavigation,
        "common-search": CommonSearch,
    }
})
</script>
