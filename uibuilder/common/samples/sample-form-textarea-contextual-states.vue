<template>
  <div>
      <h3>Form-Textarea-Contextual states</h3>
    <b-form-textarea
      id="textarea-state"
      v-model="text"
      :state="text.length >= 10"
      placeholder="Enter at least 10 characters"
      rows="3"
    ></b-form-textarea>
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