const express = require('express')
require('./db/mongoose')
const bookRouter = require('./routers/book')
const app = express()

const PORT = 3000

// Middleware
app.use(express.json());

// Routes
app.use('/books', bookRouter);


app.listen(PORT,(error)=>{
    if(!error) console.log("App running successfully on "+ PORT)
    else console.log(error)
})