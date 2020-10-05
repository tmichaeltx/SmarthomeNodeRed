<template>
  <div>
      <h3>Form-Textarea-Formatter support</h3>
    <b-form-group
      class="mb-0"
      label="Textarea with formatter (on input)"
      label-for="textarea-formatter"
      description="We will convert your text to lowercase instantly"
    >
      <b-form-textarea
        id="textarea-formatter"
        v-model="text1"
        placeholder="Enter your text"
        :formatter="formatter"
      ></b-form-textarea>
    </b-form-group>
    <p style="white-space: pre-line"><b>Value:</b> {{ text1 }}</p>

    <b-form-group
      class="mb-0"
      label="Textarea with lazy formatter (on blur)"
      label-for="textarea-lazy"
      description="This one is a little lazy!"
    >
      <b-form-textarea
        id="textarea-lazy"
        v-model="text2"
        placeholder="Enter your text"
        lazy-formatter
        :formatter="formatter"
      ></b-form-textarea>
    </b-form-group>
    <p class="mb-0" style="white-space: pre-line"><b>Value:</b> {{ text2 }}</p>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        text1: '',
        text2: ''
      }
    },
    methods: {
      formatter(value) {
        return value.toLowerCase()
      }
    }
  }
</script>