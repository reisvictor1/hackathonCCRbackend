const courseModel = require('../models/course')


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
        student_pre_requisites: student_pre_requisites
    })

    const courseCreated = newCourse.save()

    if(!courseCreated) return res.status(400).send('Não foi possível criar o curso') 

    return res.status(200).json(courseCreated)

}


module.exports.deleteCourse = async (req, res) => {

    const { id } = req.params

    const deletedCourse = courseModel.findByIdAndDelete(id)

    if(!deletedCourse) return res.status(400).send('Não foi possível deletar o curso.')

    return res.status(200).json(deletedCourse)
}