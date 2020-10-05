<template>
  <div>
      <h3>Form-Tags-Using a pre-defined set of tags</h3>
    <b-form-group label="Tagged input using select">
      <!-- prop `add-on-change` is needed to enable adding tags vie the `change` event -->
      <b-form-tags v-model="value" size="lg" add-on-change no-outer-focus class="mb-2">
        <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>
          <b-form-select
            v-bind="inputAttrs"
            v-on="inputHandlers"
            :disabled="disabled || availableOptions.length === 0"
            :options="availableOptions"
          >
            <template v-slot:first>
              <!-- This is required to prevent bugs with Safari -->
              <option disabled value="">Choose a tag...</option>
            </template>
          </b-form-select>
        </template>
      </b-form-tags>
    </b-form-group>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
        value: []
      }
    },
    computed: {
      availableOptions() {
        return this.options.filter(opt => this.value.indexOf(opt) === -1)
      }
    }
  }
</script>