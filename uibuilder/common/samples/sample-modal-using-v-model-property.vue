<template>
  <div>
    <h3>Modals-Using v-model property</h3>

    <b-button @click="modalShow = !modalShow">Open Modal</b-button>

    <b-modal v-model="modalShow">Hello From Modal!</b-modal>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        modalShow: false
      }
    }
  }
</script>