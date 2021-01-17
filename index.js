const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = 5000

const app = express()

app.use(express.urlencoded({extended: true }))
app.use(express.json())

app.use(cors())

const courseRouter = require('./routes/course')
const areaRouter = require('./routes/area')
const enterpriseRouter = require('./routes/enterprise')
const studentRouter = require('./routes/student')
const job_opportunityRouter = require('./routes/job_opportunity')
const teacherRouter = require('./routes/teacher')
const trailRouter = require('./routes/trail')
const studentProgressRouter = require('./routes/studentProgress')

mongoose.connect('mongodb+srv://adminccr:teamccr33@team33.rtgyi.mongodb.net/dbccr33?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

app.use(studentRouter)
app.use(courseRouter)
app.use(areaRouter)
app.use(enterpriseRouter)
app.use(job_opportunityRouter)
app.use(teacherRouter)
app.use(studentProgressRouter)

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`)
})