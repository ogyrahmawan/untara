<template>
  <div>
    <b-button class="btnPlus" id="toggle-btn" @click="toggleModal">+</b-button>
    <b-modal ref="my-modal" hide-footer title="Add Product">
      <div class="d-block text-center">
        <form @submit.prevent="addProduct">
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input v-model="name" type="text" class="form-control" required>
        </div>
        <div class="mb-3">
            <label class="form-label">Image</label>
            <input v-model="image" type="text" class="form-control" required>
        </div>
        <div class="mb-3">
            <label class="form-label">Type</label>
            <input v-model="type" type="text" class="form-control" required>
        </div>
        <div class="mb-3">
            <label class="form-label">Note</label>
            <input v-model="note" type="text" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-danger">Submit</button>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image: '',
      type: '',
      note: ''
    }
  },
  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    toggleModal () {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    addProduct () {
      const obj = {
        name: this.name,
        image: this.image,
        type: this.type,
        note: this.note
      }
      this.$store.dispatch('addProduct', obj)
      this.hideModal()
      this.name = ''
      this.image = ''
      this.type = ''
      this.note = ''
    }
  }
}
</script>

<style>
.btnPlus {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #8c0000; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 100%; /* Rounded corners */
  width: 5vw;
  height: 5vw;
  font-size: 1.5rem; /* Increase font size */
}
</style>
