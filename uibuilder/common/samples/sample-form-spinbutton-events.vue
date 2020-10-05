<template>
  <div>
      <h3>Form-Spinbutton-Events</h3>
    <label for="sb-input">Spin button - input and change events</label>
    <b-form-spinbutton
      id="sb-input"
      v-model="value1"
      @change="value2 = $event"
      wrap
    ></b-form-spinbutton>
    <p>Input event: {{ value1 }}</p>
    <p>Change event: {{ value2 }}</p>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value1: 0,
        value2: null
      }
    }
  }
</script>