<template>
  <div>
      <h3>Form Checkbox Indeterminate checkbox use-case example</h3>
    <b-form-group>
      <template v-slot:label>
        <b>Choose your flavours:</b><br>
        <b-form-checkbox
          v-model="allSelected"
          :indeterminate="indeterminate"
          aria-describedby="flavours"
          aria-controls="flavours"
          @change="toggleAll"
        >
          {{ allSelected ? 'Un-select All' : 'Select All' }}
        </b-form-checkbox>
      </template>

      <b-form-checkbox-group
        id="flavors"
        v-model="selected"
        :options="flavours"
        name="flavors"
        class="ml-4"
        aria-label="Individual flavours"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>

    <div>
      Selected: <strong>{{ selected }}</strong><br>
      All Selected: <strong>{{ allSelected }}</strong><br>
      Indeterminate: <strong>{{ indeterminate }}</strong>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        flavours: ['Orange', 'Grape', 'Apple', 'Lime', 'Very Berry'],
        selected: [],
        allSelected: false,
        indeterminate: false
      }
    },
    methods: {
      toggleAll(checked) {
        this.selected = checked ? this.flavours.slice() : []
      }
    },
    watch: {
      selected(newVal, oldVal) {
        // Handle changes in individual flavour checkboxes
        if (newVal.length === 0) {
          this.indeterminate = false
          this.allSelected = false
        } else if (newVal.length === this.flavours.length) {
          this.indeterminate = false
          this.allSelected = true
        } else {
          this.indeterminate = true
          this.allSelected = false
        }
      }
    }
  }
</script>