const route = require('express').Router()
const menuRoute = require('./menuRoute')
const UserController = require('../controller/userController')

route.post('/register', UserController.registerUser)
route.post('/login', UserController.login)
route.post('/question', UserController.createAnswer)
route.get('/question', UserController.getAnswer)

route.use('/menus', menuRoute)
module.exports = route