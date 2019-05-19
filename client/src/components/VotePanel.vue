<template>
    <b-card class="card-body h-100" body-class="card-body">
      <div class="d-flex flex-wrap justify-content-center">
        <b-button style="width: 60px; height: 40px; margin: 10px" v-for="number in numbers" :key="number" :disabled="disableButton"
                  variant="outline-success" @click="makeVote(number)">{{number}}
        </b-button>
      </div>
      <div class="pt-1 text-center"> {{voteLabel}}</div>
    </b-card>
</template>

<script>
  import pokerService from "../services/poker.service"

  export default {
    name: "VotePanel",
    data() {
      return {
        numbers: [],
        voteLabel: 'Please vote !',
        point: null,
        disableButton: false
      }
    },
    props: {
      storyName: String,
      voter: String,
      pokerName: String,
    },
    mounted() {
      this.numbers = this.fibonacci(10)
      this.numbers.push('?')
    },
    methods: {
      fibonacci(n) {
        if (n === 0) return [1]
        if (n === 1) return [1, 2]
        const arr = this.fibonacci(n - 1)
        return [...arr, arr[n - 1] + arr[n - 2]]
      },
      makeVote(point) {
        pokerService.makeVote(this.storyName, this.pokerName, point, this.voter).then(() => {
          this.disableButton = true
          this.voteLabel = point + " voted"
        }).catch(err => {
          console.log(err)
        })
      }
    },
    watch: {
      storyName: function(newVal, oldVal) {
        if(newVal !== oldVal){
          this.disableButton = false
          this.voteLabel = "Please vote !"

        }
      }
    }
  }
</script>

<style scoped>
  .card-body {
    padding: 10px;
  }
</style>