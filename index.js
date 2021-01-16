const express = require('express')
const mongoose = require('mongoose')


const PORT = 5000

const app = express()


mongoose.connect('mongodb+srv://adminccr:teamccr33@team33.rtgyi.mongodb.net/dbccr33?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true})

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`)
})