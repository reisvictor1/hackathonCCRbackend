const opportunityModel = require('../models/job_opportunity')
const enterpriseModel = require('../models/enterprise')
const areaModel = require('../models/area')
const courseModel = require('../models/course')
const trailModel = require('../models/trail')

module.exports.getOpportunities = async (req, res) => {

    const { enterprise_name, title, mother_area_name } = req.query
    
    if(enterprise_name == undefined && title == undefined && mother_area_name == undefined){
        const opportunity = await opportunityModel.find()

        if(!opportunity.length) return res.status(400).send('Não foi possível encontrar nenhuma vaga.')
        return  res.status(200).json(opportunity)
    }

    const opportunity = await opportunityModel.findOne({ 
        enterprise: await enterpriseModel.findOne({company_name: enterprise_name}),
        title: title,
        mother_area: await areaModel.findOne({name: mother_area_name})
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
        start_work_hour,
        end_work_hour,
        working_days,
        estimated_remuneration,
        necessary_courses,
        necessary_trails 
    } = req.body

    let enterprise = await enterpriseModel.findOne({company_name: enterprise_name})

    const area = await areaModel.findOne({name: mother_area_name})

    const newOpportunity = new opportunityModel({
        enterprise: enterprise, 
        title: title, 
        description: description, 
        job_functions: job_functions, 
        work_address: work_address,
        mother_area_name: area,
        deadline: deadline,
        start_work_hour: start_work_hour,
        end_work_hour: end_work_hour,
        working_days: working_days,
        estimated_remuneration: estimated_remuneration,
        necessary_courses: necessary_courses,
        necessary_trails: necessary_trails
    })

    const opportunityCreated = await newOpportunity.save()

    if(!opportunityCreated) return res.status(400).send('Não foi possível criar a vaga') 

    return res.status(200).json(opportunityCreated)

}


module.exports.deleteOpportunity = async (req, res) => {

    const { enterprise_name, title, mother_area_name } = req.query

    const deletedOpportunity = opportunityModel.findAndDelete({enterprise_name: enterprise_name, title: title, mother_area_name: mother_area_name})

    if(!deletedOpportunity) return res.status(400).send('Não foi possível deletar a vaga.')

    return res.status(200).json(deletedOpportunity)
}

//QUERY PARA PEGAR TODOS OS EMPREGOS DE UMA REGIAO
module.exports.getJobsFromRegion = async (req, res) => {

    const { region_name } = reg.query
    
    const regionJobs = await opportunityModel.find({mother_area_name: await areaModel.find({name: region_name})})

    return res.status(200).json(regionJobs)
}