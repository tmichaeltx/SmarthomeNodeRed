// current-user.vue
<template>
  <span>
    <slot v-bind:user="user">
      {{ user.lastName }}
    </slot>
    <slot name="mikeslot" v-bind:bother="nother">could put text here or use mustache to pull from data {{nother.lastName}}</slot>
  </span>
</template>

<script>
  module.exports = {
  data () {
    return {
      user: {
          firstName:'mike',
          lastName:'smith',
          number:10
      },
      nother:  {
          firstName:'gwen',
          lastName:'thomas',
          number:11
      }
    }
  }
}
</script>