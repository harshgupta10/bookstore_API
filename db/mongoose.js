const mongoose = require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/bookstore").then(()=>{
    console.log('Db connected!')
}).catch((error)=>{
    console.log(error)
})
