import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import Swal from 'sweetalert2'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [],
    answers: []
  },
  mutations: {
    setMenus (state, payload) {
      state.menus = payload
    },
    setAnswer (state, payload) {
      state.answers = payload
    }
  },
  actions: {
    createAnswer (context, payload) {
      axios({
        url: '/question',
        method: 'POST',
        data: {
          p1: payload.p1,
          p2: payload.p2,
          p3: payload.p3,
          p4: payload.p4,
          p5: payload.p5
        }
      })
        .then(res => {
          Swal.fire(`Terimakasih telah membantu kami berikut adalah ID kamu UNTARA${res.data.id} screenshoot / katakan ke barista kami dan dapatkan diskon 10%`)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchAnswer (context, payload) {
      axios({
        url: '/question',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('setAnswer', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          Swal.fire('login success')
          router.push('/dashboard/product')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProduct (context) {
      axios({
        url: '/menus',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('setMenus', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        url: '/menus',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image: payload.image,
          type: payload.type,
          note: payload.note
        }
      })
        .then(res => {
          Swal.fire(`Add Product ${res.data.name} success `)
          this.dispatch('fetchProduct')
        })
        .catch(err => {
          Swal.fire('Add Product Failed')
          console.log(err)
        })
    },
    editProduct (context, payload) {
      axios({
        url: `/menus/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image: payload.image,
          type: payload.type,
          note: payload.note
        }
      })
        .then(res => {
          Swal.fire(`Edit Product ${payload.name} success `)
          this.dispatch('fetchProduct')
        })
        .catch(err => {
          Swal.fire('Edit Product Failed')
          console.log(err)
        })
    }

  },
  modules: {
  }
})
