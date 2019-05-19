<template>
  <b-table class="h-100 rounded" bordered :items="stories"></b-table>
</template>

<script>
  export default {
    name: "StoryTable",
    props: {
      storyList: Array,
      currentStory: String
    },
    data(){
      return {
        stories: this.storyList
      }
    },
    mounted() {
      this.stories = this.storyList
      this.addStyleToCurrentStory()
    },
    methods: {
      addStyleToCurrentStory() {
        for (let story of this.stories) {
          if (story.name === this.currentStory) {
            story._rowVariant = 'success'
          }
        }
      }
    },
    watch: {
      storyList: function(newVal, oldVal) {
        if(newVal !== oldVal){
          this.stories = this.storyList
          this.addStyleToCurrentStory()
        }
      }
    }
  }
</script>
