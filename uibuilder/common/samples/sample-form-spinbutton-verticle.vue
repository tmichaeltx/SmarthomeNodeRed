<template>
  <div>
      <h3>Form-Spinbutton-Verticle</h3>
    <label for="sb-vertical">Vertical spin button</label><br>
    <b-form-spinbutton id="sb-vertical" v-model="value" vertical></b-form-spinbutton>
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