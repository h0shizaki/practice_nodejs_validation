const route = require('express').Router();
const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');

route.get('/', async(req,res)=>{
    const members = await UserModel.find({});
    res.send(members) 

}),

route.post('/register', async(req,res)=>{

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password , salt);

    const data ={
        'name' : req.body.name,
        'password' : hashedPassword
    };

    console.log(data)
    try{
        const saveUser = await UserModel.create(data);
        res.send(saveUser._id)
    }
    catch(err){
        res.status(400).send(err)
    }
 
})

route.post('/login' , async(req,res)=>{
    
})

module.exports = route;