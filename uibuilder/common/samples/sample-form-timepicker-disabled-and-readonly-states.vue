<template>
  <div>
      <h3>Form-Timepicker-Disabled and readonly states</h3>
    <b-form-group label="Select time picker interactive state">
      <b-form-radio-group v-model="state" aria-controls="ex-disabled-readonly">
        <b-form-radio value="disabled">Disabled</b-form-radio>
        <b-form-radio value="readonly">Readonly</b-form-radio>
        <b-form-radio value="normal">Normal</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <b-form-timepicker id="ex-disabled-readonly" :disabled="disabled" :readonly="readonly"></b-form-timepicker>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        state: 'disabled'
      }
    },
    computed: {
      disabled() {
        return this.state === 'disabled'
      },
      readonly() {
        return this.state === 'readonly'
      }
    }
  }
</script>