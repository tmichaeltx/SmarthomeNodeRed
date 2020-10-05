<template>
  <div>
      <h3>Form-Checkbox-Grouped button style checkboxes</h3>
    <b-form-group label="Button-group style checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        name="buttons-1"
        buttons
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Button-group style checkboxes with variant primary and large buttons">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        buttons
        button-variant="primary"
        size="lg"
        name="buttons-2"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Stacked (vertical) button-group style checkboxes">
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        stacked
        buttons
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