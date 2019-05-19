<template>
  <div>
    <div class="row ">
      <div class="col pb-4">
        <div style="font-size: 14px; text-align: center">
          Please share link to developers: <b>{{pokerURL}}</b>
        </div>
      </div>
    </div>
    <div class="row ">
      <div class="col pb-4">
        <div style="font-size: 25px; text-align: center">
          Active Story: <b>{{currentStoryName}}</b>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col mb-3">
        <StoryTable :storyList="this.storyList" :currentStory="this.currentStoryName"/>
      </div>
      <div class="col mb-3">
        <MasterPanel :storyName="currentStoryName" :pokerName="pokerName" :voteList="voteList"
                     :endVoteEnabled="endVoteEnabled"/>
      </div>
      <div class="col mb-3">
        <VotePanel :voter="voter" :storyName="currentStoryName" :pokerName="pokerName"/>
      </div>
    </div>
  </div>
</template>

<script>
  import pokerService from '../services/poker.service'
  import MasterPanel from "../components/MasterPanel";
  import VotePanel from "../components/VotePanel";
  import StoryTable from "../components/StoryTable";

  export default {
    name: "MasterBoard",
    components: {StoryTable, VotePanel, MasterPanel},
    data() {
      return {
        storyList: [],
        voteList: [],
        pokerURL: null,
        currentStoryName: '',
        voter: "Scrum Master",
        pokerName: this.$route.params.pokerName,
        endVoteEnabled: false
      }
    },
    mounted() {
      this.getPokerURL()
      this.getStories()
      setInterval(this.getStories, 2000)
    },
    methods: {
      getStories() {
        pokerService.getStories(this.pokerName).then(res => {
          this.storyList = res.data
          this.getCurrentStory()
          this.getVotes()
        }).catch(err => {
          console.log(err)
        })
      },

      getVotes() {
        pokerService.getVotes(this.pokerName, this.currentStoryName).then(res => {
          this.voteList = res.data
          this.shouldEndVote()
        }).catch(err => {
          console.log(err)
        })
      },

      getCurrentStory() {
        let currentStory = this.storyList.find(story => {
          return story.status === 'Not Voted'
        })
        if (currentStory) this.currentStoryName = currentStory.name
      },

      getPokerURL() {
        pokerService.getPokerURL(this.pokerName).then(res => {
          this.pokerURL = res.data.pokerURL
        }).catch(err => {
          console.log(err)
        })
      },

      shouldEndVote() {
        let voteCount = 0;
        let votedStoryCount = 0
        this.voteList.forEach(vote => {
          if (vote.point !== "Not Voted") voteCount += 1;
        });
        this.storyList.forEach(story => {
          if (!isNaN(story.point)) votedStoryCount += 1;
        });
        if (votedStoryCount === this.storyList.length && votedStoryCount !== 0) {
          this.endVoteEnabled = true
        }
        if (voteCount === this.voteList.length) {
          this.endVoteEnabled = true
        } else {
          this.endVoteEnabled = false
        }
      }
    }
  }
</script>
