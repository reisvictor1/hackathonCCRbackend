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
    student_pre_requisites: [ {
        pre_requisite: {
            type: String,
            required: true    
        }
    }],
    student_pre_requisite_courses: [{
        pre_requisite_course: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }]


})

module.exports = mongoose.model('Course', courseSchema)