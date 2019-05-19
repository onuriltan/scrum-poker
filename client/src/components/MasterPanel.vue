<template>
  <div class="h-100">
    <b-card class="h-100 card-body" body-class="card-body">
      <b-card-text v-for="vote in voteList" :key="vote.voter" class="d-flex justify-content-between">
        <div class="p-2">{{vote.voter}}</div>
        <div class="p-2 font-weight-bold">{{vote.point}}</div>
      </b-card-text>
      <b-form inline v-if="endVoteEnabled" @submit.prevent="endVoting"
              class="w-100 flex-nowrap align-items-start">
        <label class="sr-only" for="finalVote">Final Vote</label>
        <b-input id="finalVote" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Final Point"
                 v-model="finalPoint" :disabled="disableButton"></b-input>
        <b-button variant="primary" :disabled="disableButton" type="submit">End</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
  import pokerService from '../services/poker.service'
  export default {
    name: "MasterPanel",
    props: {
      storyName: String,
      pokerName: String,
      voteList: Array,
      endVoteEnabled: Boolean
    },
    data(){
      return {
        finalPoint: null,
        disableButton: false
      }
    },
    methods: {
      endVoting() {
        pokerService.endVoting(this.storyName, this.pokerName, this.finalPoint)
        this.finalPoint = null;
        this.disableButton = true
      }
    },
    watch: {
      storyName: function(newVal, oldVal) {
        if(newVal !== oldVal){
          this.disableButton = false
        }
      }
    }
  }
</script>

<style scoped>
  .card-body {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
</style>