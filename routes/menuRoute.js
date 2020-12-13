const MenuController = require('../controller/menuController')
const route = require('express').Router()
const authentication = require('../middleware/authentication')

route.use(authentication)
route.get('/', MenuController.getMenu)
route.get('/:id', MenuController.getMenuById)
route.post('/', MenuController.createMenu)
route.put('/:id', MenuController.editMenu)
route.delete('/:id', MenuController.deleteMenu)


module.exports = route