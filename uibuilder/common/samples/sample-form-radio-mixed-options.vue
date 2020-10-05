<template>
  <div>
                <h3>Form-Radio Inputs-Mixed options</h3>
    <b-form-group label="Radios using options and slots">
      <b-form-radio-group
        id="radio-slots"
        v-model="selected"
        :options="options"
        name="radio-options-slots"
      >
        <!-- Radios in this slot will appear first -->
        <template v-slot:first>
          <b-form-radio value="first">Toggle this custom radio from slot first</b-form-radio>
        </template>

        <!-- Radios in the default slot will appear after any option generated radios -->
        <b-form-radio :value="{ fourth: 4 }">This is the 4th radio</b-form-radio>
        <b-form-radio value="fifth">This is the 5th radio</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        selected: '',
        options: [
          { text: 'Or toggle this other custom radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
        ]
      }
    }
  }
</script>