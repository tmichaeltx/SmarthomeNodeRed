<template>
  <div>
      <h3>Form-Rating-Styling-Number of stars</h3>
    <label for="rating-10">Rating with 10 stars:</label>
    <b-form-rating id="rating-10" v-model="value10" stars="10"></b-form-rating>
    <p class="mt-2">Value: {{ value10 }}</p>

    <label for="rating-7">Rating with 7 stars:</label>
    <b-form-rating id="rating-7" v-model="value7" stars="7"></b-form-rating>
    <p class="mt-2">Value: {{ value7 }}</p>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value10: null,
        value7: null,
      }
    }
  }
</script>