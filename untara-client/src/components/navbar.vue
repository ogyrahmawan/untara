<template>
  <div class="navbar" id="nav">
    <div class="left-navbar"></div>
    <div class="center-navbar">
      <router-link to="/dashboard/product">Product</router-link> |
      <router-link to="/dashboard/answer">Feedback</router-link>
    </div>
    <div class="right-navbar">
      <button @click="logout" class="btn-dark">logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
