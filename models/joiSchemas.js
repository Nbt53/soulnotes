// const Joi = require('joi')
const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension)

module.exports.productSchema = Joi.object({
    product: Joi.object({
        name: Joi.string().required().alphanum(),
        price: Joi.number().required().min(0),
        image: Joi.string().required(),
        qty: Joi.number().required().min(0),
        description: Joi.string().required(),
        notesOne: Joi.string().required(),
        notesTwo: Joi.string().required(),
        notesThree: Joi.string()
    }).required()
})

// module.exports.productSchema = Joi.object({
//     name: Joi.string().required().alphanum(),
//     price: Joi.number().required().min(0),
//     image: Joi.string().required(),
//     qty: Joi.number().required().min(0)
// }.required)