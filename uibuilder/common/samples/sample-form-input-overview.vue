<template>
  <div>
                <h3>Form-Input-Overview</h3>
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        text: ''
      }
    }
  }
</script>