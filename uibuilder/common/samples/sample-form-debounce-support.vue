<template>
  <div>
    <h3>Form-Input-Debounce support</h3>

    <b-form-input v-model="value" type="text" debounce="500"></b-form-input>
    <div class="mt-2">Value: "{{ value }}"</div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: ''
      }
    }
  }
</script>