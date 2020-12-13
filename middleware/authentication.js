const {verifyToken} = require('../helpers/jwt')
const {User} = require('../models/index')

module.exports = async (req, res, next) => {
    try {
        let {access_token} = req.headers
        console.log(access_token)
        if(!access_token){
            throw({
                status: 401,
                message: `you must login first`
            })
        } else  {
            let userData = verifyToken(access_token)
            req.userData = userData
            let data = await User.findOne({
                where: {
                    id: userData.id
                }
            })
            if(data){
                next()
            } else {
                throw({
                    status: 401,
                    message: `you must login first`
                })
            }
        }
    } catch (error) {
        next(error)
    }
}