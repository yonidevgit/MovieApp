const express = require('express')
const app = express()
const route = require('./route/route')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/movie')
.then(()=>{
    console.log('Connected')
}).catch((err)=>{
    console.log(err)
})
app.set('view engine','ejs')
app.use(express.static('public'))
app.use('/',route)

app.listen(3000,()=>{
    console.log('Server running at port 3000')
})