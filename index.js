const express = require('express') // express 모듈을 가져온다...
const app = express()
const port = 5000

const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://roadseeker:1q2w3e4r1!@boilerplate.rfd3gnc.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate', 
{})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!  안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})