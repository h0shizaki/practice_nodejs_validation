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
    
    try{
        const user = await UserModel.findOne({name : req.body.name})
        if(!user) return res.send('Username not found').status(400)
        
        const validPass = await bcrypt.compare(req.body.password , user.password)
        if(!validPass) return res.send("Incorrect Password").status(400)

        res.send({message:"Logged in"})
        
    }
    catch(error){
        res.send(error)
    }

})

module.exports = route;