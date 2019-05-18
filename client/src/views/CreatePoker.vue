<template>
  <div class="home pt-5">
    <b-alert show variant="danger" v-if="error">{{error}}</b-alert>
    <b-form @submit.prevent="createPoker">
      <div class="row">
        <div class="col-md">
          <b-form-group id="poker-name" label="Poker Name" label-for="poker-name">
            <b-form-input v-model="form.name" type="text" required></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md">
          <b-form-group id="num-voters" label="Number of Voters" label-for="num-voters">
            <b-form-input v-model="form.voterCount" required></b-form-input>
          </b-form-group>
        </div>
      </div>
      <b-form-group id="story-list" label="Story List" label-for="story-list">
        <b-form-textarea v-model="form.storyList" rows="6" required></b-form-textarea>
      </b-form-group>
      <b-button class="mt-5 float-right" type="submit" variant="primary">
        <font-awesome-icon icon="sync-alt" spin v-if="loading"/>
        Start Session
      </b-button>
    </b-form>
  </div>
</template>

<script>
  import pokerService from '../services/poker.service'

  export default {
    name: 'CreatePoker',
    data() {
      return {
        form: {
          name: '',
          voterCount: '',
          storyList: ''
        },
        error: null,
        loading: false
      }
    },
    methods: {
      async createPoker() {
        let storyList = this.toArray(this.form.storyList)
        let data = {name: this.form.name, voterCount: this.form.voterCount, storyList}
        this.loading = true
        pokerService.create(data).then((res) => {
          this.error = null
          this.loading = false
          this.$router.push({ name: 'master-dashboard', params: { pokerName: res.data.pokerName }})
        }).catch(error => {
          this.error = error.data.error
          this.loading = false
        })
      },
      toArray(input) {
        let array = input.split('\n');
        return array.filter(str => {
          return str.length > 0 && Boolean
        });
      }
    }
  }
</script>
