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
          {{errors.storyList}}
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
          name: null,
          voterCount: null,
          storyList: null
        },
        errors: {
          pokerName: '',
          voterCount: '',
          storyList: ''
        },
        error: null,
        loading: false,
        pokerNameEntered: false,
        voterCountEntered: false,
        storyListEntered: false
      }
    },
    computed: {
      inValidPokerName() {
        if (this.pokerNameEntered && this.errors.pokerName === null) return true
        if (this.pokerNameEntered && this.errors.pokerName !== null) return false
        return null
      },
      inValidVoterCount() {
        if (this.voterCountEntered && this.errors.voterCount === null) return true
        if (this.voterCountEntered && this.errors.voterCount !== null) return false
        return null
      },
      inValidStoryList() {
        if (this.storyListEntered && this.errors.storyList === null) return true
        if (this.storyListEntered && this.errors.storyList !== null) return false
        return null
      },
    },
    methods: {
      validatePokerName() {
        setTimeout(() => {
          this.errors.pokerName = validationService.pokerName(this.form.name)
          this.pokerNameEntered = true
        }, 500)
      },
      validateVoterCount() {
        setTimeout(() => {
          this.voterCountEntered = true
          this.errors.voterCount = validationService.voters(this.form.voterCount)
        }, 500)
      },
      validateStoryList() {
        setTimeout(() => {
          this.storyListEntered = true
          this.errors.storyList = validationService.storyList(this.toArray(this.form.storyList))
        }, 500)
      },
      createPoker() {
        this.validateForm()
        if (!this.errors.pokerName && !this.errors.voterCount && !this.errors.storyList) {
          let storyList = this.toArray(this.form.storyList)
          let data = {name: this.form.name, voterCount: this.form.voterCount, storyList}
          this.loading = true
          this.error = null
          setTimeout(() => {
            pokerService.create(data).then((res) => {
              this.error = null
              this.loading = false
              this.$router.push({name: 'master-dashboard', params: {pokerName: res.data.pokerName}})
            }).catch(error => {
              this.error = error.data.error
              this.loading = false
            })
          }, 1000)
        }
      },
      toArray(input) {
        let array = input.split('\n');
        return array.filter(str => {
          return str.length > 0 && Boolean
        });
      },
      validateForm() {
        this.errors.pokerName = validationService.pokerName(this.form.name);
        this.errors.voterCount = validationService.voters(this.form.voterCount);
        this.errors.storyList = validationService.storyList(this.toArray(this.form.storyList));
        this.pokerNameEntered = true
        this.voterCountEntered = true
        this.storyListEntered = true
      }
    }
  }
</script>
