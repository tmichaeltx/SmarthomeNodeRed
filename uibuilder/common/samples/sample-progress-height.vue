<template>
  <div>
      <h3>Progress-Height</h3>
    <h5>Default height</h5>
    <b-progress :value="value" show-progress class="mb-3"></b-progress>

    <h5>Custom heights</h5>
    <b-progress height="2rem" :value="value" show-progress class="mb-2"></b-progress>
    <b-progress height="20px" :value="value" show-progress class="mb-2"></b-progress>
    <b-progress height="2px" :value="value"></b-progress>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        value: 75
      }
    }
  }
</script>