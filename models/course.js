const mongoose = require('mongoose')


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ementa: {
        type: String,
        required: true,
        unique: true
    },
    number_videos: {
        type: Number,
        required: true
    },
    student_pre_requisites: [ {
        pre_requisite: {
            type: String,
            required: true    
        }
    }],
    student_pre_requisite_courses: [{           
        type: mongoose.Schema.Types.ObjectId,
        ref: this
    }],
    teacher_pre_requisites: [{
        teacher_pre_requisite: {
            type: String
        }
    }],
    feedbacks: [{
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        },
        feedback: {
            type: String,
            required: true
        }
    }]
})

module.exports = mongoose.model('Course', courseSchema)