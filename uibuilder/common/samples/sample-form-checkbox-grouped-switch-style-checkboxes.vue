<template>
  <div>
      <h3>Form-Checkbox-Grouped switch style checkboxes</h3>
    <b-form-group label="Inline switch style checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        switches
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Stacked (vertical) switch style checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        switches
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
          { text: 'Red', value: 'red' },
          { text: 'Green', value: 'green' },
          { text: 'Yellow (disabled)', value: 'yellow', disabled: true },
          { text: 'Blue', value: 'blue' }
        ]
      }
    }
  }
</script>