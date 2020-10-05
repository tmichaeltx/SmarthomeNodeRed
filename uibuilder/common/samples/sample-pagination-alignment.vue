<template>
  <div class="overflow-auto">
      <h3>Pagination-Alignment</h3>
    <div>
      <h6>Left alignment (default)</h6>
      <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Center alignment</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-right">Right (end) alignment</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" align="right"></b-pagination>
    </div>

    <div class="mt-3">
      <h6 class="text-center">Fill alignment</h6>
      <b-pagination v-model="currentPage" :total-rows="rows" align="fill"></b-pagination>
    </div>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        rows: 100,
        currentPage: 3
      }
    }
  }
</script>