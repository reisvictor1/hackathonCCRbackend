const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    experiences: [ {
        experience: {
            type: String,
            required: true    
        }
    }],
    origin_city: {
        type: String,
        required: true
    },
    stopped_high_school_in: {
        type: Date,
        required: true
    },
    frequented_schools: [ {
        school_name: {
            type: String,
            required: true     
        },
        start_date: {
            type: Date,
            required: true
        },
        end_date: {
            type: Date
        }
    }],
    gender: {
        type: String
    },
    sexual_orientation: {
        type: String
    },
    ethnicity: {
        type: String
    },
    total_family_income: {
        type: Number,
        required: true
    },
    area_of_interesting: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Area'
    },
    progresses: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Studend Progress'
    }
})

module.exports = mongoose.model('Student', studentSchema)