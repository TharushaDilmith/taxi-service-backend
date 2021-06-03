const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const vehicleAPI = require('./Public/src/api/vehicleapi');
const categoryAPI = require('./Public/src/api/categoryapi');

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyparser.json());

const PORT = process.env.port || 8000;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI,{
    useCreateIndex:true,
    useFindAndModify : true,
    useNewUrlParser : true,
    useUnifiedTopology: true
}), (error)=>{

    if(error)
    {
        console.log("Database error : ",error.message);
    }

}

app.use('/vehicle',vehicleAPI());
app.use('/category',categoryAPI());

mongoose.connection.once('open',()=>{
    console.log("Database connected");
});

app.listen(PORT,()=>
{
    console.log("You are listening to port "+PORT);
});