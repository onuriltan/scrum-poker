<template>
  <div>
    <div class="row ">
      <div class="col pb-4">
        <div style="font-size: 25px; text-align: right">
          Active Story: <b>{{currentStoryName}}</b>
        </div>
      </div>
    </div>
    <div class="row ">
      <div class="col">
        <b-table class="h-100" bordered :items="storyList"></b-table>
      </div>
      <div class="col">
        <VotePanel :voter="voter" :storyName="currentStoryName" :pokerName="pokerName"/>
      </div>
    </div>
  </div>

</template>

<script>
  import pokerService from '../services/poker.service'
  import VotePanel from "../components/VotePanel";

  export default {
    name: "TeamBoard",
    components: {VotePanel},
    data() {
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