<template>
  <div>
    <h3>Form Checkbox non-custom check inputs</h3>
    <b-form-group label="Plain inline checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        plain
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Plain stacked checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        plain
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
      }
    }
  }
</script>