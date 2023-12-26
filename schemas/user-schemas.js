const Joi = require("joi");
const emailRegexp =
  /^[a-zA-Z][0-9a-zA-Z_]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}/;

const registerSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .required()
    .messages({ "any.required": "Missing 'name' field" }),
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "Missing 'email' field" }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "Missing 'phone' field" }),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "Missing 'email' field" }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "Missing 'phone' field" }),
});

module.exports = {
  registerSchema,
  loginSchema,
};
