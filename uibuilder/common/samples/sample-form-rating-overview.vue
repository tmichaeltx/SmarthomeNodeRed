<template>
  <div>
      <h3>Form-Rating-Overview</h3>
    <b-form-rating v-model="value"></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: null
      }
    }
  }
</script>