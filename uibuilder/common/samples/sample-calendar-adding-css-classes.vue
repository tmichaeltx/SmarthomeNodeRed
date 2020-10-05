<template>
  <div>
      <h3>Calendar-Adding css classes to specific dates</h3>
    <b-calendar v-model="value" :date-info-fn="dateClass" locale="en"></b-calendar>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      dateClass(ymd, date) {
        const day = date.getDate()
        return day >= 10 && day <= 20 ? 'table-info' : ''
      }
    }
  }
</script>