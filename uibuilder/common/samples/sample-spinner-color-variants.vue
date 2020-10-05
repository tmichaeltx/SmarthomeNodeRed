<template>
  <div>
      <h3>Spinner-Color variants</h3>
    <div class="text-center mb-3 d-flex justify-content-between">
      <b-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
      ></b-spinner>
    </div>

    <div class="text-center d-flex justify-content-between">
      <b-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
        type="grow"
      ></b-spinner>
    </div>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']
      }
    }
  }
</script>