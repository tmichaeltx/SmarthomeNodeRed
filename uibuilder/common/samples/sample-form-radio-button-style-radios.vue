<template>
  <div>
                <h3>Form-Radio Inputs-Button style radios</h3>

    <b-form-group label="Button style radios">
      <b-form-radio-group
        id="btn-radios-1"
        v-model="selected"
        :options="options"
        buttons
        name="radios-btn-default"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Button style radios with outline-primary variant and size lg">
      <b-form-radio-group
        id="btn-radios-2"
        v-model="selected"
        :options="options"
        buttons
        button-variant="outline-primary"
        size="lg"
        name="radio-btn-outline"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Stacked button style radios">
      <b-form-radio-group
        id="btn-radios-3"
        v-model="selected"
        :options="options"
        buttons
        stacked
        name="radio-btn-stacked"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        selected: 'radio1',
        options: [
          { text: 'Radio 1', value: 'radio1' },
          { text: 'Radio 3', value: 'radio2' },
          { text: 'Radio 3 (disabled)', value: 'radio3', disabled: true },
          { text: 'Radio 4', value: 'radio4' }
        ]
      }
    }
  }
</script>