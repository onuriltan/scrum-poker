<template>
    <b-card class="card-body h-100" body-class="card-body">
      <div class=" h-100 d-flex flex-wrap justify-content-center">
        <b-button style="width: 60px; height: 40px; margin: 10px" v-for="number in numbers" :key="number" :disabled="disableButton"
                  variant="outline-success" @click="makeVote(number)">{{number}}
        </b-button>
        <div class="pt-4"> {{voteLabel}}</div>
      </div>
    </b-card>
</template>

<script>
  import pokerService from "../services/poker.service"

  export default {
    name: "ActiveStory",
    data() {
      return {
        numbers: [],
        voteLabel: 'Please vote !!',
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
        }).catch(err => {
          console.log(err)
        })
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
    padding: 10px;
  }
</style>