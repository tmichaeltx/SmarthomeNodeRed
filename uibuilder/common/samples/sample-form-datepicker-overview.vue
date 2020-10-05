<template>
  <div>
      <h3>Form-Datepicker-Overview</h3>
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
    <p>Value: '{{ value }}'</p>
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