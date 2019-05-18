<template>
  <div class="home pt-5">
    <b-form @submit="onSubmit" v-if="show">
      <div class="row">
        <div class="col-md">
          <b-form-group id="poker-name" label="Poker Name:" label-for="poker-name">
            <b-form-input v-model="form.poker_name" type="text" required></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md">
          <b-form-group id="num-voters" label="Number of Voters:" label-for="num-voters">
            <b-form-input v-model="form.num_voters" required></b-form-input>
          </b-form-group>
        </div>
      </div>
      <b-form-group id="story-list" label="Story List" label-for="story-list">
        <b-form-textarea id="input-3" v-model="form.food" required></b-form-textarea>
      </b-form-group>

      <b-button class="mt-5 float-right" type="submit" variant="primary">Start Session</b-button>

    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'CreatePoker',
    data() {
      return {
        form: {
          poker_name: '',
          num_voters: '',
          story_list: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {

      },
    }
  }
</script>
