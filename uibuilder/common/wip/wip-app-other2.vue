// app.vue
<template>
  <!-- <wip-frame></wip-frame>    is the equivalent of  <wip-frame />-->
  <wip-frame />
</template>

<script>
  module.exports = {
      components:{
          'wip-frame': httpVueLoader('./wip-frame.vue'),
          }
    }
</script>