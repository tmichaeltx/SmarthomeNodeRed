<template>
  <div>
      <h3>Form-Rating-Styling variant and color</h3>
    <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" variant="success" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" variant="danger" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" variant="primary" class="mb-2"></b-form-rating>
    <b-form-rating v-model="value" variant="info" class="mb-2"></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: 3
      }
    }
  }
</script>