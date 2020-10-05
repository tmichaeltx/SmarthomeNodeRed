<template>
  <div>
                <h3>Form-Radio Inputs-Non-custom style radio inputs</h3>
    <b-form-group label="Plain inline radios">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        plain
        name="plain-inline"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Plain stacked radios">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        plain
        stacked
        name="plain-stacked"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        selected: 'first',
        options: [
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
        ]
      }
    }
  }
</script>