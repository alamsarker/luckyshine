const { check } = require('express-validator');

const login = [
  check('email', 'Email is required').isEmail(),
  check('password', 'Password is required').notEmpty(),
];

export {
  login as default,
};
