<template>
  <div>
    <slot name="icon"><i class="fas fa-bookmark"></i></slot>

    <br>
    
    
    
    <b-form-checkbox name="switch-mike-testing" v-model="checked"  size='lg' switch>
abc
    </b-form-checkbox>
        <slot>This is the default content if nothing gets specified to go here</slot>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        checked: true,
        icon3:"fas fa-bookmark",
      }
    }
  }
</script>