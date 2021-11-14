const route = require('express').Router();

route.get('/', (req,res)=>{
    res.send({'error': false, 'message':'Hello wolrd'});
})

module.exports = route;