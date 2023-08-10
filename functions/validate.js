
const Joi = require('joi');

const validate = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

// Validation of Product

const JoiSchema = Joi.object({
    name: Joi.string().min(2).required(),
    category: Joi.string().min(2).required(),
    company: Joi.string().min(2).required(),
    price: Joi.number().min(0).required(),
    desc: Joi.string().min(2).required(),
    size: Joi.array().items(Joi.string()).required(),
    imageUrls: Joi.array().items(Joi.string()),
});

// Validation of Banner

const JoiSchemaBanner = Joi.object({
    text_one: Joi.string().min(2).required(),
    text_two: Joi.string().min(2).required(),
    text_three: Joi.string().min(2).required()
});


// Validation of Card

const JoiSchemaCard = Joi.object({
    cardItems: Joi.array().required(),
    totalPrice: Joi.number().min(0).required(),
    userInfo: [
        Joi.object({
            userName: Joi.string().required(),
            sureName: Joi.string().required(),
            phoneNumber: Joi.string().required(),
            message: Joi.string().required()
        }).required()
    ]
});


exports.validateProduct = validate(JoiSchema);
exports.validateCard = validate(JoiSchemaCard);
exports.validateBanner = validate(JoiSchemaBanner);