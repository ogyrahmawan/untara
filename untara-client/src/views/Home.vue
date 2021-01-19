<template>
  <div class="home">
    <homeNavbar></homeNavbar>
    <div class="container shadow p-2 mt-3">
      <h1>HI!</h1>
      <p class="text-center">Luangkan Waktumu, Untuk Bantu Kami Berkembang</p>
    <button class="btn-primary" @click="moveToSurveyPage">Bantu Kami</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import homeNavbar from '../components/homeNavbar'
export default {
  name: 'Home',
  components: {
    homeNavbar
  },
  methods: {
    moveToSurveyPage () {
      this.$router.push('/survey')
    }
  }
}
</script>
