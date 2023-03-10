const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const morgan =  require('morgan');
require('dotenv').config();

/*import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const morgon = require('morgan');
require('dotenv').config();
*/
const app = express();
//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=>console.log('DB Connection'))
.catch((err)=>console.log('DB Connection Error',err));

app.use(express.json({limit:'5mb'}));
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:['http://localhost:3000']
}));

app.post('/api/register',(req,res)=>{
console.log('Register Endpoint', req.body)
});

const port = process.env.PORT || 8000;

app.listen(port,()=>{console.log(`Server running port ${port} `)});