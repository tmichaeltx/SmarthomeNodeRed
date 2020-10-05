<template>
  <div>
                <h3>Form-Radio Inputs-Grouped radios</h3>

    <b-form-group label="Radios using options">
      <b-form-radio-group
        id="radio-group-1"
        v-model="selected"
        :options="options"
        name="radio-options"
      ></b-form-radio-group>
    </b-form-group>

    <b-form-group label="Radios using sub-components">
      <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">
        <b-form-radio value="first">Toggle this custom radio</b-form-radio>
        <b-form-radio value="second">Or toggle this other custom radio</b-form-radio>
        <b-form-radio value="third" disabled>This one is Disabled</b-form-radio>
        <b-form-radio :value="{ fourth: 4 }">This is the 4th radio</b-form-radio>
      </b-form-radio-group>
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
          { text: 'Toggle this custom radio', value: 'first' },
          { text: 'Or toggle this other custom radio', value: 'second' },
          { text: 'This one is Disabled', value: 'third', disabled: true },
          { text: 'This is the 4th radio', value: { fourth: 4 } }
        ]
      }
    }
  }
</script>