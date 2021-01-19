const bcrypt = require('bcryptjs')

function hash(password){
    return bcrypt.hashSync(password, +process.env.SALT)
}

function compare(inputPassword, hashed){
    return bcrypt.compareSync(inputPassword, hashed)
}

module.exports = {
    hash,
    compare
}