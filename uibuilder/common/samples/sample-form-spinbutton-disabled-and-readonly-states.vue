<template>
<div>
    <h3>Form-Spinbutton-Disabled and readonly states</h3>
  <b-row>
    <b-col md="6" class="mb-2">
      <label for="sb-disabled">Disabled spin button</label>
      <b-form-spinbutton id="sb-disabled" v-model="value" disabled></b-form-spinbutton>
    </b-col>
    <b-col md="6" class="mb-2">
      <label for="sb-readonly" class="">Readonly spin button</label>
      <b-form-spinbutton id="sb-readonly" v-model="value" readonly></b-form-spinbutton>
    </b-col>
  </b-row>
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