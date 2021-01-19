const axios = require('axios')

const instance = axios.create({
  baseURL: ' https://untara.herokuapp.com'
})
export default instance
