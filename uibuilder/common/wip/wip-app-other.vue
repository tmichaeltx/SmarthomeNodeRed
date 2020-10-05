// wip-app-other.vue from https://www.smashingmagazine.com/2019/07/using-slots-vue-js/ v1
<!--<template>
  <wip-frame><img src="../../uibuilder/common/images/img_avatar1.png"></wip-frame>
</template> -->

// wip-app-other.vue from https://www.smashingmagazine.com/2019/07/using-slots-vue-js/ v2

<template>
  <wip-frame>
    <template v-slot:header>
      <!-- The code below goes into the header slot -->
      My Image’s Title
    </template>
    <!-- The code below goes into the default slot -->
    <img src="../../uibuilder/common/images/img_avatar1.png">
  </wip-frame>
</template>


<script>
  module.exports = {
      components:{
          'wip-frame': httpVueLoader('./wip-frame.vue'),
          }
    }
</script>