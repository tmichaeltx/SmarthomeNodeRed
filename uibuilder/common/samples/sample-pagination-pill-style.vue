<template>
  <div class="overflow-auto">
      <h3>Pagination-Pill style</h3>
    <div>
      <h6>Small Pills</h6>
      <b-pagination v-model="currentPage" pills :total-rows="rows" size="sm"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Default Pills</h6>
      <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Large Pills</h6>
      <b-pagination v-model="currentPage" pills :total-rows="rows" size="lg"></b-pagination>
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