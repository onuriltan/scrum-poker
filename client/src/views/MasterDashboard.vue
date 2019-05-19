<template>
  <div class="row">
    <div class="col">
      <b-table class="h-100" bordered :items="storyList"></b-table>
    </div>
    <div class="col">
      <MasterPanel :storyName="currentStory.name" :poker-name="pokerName"/>
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
        currentStory: "",
        pokerName: this.$route.params.pokerName
      }
    },
    mounted() {
      this.getStories()
      this.currentStory = this.getCurrentStory()
    },
    methods: {
      getStories() {
        pokerService.getStories(this.pokerName).then(res => {
          this.storyList = res.data
          this.currentStory = this.storyList.find(story => {return story.status === 'Not Voted'})
        }).catch(err => {
          console.log(err)
        })
      },
      getVotes() {
        pokerService.getVotes(this.pokerName, this.currentStory).then(res => {
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