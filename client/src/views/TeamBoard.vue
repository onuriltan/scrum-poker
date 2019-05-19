<template>
  <div class="row ">
    <div class="col">
      <b-table class="h-100" bordered :items="storyList"></b-table>
    </div>
    <div class="col">
      <ActiveStory :voter="voter" :storyName="currentStoryName" :pokerName="pokerName"/>
    </div>
  </div>
</template>

<script>
  import pokerService from '../services/poker.service'
  import ActiveStory from "../components/ActiveStory";

  export default {
    name: "TeamBoard",
    components: {ActiveStory},
    data(){
      return {
        storyList: [],
        voter: "Voter",
        currentStoryName: '',
        pokerName: this.$route.params.pokerName
      }
    },
    mounted() {
      this.getStories()
      setInterval(this.getStories, 2000)
    },
    methods: {
      getStories() {
        pokerService.getStories(this.pokerName).then(res => {
          this.storyList = res.data
          this.currentStoryName = this.getCurrentStory().name
        }).catch(err => {
          console.log(err)
        })
      },
      getCurrentStory() {
        return this.storyList.find(story => {
          return story.status === 'Not Voted'
        })
      },
    }
  }
</script>

<style scoped>

</style>