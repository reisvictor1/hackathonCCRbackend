const courseModel = require('../models/course')
const studentModel = require('../models/student')

module.exports.getOneCourse = async (req, res) => {

    const { id } = req.params
   
    const course = await courseModel.findById(id)

    if(!course) return res.status(400).send('Não foi possível encontrar este curso.')

    return res.status(200).json(course)

}

module.exports.getAllCourses = async (req, res) => {

    const courses = await courseModel.find()

    if(!courses.length) return res.status(400).send('Não foi possível encontrar nenhum curso.')

    return res.status(200).json(courses)

}


module.exports.createCourse = async (req, res) => {

    const { name, description, ementa, student_pre_requisites } = req.body

    const newCourse = new courseModel({
        name: name,
        description: description,
        ementa: ementa,
        number_videos: 0,
        student_pre_requisites: student_pre_requisites,
        feedbacks: [],
        videos: []
    })

    const courseCreated = await newCourse.save()

    if(!courseCreated) return res.status(400).send('Não foi possível criar o curso') 

    return res.status(200).json(courseCreated)

}


module.exports.deleteCourse = async (req, res) => {

    const { id } = req.params

    const deletedCourse = await courseModel.findByIdAndDelete(id)

    if(!deletedCourse) return res.status(400).send('Não foi possível deletar o curso.')

    return res.status(200).json(deletedCourse)
}

module.exports.addVideo = async (req, res) => {
    const {name, title, description, link} = req.body

    const course = await courseModel.find({name: name})

    if(!course) return res.status(400).send('Não foi possível encontrar este curso.')

    let { number_videos } = course

    let courseUpdated = await courseModel.findOneAndUpdate({name: name}, 
        { $push: {title: title, description: description, link: link} }, 
        { new: true }
    )

    if(!courseUpdated) return res.status(400).send('Não foi possível adicionar vídeo a este curso.')
    
    courseUpdate = await courseModel.findOneAndUpdate({name: name}, {number_videos: number_videos + 1 }, {new: true})
    
    if(!courseUpdated) return res.status(400).send('Não foi possível atualizar esse curso.')

    return res.status(200).json(courseUpdated)
}


module.exports.addFeedback = async (req,res) => {

    const { email, name } = req.query
    const { feedback , rank } = req.body

    const student = await studentModel.findOne({ email: email })

    const courseUpdated = await courseModel.findOneAndUpdate(
        {name: name}, 
        {$push: {student: student, feedback: feedback, rank: rank}},
        {new: true}
    )

    if(!courseUpdated) return res.status(400).send('Não foi possível adicionar feedback a este curso.')

    return res.status(200).json(course)

}