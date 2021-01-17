const mongoose = require('mongoose')

const trailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    pre_requisites: [{
        pre_requisite: {
            type: String,
            required: true
        }
    }],
    renew_frequency: {
        type: Date,
        required: true
    },
    included_courses: [{
        included_course: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Course'
        }
    }]
})

module.exports = mongoose.model('Trail', trailSchema)