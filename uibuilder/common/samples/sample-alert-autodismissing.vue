<template>
  <div>
      <h3>Alerts-Auto dismissing alerts</h3>
     <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      This alert will dismiss after {{ dismissCountDown }} seconds...
    </b-alert>
    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
   </div>
</template>

<script>
   module.exports = {
      data() {
          return {
              dismissSecs: 5,
              dismissCountDown: 0
              }
        },
    methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
            this.dismissCountDown = this.dismissSecs
            }
        }
    }
</script>