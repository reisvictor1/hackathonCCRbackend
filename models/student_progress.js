const mongoose = require('mongoose')

const student_progressSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course'
    },
    videos_watched: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('StudentProgress', student_progressSchema)