<template>
  <div class="logo-container">
    <img src="../assets/poker.svg" class="logo-container__img" alt="logo"/>
    <div class="logo-container__name"> Scrum Poker</div>
  </div>
</template>

<script>
  export default {
    name: "Logo"
  }
</script>

<style scoped lang="scss">
  .logo-container {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    &__img {
      width: 50px;
      height: 50px;
    }
    &__name {
      font-size: 24px;
      font-weight: bold;
      margin-left: 10px;
    }
  }

</style>