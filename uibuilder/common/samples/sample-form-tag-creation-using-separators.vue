<template>
  <div>
      <h3>Form-Tags-Creation using separators</h3>
    <label for="tags-separators">Enter tags separated by space, comma or semicolon</label>
    <b-form-tags
      input-id="tags-separators"
      v-model="value"
      separator=" ,;"
      placeholder="Enter new tags separated by space, comma or semicolon"
      no-add-on-enter
      class="mb-2"
    ></b-form-tags>
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: ['one', 'two']
      }
    }
  }
</script>