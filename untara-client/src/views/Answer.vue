<template>
  <div>
    <h1>Hi This is Feedback Page</h1>
    <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">p1</th>
              <th scope="col">p2</th>
              <th scope="col">p3</th>
              <th scope="col">p4</th>
              <th scope="col">p5</th>
            </tr>
          </thead>
          <tbody v-for="(answer, i) in getAnswer" :key="i">
            <tr>
              <td>{{i+1}}</td>
              <td>{{answer.p1}}</td>
              <td>{{answer.p2}}</td>
              <td>{{answer.p3}}</td>
              <td>{{answer.p4}}</td>
              <td>{{answer.p5}}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Answer',
  methods: {
    fetchAnswer () {
      this.$store.dispatch('fetchAnswer')
    }
  },
  created () {
    this.fetchAnswer()
  },
  computed: {
    getAnswer () {
      return this.$store.state.answers
    }
  }
}
</script>

<style>

</style>
