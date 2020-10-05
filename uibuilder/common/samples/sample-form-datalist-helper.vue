<template>
    <div><h3>Form-Datalist helper</h3>
  <label for="input-with-list">Input with datalist</label>
  <b-form-input list="input-list" id="input-with-list"></b-form-input>
  <b-form-datalist id="input-list" :options="options"></b-form-datalist>
  </div>
</template>

<script>
  module.exports = {
  data() {
    return {
      options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange']
    }
  }
}
</script>