<template>
    <div>
        <h3>Breadcrumb-Overview</h3>
        <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    }
  }
</script>