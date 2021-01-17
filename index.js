const express = require('express')
const mongoose = require('mongoose')


const PORT = 5000

const app = express()

app.use(express.urlencoded({extended: true }))
app.use(express.json())

const courseRouter = require('./routes/course')
const areaRouter = require('./routes/area')
const enterpriseRouter = require('./routes/enterprise')
const studentRouter = require('./routes/student')

mongoose.connect('mongodb+srv://adminccr:teamccr33@team33.rtgyi.mongodb.net/dbccr33?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

app.use(studentRouter)
app.use(courseRouter)
app.use(areaRouter)
app.use(enterpriseRouter)

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`)
})