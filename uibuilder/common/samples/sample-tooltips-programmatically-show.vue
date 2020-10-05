<template>
  <div class="text-center">
                <h3>Tooltips-Programmatically show and hide tooltip</h3>
    <div>
      <b-button id="tooltip-button-1" variant="primary">I have a tooltip</b-button>
    </div>

    <div class="mt-3">
      <b-button @click="show = !show">Toggle Tooltip</b-button>
    </div>

    <b-tooltip :show.sync="show" target="tooltip-button-1" placement="top">
      Hello <strong>World!</strong>
    </b-tooltip>
  </div>
</template>
<script>
module.exports = {
    data: {
      show: true
    }
  }
</script>