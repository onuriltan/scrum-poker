<template>
  <div class="h-100">
    <h4>Active Story</h4>
    <b-card
        class="card-body" body-class="card-body" title="Story 1">
      <div class="h-100 d-flex flex-wrap justify-content-center">
        <b-button style="width: 60px; height: 40px; margin: 10px" v-for="number in numbers"
                  :key="number" variant="outline-success">{{number}}
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "ActiveStory",
    data() {
      return {
        numbers: []
      }
    },
    methods: {
      fibonacci(n) {
        if (n === 0) return [1]
        if (n === 1) return [1, 2]
        const arr = this.fibonacci(n - 1)
        return [...arr, arr[n - 1] + arr[n - 2]]
      }
    },
    mounted() {
      this.numbers = this.fibonacci(10)
      this.numbers.push('?')
    }
  }
</script>

<style scoped>
  .card-body {
    padding: 10px;
  }
</style>