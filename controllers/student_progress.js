const studentProgressModel = require('../models/student_progress')
const studentModel = require('../models/student')
const courseModel = require('../models/course')

module.exports.getStudentProgress =  async (req,res) => {

    const { student_id, course_id } = req.query

    const student = await studentModel.find({ _id: student_id })

    if(!student) return res.status(400).send('Não foi possível encontrar o aluno.')

    const course = await courseModel.find({ name: course_id })

    if(!course) return res.status(400).send('Não foi possível encontrar o curso.')

    const progress = await studentProgressModel({ student: student, course: course })

    if(!progress) return res.status(400).send('Não foi possível encontrar o progresso do aluno neste curso')

    return res.status(200).json(progress)
}


module.exports.createStudentProgress = async (req, res) => {

    const { student_id, course_name } =  req.query

    const student = await studentModel.find({ _id: student_id })

    if(!student) return res.status(400).send('Não foi possível encontrar o aluno.')

    const course = await courseModel.find({ name: course_name })

    if(!course) return res.status(400).send('Não foi possível encontrar o curso.')

    const newProgress = new studentProgressModel({
        student: student,
        course: course
    })

    const progressCreated = await newProgress.save()
    
    return res.status(200).json(progressCreated)
}


module.exports.addWatchedVideo = async (req, res) => {
    const {student_id, course_name } = reg.body
    
    const student = await studentModel.find({_id: student_id})
    
    if(!student) return res.status(400).send('Não foi possível encontrar o aluno.')

    
    const course = await courseModel.find({name: course_name})

    if(!course) return res.status(400).send('Não foi possível encontrar o curso.')

    
    const progress = await studentProgressModel.find({student: student, course: course})
    
    if(!progress) return res.status(400).send('Não foi possível encontrar o progresso do aluno neste curso.')
    
    
    const progress_updated = await progress.update({videos_watched: videos_watched + 1})
    
    if(!progress_updated) return res.status(400).send('Não foi possível atualizar o progresso.')
    
    return res.status(200).json(progress_updated)
}