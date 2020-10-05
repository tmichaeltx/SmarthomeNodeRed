<template>
  <div class="overflow-auto">
      <h3>Pagination Nav-Goto first/last button type</h3>
    <div>
      <h6>Goto first button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Goto last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        last-number
      ></b-pagination-nav>
    </div>

    <div class="mt-3">
      <h6>Goto first and last button number</h6>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        first-number
        last-number
      ></b-pagination-nav>
    </div>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        pages: 100,
        currentPage: 5
      }
    }
  }
</script>