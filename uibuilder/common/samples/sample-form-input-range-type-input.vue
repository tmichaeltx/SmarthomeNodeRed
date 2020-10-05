<template>
  <div>
      <h3>Form-Input-Range type input</h3>
    <label for="range-1">Example range with min and max</label>
    <b-form-input id="range-1" v-model="value" type="range" min="0" max="5"></b-form-input>
    <div class="mt-2">Value: {{ value }}</div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: '2'
      }
    }
  }
</script>