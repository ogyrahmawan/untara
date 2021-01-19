<template>
  <div class="product-page">
    <h1>Product Page</h1>
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Menu Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-for="(product,i) in getProduct" :key="i">
            <tr>
              <td>{{i+1}}</td>
              <td><img class="menu-img" :src="product.image"></td>
              <td>{{product.name}}</td>
              <td>
                <button class="btn-danger">See Detail</button>
                <EditProduct :product="product"></EditProduct>
                <button class="btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <AddProduct></AddProduct>
      </div>
  </div>
</template>

<script>
import AddProduct from '../components/addProduct'
import EditProduct from '../components/editProduct'
export default {
  name: 'Product',
  components: {
    AddProduct,
    EditProduct
  },
  data () {
    return {}
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    getProduct () {
      return this.$store.state.menus
    }
  }
}
</script>

<style>
.menu-img {
  width: 10vw
}
</style>
