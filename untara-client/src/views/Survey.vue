<template>
  <div class="survey-page">
    <homeNavbar></homeNavbar>
    <div class="container">
      <div class="top-page">
        <img src="../assets/logo.png">
      </div>
      <div class="container">
        <div class="question container shadow p-3 bg-dark text-white" id="p1" v-if="p1.status">
          <h5>Pertanyaan 1/5</h5>
          <label>Dari Mana Kamu Mengenal Untara?</label><br>
          <input v-model="p1.data" class="input-survey block" block type="text" required minlength="5">
          <button id="btn-p1" class="button-survey btn-danger mt-3 btn-block" @click="changeStatusP1">NEXT</button>
        </div>
        <div class="question container shadow p-3 bg-dark text-white" id="p2" v-if="p2.status">
          <h5>Pertanyaan 2/5</h5>
          <label>Apa Menu Favoritmu Disini?</label><br>
          <input v-model="p2.data" class="input-survey block" block type="text" required minlength="5">
          <button id="btn-p2" class="button-survey mt-3 btn-danger btn-block" @click="changeStatusP2">NEXT</button>
          <button id="btn-p2-back" class="button-survey btn-primary mt-1   btn-block" @click="backStatusP2" >BACK</button>
        </div>
        <div class="question container shadow p-3 bg-dark text-white " id="p3" v-if="p3.status">
          <h5>Pertanyaan 3/5</h5>
          <label>apa menu yang kamu harapkan dapat tersedia di untara?</label><br>
          <input v-model="p3.data" class="input-survey block" block type="text" required minlength="5">
          <button id="btn-p3" class="button-survey btn-danger btn-block mt-3" @click="changeStatusP3">NEXT</button>
          <button id="btn-p3-back" class="button-survey btn-primary btn-block mt-1" @click="backStatusP3" >BACK</button>
        </div>
        <div class="question container shadow p-3 bg-dark text-white" id="p4" v-if="p4.status">
          <h5>Pertanyaan 4/5</h5>
          <label>Bagaimana menurutmu tentang sosial media instagram untara?</label><br>
          <input v-model="p4.data" class="input-survey block" block type="text" required minlength="5">
          <button id="btn-p4" class="button-survey btn-danger btn-block mt-3" @click="changeStatusP4" >NEXT</button>
          <button id="btn-p4-back" class="button-survey btn-primary btn-block mt-1" @click="backStatusP4" >BACK</button>
        </div>
        <div class="question container shadow p-3 bg-dark text-white" id="p6" v-if="p5.status">
          <h5>Pertanyaan 5/5</h5>
          <label>Perubahan apa yang kamu inginkan agar untara menjadi lebih baik?</label><br>
          <input v-model="p5.data" class="input-survey block" block type="text" required minlength="5">
          <button id="btn-p5" class="button-survey btn-danger btn-block mt-3" @click="changeStatusP5">SUBMIT</button>
          <button id="btn-p5-back" class="button-survey btn-primary btn-block mt-1" @click="backStatusP5">BACK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import homeNavbar from '../components/homeNavbar'
export default {
  name: 'Survey',
  components: {
    homeNavbar
  },
  data () {
    return {
      p1: {
        data: '',
        status: true
      },
      p2: {
        data: '',
        status: false
      },
      p3: {
        data: '',
        status: false
      },
      p4: {
        data: '',
        status: false
      },
      p5: {
        data: '',
        status: false
      }
    }
  },
  methods: {
    changeStatusP1 () {
      if (this.p1.data.trim() === '' || this.p1.data.length < 4) {
        Swal.fire('Hai kak, minta tolong diisi minimal 5 karakter ya')
      } else {
        this.p1.status = false
        this.p2.status = true
      }
    },
    changeStatusP2 () {
      if (this.p2.data.trim() === '' || this.p2.data.length < 4) {
        Swal.fire('Hai kak, minta tolong diisi minimal 5 karakter ya')
      } else {
        this.p2.status = false
        this.p3.status = true
      }
    },
    changeStatusP3 () {
      if (this.p3.data.trim() === '' || this.p3.data.length < 4) {
        Swal.fire('Hai kak, minta tolong diisi minimal 5 karakter ya')
      } else {
        this.p3.status = false
        this.p4.status = true
      }
    },
    changeStatusP4 () {
      if (this.p4.data.trim() === '' || this.p4.data.length < 4) {
        Swal.fire('Hai kak, minta tolong diisi minimal 5 karakter ya')
      } else {
        this.p4.status = false
        this.p5.status = true
      }
    },
    changeStatusP5 () {
      if (this.p5.data.trim() === '' || this.p5.data.length < 4) {
        Swal.fire('Hai kak, minta tolong diisi minimal 5 karakter ya')
      } else {
        const payload = {
          p1: this.p1.data,
          p2: this.p2.data,
          p3: this.p3.data,
          p4: this.p4.data,
          p5: this.p5.data
        }
        this.$store.dispatch('createAnswer', payload)
      }
    },
    backStatusP2 () {
      this.p2.status = false
      this.p1.status = true
    },
    backStatusP3 () {
      this.p3.status = false
      this.p2.status = true
    },
    backStatusP4 () {
      this.p4.status = false
      this.p3.status = true
    },
    backStatusP5 () {
      this.p5.status = false
      this.p4.status = true
    }
  }
}
</script>

<style>
.top-page img {
  margin-top: 3vw  ;
  width: 20vw;
}
.button-survey {
  margin: 1vw 0.5vw;
}
.input-survey {
  width: 100%;
}
</style>
