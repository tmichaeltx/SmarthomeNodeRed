<template>
  <div>
      <h3>Progress-Animated backgrounds</h3>
    <b-progress :value="25" variant="success" striped :animated="animate"></b-progress>
    <b-progress :value="50" variant="info" striped :animated="animate" class="mt-2"></b-progress>
    <b-progress :value="75" variant="warning" striped :animated="animate" class="mt-2"></b-progress>
    <b-progress :value="100" variant="danger" :animated="animate" class="mt-3"></b-progress>

    <b-button variant="secondary" @click="animate = !animate" class="mt-3">
      {{ animate ? 'Stop' : 'Start' }} Animation
    </b-button>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        animate: true
      }
    }
  }
</script>