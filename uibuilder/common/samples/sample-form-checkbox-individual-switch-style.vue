<template>
  <div>
      <h3>Form-Checkbox-Individual checkbox switch style</h3>
    <b-form-checkbox v-model="checked" name="check-button" switch>
      Switch Checkbox <b>(Checked: {{ checked }})</b>
    </b-form-checkbox>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        checked: true
      }
    }
  }
</script>