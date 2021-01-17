const teacherModel = require('../models/teacher')


module.exports.getTeachers = async (req, res) => {

    const { email, is_lgbtqi, race } = req.query

    if(email == undefined && is_lgbtqi == undefined && race == undefined){

        const teachers = await teacherModel.find()
        if(!teachers.length) return res.status(400).send('Não há nenhum professor')

        return res.status(200).json(teachers)
    }

    const teacher = await teacherModel.find({ $or: [{email: email},{is_lgbtqi: is_lgbtqi}, {race: race}]})

    if(!teacher) return res.status(400).send('Não foi possível recuperar o professor')

    return res.status(200).json(teacher)

}


module.exports.createTeacher = async (req, res) => {

    const { 
        name, 
        social_name , 
        lastname, 
        email, 
        phone, 
        birth_date, 
        cpf, 
        working_company, 
        skills,
        profissional_experiences,
        schooling,
        address,
        origin_city,
        gender,
        is_lgbtqi,
        race
    } = req.body


    const newTeacher = new teacherModel({
        name: name, 
        social_name: social_name, 
        lastname: lastname, 
        email: email, 
        phone: phone, 
        birth_date: birth_date, 
        cpf: cpf, 
        working_company: working_company, 
        skills: skills,
        profissional_experiences: profissional_experiences,
        schooling: schooling,
        recommendations: [],
        warnings: [],
        banned: false,
        address: address,
        origin_city:origin_city,
        gender: gender,
        is_lgbtqi: is_lgbtqi,
        race: race
    })

    const teacherCreated = await newTeacher.save()

    if(!teacherCreated) return res.status(400).send('Não foi possível criar o professor.')

    return res.status(200).json(teacherCreated)

}


module.exports.deleteTeacher = async (req,res) => {

    const { email } = req.query

    const deletedTeacher = await teacherModel.findOneAndDelete({email: email}) 

    if(!deletedTeacher) return res.status(400).send('Não foi possível recuperar o professor')

    return res.status(200).json(deletedTeacher)
}