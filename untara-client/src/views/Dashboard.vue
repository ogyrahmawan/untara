<template>
  <div class="dashboard">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
export default {
  name: 'Dashboard',
  components: {
    navbar
  }
}
</script>

<style>

</style>
