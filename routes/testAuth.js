const route = require('express').Router();
const auth =require('../routes/verifyToken')

route.get('/', auth.authMember , (req,res)=>res.send(
    {
        message:"High Secret Data",
        data: "Submarine 500M THB."
    }
    )
)

route.get('/submarine', auth.authAdmin , (req,res)=>res.send({
    data:{
        name: 'Submarine',
        price: '400M THB',
        status: 'Broken'
    }
}))

module.exports = route