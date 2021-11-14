const route = require('express').Router();
const verify =require('../routes/verifyToken')

route.get('/', verify , (req,res)=>res.send({
    message:"High Secret Data",
    data: "Submarine 500M THB."
}))

module.exports = route