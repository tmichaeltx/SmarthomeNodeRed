<template>
  <div>
      <h3>Form-Textarea-Overview</h3>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

    <pre class="mt-3 mb-0">{{ text }}</pre>
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