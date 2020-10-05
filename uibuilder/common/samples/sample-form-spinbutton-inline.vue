<template>
  <div>
      <h3>Form-Spinbutton-Inline</h3>
    <label for="sb-inline">Inline spin button</label>
    <b-form-spinbutton id="sb-inline" v-model="value" inline></b-form-spinbutton>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: 50
      }
    }
  }
</script>