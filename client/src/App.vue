<template>
  <div id="app">
    <div class="container mt-5">
      <Logo />
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import Logo from "./components/Logo";
  export default {
    components: {Logo}
  }
</script>