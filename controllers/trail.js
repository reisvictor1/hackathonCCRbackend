const trailModel = require('../models/trail')
const courseModel = require('../models/course')

module.exports.getTrails = async (req, res) => {

    const { name } = req.query
   
    if(name == undefinided){
        const trails = await trailModel.find()

        if(!trails.length) return res.status(400).send('Não foi possível encontrar nenhuma trilha.')

        return res.status(200).json(trails)
    }

    const trail = await trailModel.findOne({name: name})

    if(!trail) return res.status(400).send('Não foi possível encontrar esta trilha.')

    return res.status(200).json(trail)

}

module.exports.createTrail = async (req, res) => {

    const {name, description, level, pre_requisites, renew_frequency, included_courses} = req.body

    const newTrail = new trailModel({
        name: name,
        description: description,
        level: level,
        pre_requisites: pre_requisites,
        renew_frequency: renew_frequency,
        included_courses: included_courses
    })

    const trailCreated = await newTrail.save()

    if(!trailCreated) return res.status(400).send('Não foi possível criar o curso') 

    return res.status(200).json(trailCreated)

}


module.exports.deleteTrail = async (req, res) => {

    const { name } = req.body

    const deletedTrail = await trailModel.findOneAndDelete({name: name})

    if(!deletedTrail) return res.status(400).send('Não foi possível deletar a trilha.')

    return res.status(200).json(deletedTrail)
}

module.exports.addCourse = async (req, res) => {

    const { name, course_name } = req.body

    const course = await courseModel.findOne({ name: course_name })

    if(!course) return res.status(400).send('Não existe este curso.')

    const updatedCourse = await trailModel.findOneAndUpdate({name: name}, {$push: {included_courses: course}}, {
        new: true
    });

    if(!updatedCourse) return res.status(400).send('Não existe esta trilha.')

    return res.status(200).json(updatedCourse)
}