<template>
<div>
              <h3>Form-File-File name formatter function</h3>

  <b-form-file multiple :file-name-formatter="formatNames"></b-form-file>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      formatNames(files) {
        if (files.length === 1) {
          return files[0].name
        } else {
          return `${files.length} files selected`
        }
      }
    }
  }
</script>