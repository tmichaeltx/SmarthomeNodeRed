<template>
  <div>
      <h3>Form-Rating-Styling variant and color</h3>
    <b-form-rating v-model="value" color="indigo" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" color="#ff00ff" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" color="rgb(64, 192, 128)" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" color="rgba(64, 192, 128, 0.75)" class="mb-2"></b-form-rating>
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