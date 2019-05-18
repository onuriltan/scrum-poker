<template>
  <div class="row">
    <div class="col">
      <b-table class="h-100" bordered :items="storyList"></b-table>
    </div>
    <div class="col">
      <b-card class="h-100 card-body" body-class="card-body" title="Scrum Master Panel">
        <b-card-text>
          <div class="p-2">Voter 1: Not Voted</div>
          <div class="p-2">Voter 2: Not Voted</div>
          <div class="p-2">Voter 3: Not Voted</div>
          <div class="p-2">Voter 4: Not Voted</div>
          <div class="p-2">Scrum Master: Not Voted</div>
        </b-card-text>
        <b-button variant="primary" class="float-left">End Voting For Story 1</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
  import pokerService from '../services/poker.service'

  export default {
    name: "MasterDashboard",
    data() {
      return {
        storyList: []
      }
    },
    mounted() {
      pokerService.getStoriesByPokerName(this.$route.params.pokerName).then(res => {
        this.storyList = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
.card-body {
  display: flex;justify-content: space-between;flex-direction: column;
}
</style>