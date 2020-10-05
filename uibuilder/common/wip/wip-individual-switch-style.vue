<template>
  <div>
      <h3>WIP Switch</h3>
    <b-form-checkbox v-model="mikestate" size="lg" name="check-button" switch>
      Switch Checkbox <b>(Checked: {{ mikestate }})</b>
    </b-form-checkbox>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
      }
    },
    props: {
      mikestate: {
        type: "string",
        default: "true",
        required: "true"
      }
    },
    methods:{
      select() {
        this.$emit('lightstate', this.name)
      }
    }
      
    // computed: {
    //   checked() {
    //     return Boolean(this.value)
    //   }
    // }
  }
</script>
