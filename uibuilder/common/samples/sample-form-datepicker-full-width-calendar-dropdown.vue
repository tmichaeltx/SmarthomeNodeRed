<template>
  <div>
                  <h3>Form-Datepicker-Full width calendar dropdown</h3>
    <label for="datepicker-full-width">Choose a date</label>
    <b-form-datepicker
      id="datepicker-full-width"
      v-model="value"
      menu-class="w-100"
      calendar-width="100%"
      class="mb-2"
    ></b-form-datepicker>
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