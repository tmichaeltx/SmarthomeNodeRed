<template>
  <div>
      <h3>Form-Rating-Readonly (non-interactive) rating</h3>
    <b-form-rating v-model="value" readonly></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: 2.567
      }
    }
  }
</script>