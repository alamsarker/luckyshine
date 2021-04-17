import HttpStatus from 'http-status';

const { validationResult } = require('express-validator');

const validate = (rules) => async (req, res, next) => {
  await Promise.all(rules.map((rule) => rule.run(req)));

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(HttpStatus.BAD_REQUEST).json({ errors: errors.array() });
};

export default validate;
