const mongoose = require('mongoose')


const enterpriseSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true,
        unique: true
    },
    corporate_phones: [{ 
        number: { 
            type: String,
            required: true
        }, 
        number_type: {
            type: String,
            required: true
        },
        related_area: {
            type: String,
            required: true
        } 
    }],
    contract: {
        type: String
    }
})

module.exports = mongoose.model('Enterprise', enterpriseSchema)