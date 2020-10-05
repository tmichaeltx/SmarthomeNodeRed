<template>
  <div class="overflow-auto">
      <h3>Pagination-Button size</h3>
    <div>
      <h6>Small</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Default</h6>
      <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Large</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" size="lg"></b-pagination>
    </div>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        rows: 100,
        currentPage: 1
      }
    }
  }
</script>