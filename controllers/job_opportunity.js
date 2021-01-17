const opportunityModel = require('../models/job_opportunity')
const enterpriseModel = require('../models/enterprise')
const areaModel = require('../models/area')


module.exports.getOpportunities = async (req, res) => {

    const { enterprise_name, title, mother_area_name } = req.query
    
    if(enterprise_name == undefined && title == undefined && mother_area_name == undefined){
        const opportunity = await opportunityModel.find()

        if(!opportunity.length) return res.status(400).send('Não foi possível encontrar nenhuma vaga.')
        return  res.status(200).json(opportunity)
    }

    const opportunity = await opportunityModel.find({ 
        enterprise: await enterpriseModel.find({company_name: enterprise_name}),
        title: title,
        mother_area: await areaModel.find({name: mother_area_name})
    })

    if(!opportunity) return res.status(400).send('Não foi possível encontrar esta vaga.')


    return res.status(200).json(opportunity)
}

module.exports.createOpportunity = async (req, res) => {

    const { 
        enterprise_name, 
        title, 
        description, 
        job_functions, 
        work_address,
        mother_area_name,
        deadline,
        working_hours,
        estimated_remuneration,
        necessary_courses,
        necessary_trails 
    } = req.query

    const newOpportunity = new opportunityModel({
        enterprise: await enterpriseModel.find({company_name: enterprise_name}), 
        title: title, 
        description: description, 
        job_functions: job_functions, 
        work_address: work_address,
        mother_area_name: await areaModel.find({name: mother_area_name}),
        deadline: deadline,
        working_hours: working_hours,
        estimated_remuneration: estimated_remuneration,
        necessary_courses: necessary_courses,
        necessary_trails: necessary_trails
    })

    const opportunityCreated = await opportunityModel.save()

    if(!opportunityCreated) return res.status(400).send('Não foi possível criar a vaga') 

    return res.status(200).json(opportunityCreated)

}


module.exports.deleteOpportunity = async (req, res) => {

    const { enterprise_name, title, mother_area_name } = req.query

    const deletedOpportunity = opportunityModel.findAndDelete({enterprise_name: enterprise_name, title: title, mother_area_name: mother_area_name})

    if(!deletedOpportunity) return res.status(400).send('Não foi possível deletar a vaga.')

    return res.status(200).json(deletedOpportunity)
}