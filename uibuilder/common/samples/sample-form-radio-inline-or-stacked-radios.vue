<template>
  <div>
                <h3>Form-Radio Inputs-Inline or stacked radios</h3>

    <b-form-group label="Inline radios (default)">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        name="radio-inline"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Stacked radios">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        name="radios-stacked"
        stacked
      ></b-form-radio-group>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
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