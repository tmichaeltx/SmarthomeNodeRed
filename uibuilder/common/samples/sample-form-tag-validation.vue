<template>
  <div>
      <h3>Form-Tags-Validation</h3>
    <b-form-group :state="state" label="Tags validation example" label-for="tags-validation">
      <b-form-tags
        input-id="tags-validation"
        :input-attrs="{ 'aria-describedby': 'tags-validation-help' }"
        v-model="tags"
        :state="state"
        :tag-validator="tagValidator"
        separator=" "
      ></b-form-tags>
      <!-- The following slots are for b-form-group -->
      <template v-slot:invalid-feedback>
        You must provide at least 3 tags and no more than 8
      </template>
      <template v-slot:description>
        <div id="tags-validation-help">
         Tags must be 3 to 5 characters in length and all lower
         case. Enter tags separated by spaces or press enter.
        </div>
      </template>
    </b-form-group>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        tags: [],
        dirty: false
      }
    },
    computed: {
      state() {
        // Overall component validation state
        return this.dirty ? (this.tags.length > 2 && this.tags.length < 9) : null
      }
    },
    watch: {
      tags(newVal, oldVal) {
        // Set the dirty flag on first change to the tags array
        this.dirty = true
      }
    },
    methods: {
      tagValidator(tag) {
        // Individual tag validator function
        return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6
      }
    }
  }
</script>