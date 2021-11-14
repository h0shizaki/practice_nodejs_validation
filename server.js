const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();
//connect to Database
mongoose.connect(process.env.DB_CONNECT, { userNewUrlParser: true}, ()=>
    console.log('connected to db success')
)


app.use(express.urlencoded({extended: false}));
app.use(express.json());


//import routes
const authRoute = require('./routes/auth')

app.use('/api/user', authRoute )


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`SERVER is running on port ${PORT}`))