// wip-app-other3.vue
<template>
    <current-user>
    <template v-slot:default="slotProps">{{ slotProps.user.firstName }}</template>
<!--This version:
    <template v-slot:mikeslot="secProps" >{{secProps.bother.number}}</template>
    is equivalent to the version below-->
    
    </current-user>
    
</template>


<script>
  module.exports = {
      components:{
          'wip-frame': httpVueLoader('./wip-frame.vue'),
          'current-user': httpVueLoader('./current-user.vue'),
          }
    }
</script>
