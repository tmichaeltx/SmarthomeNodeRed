<template>
  <div>
      <h3>Table-Always stacked</h3>
    <b-table stacked :items="items"></b-table>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
        ]
      }
    }
  }
</script>