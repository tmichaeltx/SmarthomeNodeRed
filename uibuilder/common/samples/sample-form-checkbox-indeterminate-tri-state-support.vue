<template>
  <div>
      <h3>Form Checkbox Indeterminate (tri-state) support</h3>
    <b-form-checkbox v-model="checked" :indeterminate.sync="indeterminate">
      Click me to see what happens
    </b-form-checkbox>

    <div class="mt-3">
      Checked: <strong>{{ checked }}</strong><br>
      Indeterminate: <strong>{{ indeterminate }}</strong>
    </div>

    <b-button @click="toggleIndeterminate">Toggle Indeterminate State</b-button>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        checked: true,
        indeterminate: true
      }
    },
    methods: {
      toggleIndeterminate() {
        this.indeterminate = !this.indeterminate
      }
    }
  }
</script>