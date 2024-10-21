const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect('mongodb+srv://tanmaytarang2003:kindness123@cluster0.ae11i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("Mongo db is connected successfully"))
.catch(err=>console.log(err))

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})