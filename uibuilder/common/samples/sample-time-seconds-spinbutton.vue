<template>
<dir>
    <h3>Time-Enabling of seconds spinbutton</h3>
  <b-time v-model="value" show-seconds locale="en"></b-time>
  <div class="mt-2">Value: '{{ value }}'</div>
</dir>
</template>

<script>
module.exports = {
    data() {
      return {
        value: ''
      }
    }
  }
</script>