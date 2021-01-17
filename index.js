const express = require('express')
const mongoose = require('mongoose')


const PORT = 5000

const app = express()

app.use(express.urlencoded({extended: true }))
app.use(express.json())

const courseRouter = require('./routes/course')

mongoose.connect('mongodb+srv://adminccr:teamccr33@team33.rtgyi.mongodb.net/dbccr33?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

app.use(courseRouter)


app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`)
})