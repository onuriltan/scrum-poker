<template>
  <div>
    <h4>Scrum Master Panel</h4>
    <b-card class="h-100 card-body" body-class="card-body" :title="storyName+' active'">
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
</template>

<script>
  import PokerService from '../services/poker.service.js'

  export default {
    name: "MasterPanel",
    props: {
      storyName: String,
      pokerName: String
    },
    mounted() {
      PokerService.getVotes()
    }
  }
</script>

<style scoped>
  .card-body {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
</style>