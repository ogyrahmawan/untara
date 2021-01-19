<template>
  <div class="navbar">
    <div class="center-navbar">
      <router-link to="/"><img src="../assets/Logo Untara.png"></router-link>
    </div>
    <!-- <div class="right-navbar">
        <button @click="moveToLoginPage" class="btn-dark">login</button>
    </div> -->
  </div>
</template>

<script>
export default {
  nama: 'homeNavbar',
  methods: {
    moveToLoginPage () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.navbar {
  height: 8vw;
  display: flex;
  justify-content: center;
  background-color: black;
  align-content: center;
}
.navbar img {
  height: 3vw;
}
</style>
