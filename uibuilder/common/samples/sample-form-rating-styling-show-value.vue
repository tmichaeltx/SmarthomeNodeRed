<template>
  <div>
      <h3>Form-Rating-Styling-Show value</h3>
    <b-form-rating v-model="value" show-value></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: 4
      }
    }
  }
</script>