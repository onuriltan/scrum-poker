<template>
  <div class="row ">
    <div class="col">
      <b-table class="h-100" bordered :items="storyList"></b-table>
    </div>
    <div class="col">
      <ActiveStory/>
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
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>