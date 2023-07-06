const Joi = require('joi')

module.exports.productSchema = Joi.object({
    name: Joi.string().required().alphanum(),
    price: Joi.number().required().positive(),
    image: Joi.string().required(),
    qty: Joi.number().required()
}.required)