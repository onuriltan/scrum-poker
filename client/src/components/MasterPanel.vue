<template>
  <div>
    <h4>Scrum Master Panel</h4>
    <b-card class="h-100 card-body" body-class="card-body" :title="storyName+' active'">
      <b-card-text v-for="vote in voteList" :key="vote.voter">
        <div class="p-2">{{vote.voter}} : {{vote.point}}</div>
      </b-card-text>
      <b-card-text>
        <div class="p-2">Scrum Master: Not Voted</div>
      </b-card-text>
      <b-button variant="primary" class="float-left">End Voting For Story 1</b-button>
    </b-card>
  </div>
</template>

<script>

  export default {
    name: "MasterPanel",
    props: {
      storyName: String,
      pokerName: String,
      voteList: Array
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