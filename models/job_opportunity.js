const mongoose = require('mongoose')

const job_opportunitySchema = new mongoose.Schema({
    enterprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enterprise'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    job_functions: [{
        job_function: {
            type: String,
            required: true
        }
    }],
    work_address: {
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
    mother_area: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Area'
    },
    deadline: {
        type: Date,
        required: true
    },
    working_hours: {
        type: Number,
        required: true
    },
    estimated_remuneration: {
        type: Number,
        required: true
    },
    necessary_courses: [{
        necessary_course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    }],
    necessary_trails: [{
        necessary_trail: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Trail'
        }
    }]
})

module.exports = mongoose.model('JobOpportunity', job_opportunitySchema)