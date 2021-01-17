const mongoose = require('mongoose')


const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    social_name: {
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
    working_company: {
        type: String
    },
    skills: [ {
        skill: {
            type: String,
            required: true    
        }
    }],
    // path to the file
    curriculum: {
        type: String,
        required: true
    },
    professional_experiences: [ {
        experience: {
            type: String,
        }
    }],
    schooling: {
        type: Date,
        required: true
    },
    recommendations: [ {
        experience: {
            type: String,
        }
    }],
    warnings: [ {
        experience: {
            type: String,
        }
    }],
    banned: {
        type: Boolean
    },
    salary: {
        type: Number
    },
    courses: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course'
    },
    address: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        complement: {
            type: String,
            required: false
        },
        province: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    origin_city: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    is_lgbtqi: {
        type: Boolean
    },
    race: {
        type: String
    },
})

module.exports = mongoose.model('Student', studentSchema)