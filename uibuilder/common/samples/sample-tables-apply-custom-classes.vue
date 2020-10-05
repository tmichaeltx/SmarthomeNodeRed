<template>
  <div>
      <h3>Table-Apply custom classes to the generated nav-tabs or pills</h3>
    <b-card no-body>
      <b-tabs v-model="tabIndex" card>
        <b-tab title="Tab 1" :title-link-class="linkClass(0)">Tab contents 1</b-tab>
        <b-tab title="Tab 2" :title-link-class="linkClass(1)">Tab contents 2</b-tab>
        <b-tab title="Tab 3" :title-link-class="linkClass(2)">Tab contents 3</b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
module.exports = {
    data() {
      return {
        tabIndex: 0
      }
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      }
    }
  }
</script>