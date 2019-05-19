<template>
  <div class="home">
    <b-alert show variant="danger" v-if="error">{{error}}</b-alert>
    <b-form @submit.prevent="createPoker" novalidate>
      <div class="row">
        <div class="col-md">
          <b-form-group id="poker-name" label="Poker Name" label-for="poker-name">
            <b-form-input v-model="form.name" type="text" :state="inValidPokerName"
                          @keydown.native="validatePokerName"></b-form-input>
            <b-form-invalid-feedback :state="inValidPokerName">
             {{errors.pokerName}}
            </b-form-invalid-feedback>
          </b-form-group>
        </div>
        <div class="col-md">
          <b-form-group id="num-voters" label="Number of Voters" label-for="num-voters">
            <b-form-input v-model="form.voterCount" :state="inValidVoterCount"
                          @keydown.native="validateVoterCount"></b-form-input>
            <b-form-invalid-feedback :state="inValidVoterCount">
              {{errors.voterCount}}
            </b-form-invalid-feedback>
          </b-form-group>
        </div>
      </div>
      <b-form-group id="story-list" label="Story List" label-for="story-list">
        <b-form-textarea v-model="form.storyList" rows="6"
                         :state="inValidStoryList"
                         @keydown.native="validateStoryList"></b-form-textarea>
        <b-form-invalid-feedback :state="inValidStoryList">
          {{errors.voterCount}}
        </b-form-invalid-feedback>
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
  import validationService from '../services/validation.service'

  export default {
    name: 'CreatePoker',
    data() {
      return {
        form: {
          name: 'p1',
          voterCount: 3,
          storyList: 's1'
        },
        errors: {
          pokerName: null,
          voterCount: null,
          storyList: null
        },
        error: null,
        loading: false
      }
    },
    computed: {
      inValidPokerName() {
        return this.errors.pokerName === null
      },
      inValidVoterCount() {
        return this.errors.voterCount === null
      },
      inValidStoryList() {
        return this.errors.storyList === null
      },
    },
    methods: {
      validatePokerName () {
        setTimeout(() => {
          this.errors.pokerName = validationService.pokerName(this.form.name)
        }, 600)
      },
      validateVoterCount () {
        setTimeout(() => {
          this.errors.voterCount = validationService.voters(this.form.voterCount)
        }, 600)
      },
      validateStoryList () {
        setTimeout(() => {
          this.errors.storyList = validationService.storyList(this.form.storyList)
        }, 600)
      },
      async createPoker() {
        this.errors.pokerName = validationService.pokerName(this.form.name);
        this.errors.voterCount = validationService.voters(this.form.voterCount);
        this.errors.storyList = validationService.storyList(this.form.storyList);

        if (!this.errors.pokerName && !this.errors.voterCount && !this.errors.storyList) {
          let storyList = this.toArray(this.form.storyList)
          let data = {name: this.form.name, voterCount: this.form.voterCount, storyList}
          this.loading = true
          pokerService.create(data).then((res) => {
            this.error = null
            this.loading = false
            this.$router.push({name: 'master-dashboard', params: {pokerName: res.data.pokerName}})
          }).catch(error => {
            this.error = error.data.error
            this.loading = false
          })
        }
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
