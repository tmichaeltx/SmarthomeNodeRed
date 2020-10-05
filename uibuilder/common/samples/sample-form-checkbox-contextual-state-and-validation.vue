<template>
  <div>
      <h3>Form Checkbox Contextual state and validation</h3>
    <b-form-checkbox-group
      v-model="value"
      :options="options"
      :state="state"
      name="checkbox-validation"
    >
      <b-form-invalid-feedback :state="state">Please select two</b-form-invalid-feedback>
      <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
    </b-form-checkbox-group>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: [],
        options: [
          { text: 'First Check', value: 'first' },
          { text: 'Second Check', value: 'second' },
          { text: 'Third Check', value: 'third' }
        ]
      }
    },
    computed: {
      state() {
        return this.value.length === 2
      }
    }
  }
</script>