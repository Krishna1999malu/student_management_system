import Joi from 'joi';


export const studentValidation = async (req, res, next) => {
    // Define the Joi schema to validate the student details
    const schema = Joi.object({
      name: Joi.string().required(),
      age: Joi.number().integer().min(0).required(),
      course: Joi.string().required(),
      yearOfCompletion: Joi.number().integer().required(),
      phone: Joi.string().required().pattern(/^\d{10}$/)
    }).options({ stripUnknown: true });
    req.body = await schema.validateAsync(req.body);
    return next();
};

export const listValidator = async (req, res, next) => {
    const schema = Joi.object({
      page: Joi.number().integer().min(1).default(1),
      limit: Joi.number().integer().min(1).default(10),
      name: Joi.string().allow('').optional(),
      sortBy: Joi.string().valid('name').default('name'),
      sortOrder: Joi.string().valid('asc', 'desc').default('asc'),
  
    });
  
    req.query = await schema.validateAsync(req.query);
    next();
  };
  
  export const updateValidation = async (req, res, next) => {
    // Define the Joi schema to validate the student details
    const schema = Joi.object({
      name: Joi.string().trim(),
      age: Joi.number().integer().min(0),
      course: Joi.string().trim(),
      yearOfCompletion: Joi.number().integer(),
      phone: Joi.string().trim().pattern(/^\d{10}$/)
    }).options({ stripUnknown: true });
    req.body = await schema.validateAsync(req.body);
    return next();
};
