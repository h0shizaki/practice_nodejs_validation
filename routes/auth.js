const route = require('express').Router();
const UserModel = require('../models/user')



route.post('/register', async(req,res)=>{


    const data ={
        'name' : req.body.name,
        'password' : req.body.password
    };
    

    
    console.log(data)
    try{
        const saveUser = await UserModel.create(data);
        res.send(saveUser)
    }
    catch(err){
        res.status(400).send(err)
    }

    
})

module.exports = route;