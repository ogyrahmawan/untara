<template>
  <div>
    <b-button class="btn-danger mt-2 mb-2" id="toggle-btn" @click="toggleModal">Edit</b-button>
    <b-modal ref="my-modal" hide-footer title="Edit Product">
      <div class="d-block text-center">
        <form @submit.prevent="editProduct">
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
  name: 'EditProduct',
  props: ['product'],
  data () {
    return {
      name: this.product.name,
      image: this.product.image,
      type: this.product.type,
      note: this.product.note
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
    editProduct () {
      const obj = {
        id: this.product.id,
        name: this.name,
        image: this.image,
        type: this.type,
        note: this.note
      }
      this.$store.dispatch('editProduct', obj)
      this.hideModal()
    }
  }
}
</script>

<style>

</style>
