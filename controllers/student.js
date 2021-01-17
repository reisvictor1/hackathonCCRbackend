const studentModel = require('../models/student')


module.exports.getAllStudents = async (req, res) => {


    const { is_lgbtqi, race } = req.query

    if(is_lgbtqi == undefined && race == undefined){

        const students = await studentModel.find()

        if(!students.length) return res.status(400).send('Não foi possível encontrar nenhum aluno.')
    
        return res.status(200).json(students)

    }

    
    const student = await studentModel.find({ is_lgbtqi: is_lgbtqi, race: race })
  
    if(!student) return res.status(400).send('Não foi possível encontrar o aluno')

    return res.status(200).json(student)
}


module.exports.createStudent = async (req, res) => {

    const { 
        name, 
        social_name, 
        lastname, 
        email, 
        phone, 
        cpf, 
        birth_date, 
        experiences, 
        origin_city, 
        address,
        stopped_high_school_in,
        frequented_schools,
        gender,
        is_lgbtqi,
        race,
        total_family_income,
        area_of_interesting,
        progresses
    } = req.body

    const newStudent = new studentModel({
        name: name, 
        social_name: social_name, 
        lastname: lastname, 
        email: email, 
        phone: phone, 
        cpf: cpf, 
        birth_date: birth_date, 
        experiences: experiences, 
        origin_city: origin_city, 
        address: address,
        stopped_high_school_in: stopped_high_school_in,
        frequented_schools: frequented_schools,
        gender: gender,
        is_lgbtqi: is_lgbtqi,
        race: race,
        total_family_income: total_family_income,
        area_of_interesting: area_of_interesting,
        progresses: progresses
    })

    const studentCreated = await newStudent.save()

    if(!studentCreated) return res.status(400).send('Não foi possível criar o aluno')

    return res.status(200).send(studentCreated)

}


module.exports.deleteStudent = async (req, res) => {

    const { email } = req.query

    const deletedStudent = await studentModel.findOneAndDelete({ email: email })

    if(!email) return res.status(400).send('Não foi possível deletar o aluno.')

    return res.status(200).json(deletedStudent)

}