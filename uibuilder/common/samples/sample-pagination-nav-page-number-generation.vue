<template>
  <div class="overflow-auto">
      <h3>Pagination Nav-Page number generation</h3>
    <b-pagination-nav
      :link-gen="linkGen"
      :page-gen="pageGen"
      :number-of-pages="links.length"
    ></b-pagination-nav>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        links: ['#foo', '#bar', '#baz', '#faz']
      }
    },
    methods: {
      linkGen(pageNum) {
        return this.links[pageNum - 1]
      },
      pageGen(pageNum) {
        return this.links[pageNum - 1].slice(1)
      }
    }
  }
</script>