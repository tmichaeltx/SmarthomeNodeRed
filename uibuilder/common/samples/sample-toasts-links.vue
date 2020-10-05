<template>
  <div>
      <h3>Toasts-Links</h3>
    <b-button @click="toast()">Toast with link</b-button>
  </div>
</template>

<script>
module.exports = {
    methods: {
      toast() {
        this.$bvToast.toast(`Toast with action link`, {
          href: '#foo',
          title: 'Example'
        })
      }
    }
  }
</script>