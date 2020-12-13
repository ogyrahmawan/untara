const {User, Question} = require('../models/index')
const {compare} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')

class UserController {
    static async registerUser(req, res, next) {
        try {
            let user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            let data = await User.create(user)
            res.status(200).json(data)
            
        } catch (error) {
            next(error)
        }
    }
    static async login(req,res, next) {
        try {
            let data = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if(!data){
                throw({
                    status: 400,
                    message: `invalid account`
                })
            } else {
                if(compare(req.body.password, data.password)){
                    let access_token = generateToken({id: data.id})
                    res.status(200).json({"access_token": access_token})
                } else {
                    throw({
                        status: 400,
                        message: `invalid email or password`
                    })
                }
            }
 
        } catch (error) {
            next(error)
        }
    }
    static async createAnswer(req, res, next){
        try {
            let obj = {
                p1: req.body.p1,
                p2: req.body.p2,
                p3: req.body.p3,
                p4: req.body.p4,
                p5: req.body.p5
            }
            let data = await Question.create(obj)
            res.status(200).json(data)
            
        } catch (error) {
            next(error)
        }
    }
    static async getAnswer(req, res, next){
        try {
            let data = await Question.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = UserController