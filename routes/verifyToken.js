const jwt = require('jsonwebtoken')
const UserModel = require('../models/user');

class Auth{

    authMember(req,res,next){
        const token = req.header('auth-token');
        if(!token) return res.status(401).send('Access Denied')
    
        try{
            const verified = jwt.verify(token, process.env.SECRET_TOKEN)
            req.user = verified
            console.log(req.user._id + " opened data")

            next();
        }
        catch(err){
            res.send(err).status(400)
        }
    }
    
    async authAdmin(req,res,next){
        const token = req.header('auth-token');
        if(!token) return res.status(401).send('Access Denied')
    
        try{
            const verified = jwt.verify(token, process.env.SECRET_TOKEN)
            req.user = verified   
            console.log(req.user._id + " opened secret data")

            const userData = await UserModel.findOne({_id:req.user._id})
            if(userData.userRole === 1){
                next();
            }
            else{
                return res.status(401).send('You are not admin')
            }
            

        }
        catch(err){
            res.send(err).status(400)
        }
    }
}

const auth = new Auth()
module.exports = auth ;
