<template>
  <div class="d-flex flex-column text-md-center">
      <h3>Popover-Programmatically disabling popover 2</h3>
    <div class="p-2">
      <b-button id="popover-button-disable-event" variant="primary">I have a popover</b-button>
    </div>

    <div class="p-2">
      <b-button class="px-1" @click="onEnable">Enable</b-button>
      <b-button class="px-1" @click="onDisable">Disable</b-button>
    </div>

    <b-popover ref="popover" target="popover-button-disable-event" title="Popover">
      Hello <strong>World!</strong>
    </b-popover>
  </div>
</template>

<script>
module.exports = {
    methods: {
      onEnable() {
        this.$refs.popover.$emit('enable')
      },
      onDisable() {
        this.$refs.popover.$emit('disable')
      }
    }
  }
</script>