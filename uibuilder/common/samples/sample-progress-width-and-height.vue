<template>
  <div>
      <h3>Progress-Width and height</h3>
    <h5>Default width</h5>
    <b-progress :value="value" class="mb-3"></b-progress>

    <h5>Custom widths</h5>
    <b-progress :value="value" class="w-75 mb-2"></b-progress>
    <b-progress :value="value" class="w-50 mb-2"></b-progress>
    <b-progress :value="value" class="w-25"></b-progress>
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