const enterpriseModel = require('../models/enterprise')


module.exports.getEnterprises = async (req, res) => {

    const { company_name, cnpj } = req.query

    if(cnpj == undefined && company_name == undefined){
        const enterprises = await enterpriseModel.find()

        if(!enterprises.length) return res.status(400).send('Não foi possível encontrar nenhuma empresa.')

        return res.status(200).json(enterprises)
    }

    let enterprise = await enterpriseModel.find( {$or: [{company_name: company_name},{cnpj: cnpj}]})

    if(!enterprise) return res.status(400).send('Não foi possível encontrar esta empresa.')

    return res.status(200).json(enterprise)
}


module.exports.createEnterprise = async (req, res) => {

    const { company_name, cnpj, corporate_phones } = req.body

    const newEnterprise = new enterpriseModel({
        company_name: company_name,
        cnpj: cnpj,
        corporate_phones: corporate_phones
    })

    const enterpriseCreated =  await newEnterprise.save()

    if(!enterpriseCreated) return res.status(400).send('Não foi possível criar a empresa') 

    return res.status(200).json(enterpriseCreated)

}


module.exports.deleteEnterprise = async (req, res) => {

    const { company_name, cnpj } = req.query

    

    let deletedEnterprise = await enterpriseModel.findOne( {$or: [{company_name: company_name},{cnpj: cnpj}]})

    if(!deletedEnterprise) return res.status(400).send('Não foi possível deletar a empresa.')

    return res.status(200).json(deletedEnterprise)
}