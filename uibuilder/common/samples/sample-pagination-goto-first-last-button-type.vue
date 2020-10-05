<template>
  <div class="overflow-auto">
      <h3>Pagination-Goto first/last button type</h3>
    <div>
      <h6>Goto first button number</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
      ></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Goto last button number</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        last-number
      ></b-pagination>
    </div>

    <div class="mt-3">
      <h6>Goto first and last button number</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
      ></b-pagination>
    </div>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        rows: 100,
        perPage: 1,
        currentPage: 5
      }
    }
  }
</script>