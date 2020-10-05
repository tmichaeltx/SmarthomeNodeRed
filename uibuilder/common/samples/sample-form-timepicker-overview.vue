<template>
  <div>
      <h3>Form-Timepicker-Overview</h3>
    <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
    <div class="mt-2">Value: '{{ value }}'</div>
  </div>
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