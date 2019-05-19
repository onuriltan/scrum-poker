<template>
  <div class="row">
    <div class="col">
      <b-table class="h-100" bordered :items="storyList"></b-table>
    </div>
    <div class="col">
      <MasterPanel :storyName="currentStoryName" :pokerName="pokerName" :voteList="voteList"/>
    </div>
    <div class="col">
      <ActiveStory />
    </div>
  </div>
</template>

<script>
  import pokerService from '../services/poker.service'
  import MasterPanel from "../components/MasterPanel";
  import ActiveStory from "../components/ActiveStory";

  export default {
    name: "MasterDashboard",
    components: {ActiveStory, MasterPanel},
    data() {
      return {
        storyList: [],
        voteList: [],
        currentStoryName: '',
        pokerName: this.$route.params.pokerName
      }
    },
    mounted() {
      this.getStories()
    },
    methods: {
      getStories() {
        pokerService.getStories(this.pokerName).then(res => {
          this.storyList = res.data
          this.currentStoryName = this.getCurrentStory().name
          this.getVotes()
        }).catch(err => {
          console.log(err)
        })
      },
      getVotes() {
        pokerService.getVotes(this.pokerName, this.currentStoryName).then(res => {
          this.voteList = res.data
        }).catch(err => {
          console.log(err)
        })
      },
      getCurrentStory() {
        return this.storyList.find(story => {return story.status === 'Not Voted'})
      }
    }
  }
</script>

<style scoped>
</style>