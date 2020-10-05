<template>
  <div>
      <h3>Form-Tags-Styling options</h3>
    <label for="tags-pills">Enter tags</label>
    <b-form-tags
      input-id="tags-pills"
      v-model="value"
      tag-variant="primary"
      tag-pills
      size="lg"
      separator=" "
      placeholder="Enter new tags separated by space"
      class="mb-2"
    ></b-form-tags>
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: ['apple', 'orange', 'grape']
      }
    }
  }
</script>