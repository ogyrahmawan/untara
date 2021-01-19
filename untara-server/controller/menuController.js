const {Menu} = require('../models/index')

class MenuController {
    static async getMenu (req, res, next){
        try {
            let data = await Menu.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getMenuById (req, res, next){
        try {
            let id = req.params.id
            let data = await Menu.findOne({
                where: {
                    id
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async createMenu(req, res, next){
        try {
            let menu = {
                image: req.body.image,
                name: req.body.name,
                type: req.body.type,
                note: req.body.note,
                price: req.body.price
            }
            let data = await Menu.create(menu)
            res.status(200).json(data)
        } catch (error) {
            next(error  )
        }

    }

    static async editMenu(req, res, next){
        try {
            console.log(`masuk sini kah?`)
            let id = req.params.id
            let menu = {
                image: req.body.image,
                name: req.body.name,
                type: req.body.type,
                note: req.body.note,
                price: req.body.price
            }
            let data = await Menu.update(menu, {
                where: {
                    id
                },
                returning: true
            })
            res.status(200).json(data[1])
        } catch (error) {
            next(error)
        }
    }

    static async deleteMenu(req, res, next){
        try {
            let id = req.params.id
            let data = await Menu.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({message: `delete success`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = MenuController