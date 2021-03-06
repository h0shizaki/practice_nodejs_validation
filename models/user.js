const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name :{
        type: String,
        min: 6,
        required: true
    },
    password: {
        type: String,
        min:6,
        max:1024,
        required: true
    },
    userRole: {
        type:Number,
        default: 0
    },
    date:{
        type: Number,
        default: Date.now()
    } 
},
{
    collection:'User-List'
}
)

const model = mongoose.model('User', UserSchema)
module.exports = model ;