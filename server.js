const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


//import routes
const authRoute = require('./routes/auth')

app.use('/api', authRoute )


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`SERVER is running on port ${PORT}`))