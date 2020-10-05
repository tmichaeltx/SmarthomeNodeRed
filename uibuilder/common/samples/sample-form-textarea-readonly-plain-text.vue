<template>
  <div>
      <h3>Form-Textarea-Readonly plain text</h3>
    <b-form-textarea id="textarea-plaintext" plaintext :value="text"></b-form-textarea>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        text: "This is some text.\nIt is read only and doesn't look like an input."
      }
    }
  }
</script>