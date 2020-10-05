<template>
  <div class="overflow-auto">
      <h3>Pagination Nav-Overview</h3>
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router></b-pagination-nav>
  </div>
</template>

<script>
module.exports = {
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
  }
</script>