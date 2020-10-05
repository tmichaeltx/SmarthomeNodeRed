<template>
  <div>
      <h3>Collapse v-model support</h3>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      Toggle Collapse
    </b-button>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>I should start open!</b-card>
    </b-collapse>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        visible: true
      }
    }
  }
</script>