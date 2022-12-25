<template>
  <div class="chat">
      <common-header></common-header>
      <chat></chat>
  </div>
</template>
<script>
import CommonHeader from '@/components/common/CommonHeader';
import Chat from '@/components/chat/Chat'

export default {
components: { 
  "common-header" : CommonHeader, 
  "chat" : Chat,
},
}
</script>
<style lang="less" scoped>
</style>