<template>
  <div>
  <h3>Table-Responsive tables</h3>
    <b-table responsive :items="items"></b-table>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        items: [
          {
            heading1: 'table cell',
            heading2: 'table cell',
            heading3: 'table cell',
            heading4: 'table cell',
            heading5: 'table cell',
            heading6: 'table cell',
            heading7: 'table cell',
            heading8: 'table cell',
            heading9: 'table cell',
            heading10: 'table cell',
            heading11: 'table cell',
            heading12: 'table cell'
          },
          {
            heading1: 'table cell',
            heading2: 'table cell',
            heading3: 'table cell',
            heading4: 'table cell',
            heading5: 'table cell',
            heading6: 'table cell',
            heading7: 'table cell',
            heading8: 'table cell',
            heading9: 'table cell',
            heading10: 'table cell',
            heading11: 'table cell',
            heading12: 'table cell'
          },
          {
            heading1: 'table cell',
            heading2: 'table cell',
            heading3: 'table cell',
            heading4: 'table cell',
            heading5: 'table cell',
            heading6: 'table cell',
            heading7: 'table cell',
            heading8: 'table cell',
            heading9: 'table cell',
            heading10: 'table cell',
            heading11: 'table cell',
            heading12: 'table cell'
          }
        ]
      }
    }
  }
</script>