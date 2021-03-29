// import Joi from "@hapi/joi";
const Joi = require("@hapi/joi");

const OPTIONS = {
  language: {
    key: "{{label}} ",
  },
};

// sign up validation
const SIGNUP = (signUpData) => {
  const signUpSchema = Joi.object().keys({
    firstName: Joi.string().min(2).max(20).required().label("First name"),
    familyName: Joi.string().min(2).max(20).required().label("Family name"),
    role: Joi.string().min(2).max(20).required().label("Role"),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .label("Email"),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .min(8)
      .max(15)
      .required()
      .label("Password"),
    totalIncome: Joi.number(),
    totalExpense: Joi.number(),
  });

  return Joi.validate(signUpData, signUpSchema, OPTIONS);
};

// sign in validaiton
const SIGNIN = (signInData) => {
  const signInSchema = Joi.object().keys({
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .label("Email"),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .min(8)
      .max(15)
      .required()
      .label("Password"),
  });

  return Joi.validate(signInData, signInSchema, OPTIONS);
};
const CATEGORY = (signInData) => {
  const signInSchema = Joi.object().keys({
    loanType: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .label("Email"),
  });

  return Joi.validate(signInData, signInSchema, OPTIONS);
};
const UPDATEUSERDETIALS = (userDetails) => {
  const updateUserSchema = Joi.object().keys({
    firstName: Joi.string().min(2).max(20).required().label("First name"),
    familyName: Joi.string().min(2).max(20).required().label("Family name"),
    role: Joi.string().min(2).max(20).required().label("Role"),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .label("Email"),
    username: Joi.string()
      .alphanum()
      .min(5)
      .max(15)
      .required()
      .label("Username"),
  });

  return Joi.validate(userDetails, updateUserSchema, options);
};
module.exports = {
  SIGNUP,
  SIGNIN,
  UPDATEUSERDETIALS,
  CATEGORY
};
