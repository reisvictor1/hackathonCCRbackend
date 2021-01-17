const areaModel = require('../models/area')



module.exports.getAllArea = async (req, res) => {

    const { name } = req.query
   
   
    if(name == undefined){
        
        const areas = await areaModel.find()

        if(!areas.length) return res.status(400).send('Não foi possível encontrar nenhuma área.')

        return res.status(200).json(areas)
    }

    const area = await areaModel.find({name: name})

    if(!area) return res.status(400).send('Não foi possível encontrar esta área.')

    return res.status(200).json(area)

}


module.exports.createArea = async (req, res) => {

    const { name } = req.body

    const newArea = new areaModel({
        name: name,
    })

    const areaCreated = await newArea.save()

    if(!areaCreated) return res.status(400).send('Não foi possível criar a área') 

    return res.status(200).json(areaCreated)

}


module.exports.deleteArea = async (req, res) => {

    const { name } = req.params

    const deletedArea = areaModel.findAndDelete({name: name})

    if(!deletedArea) return res.status(400).send('Não foi possível deletar a área.')

    return res.status(200).json(deletedArea)
}