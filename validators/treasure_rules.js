import validator from 'validator';

const { check } = require('express-validator');

const priceRange = (value) => {
  const prices = value.split(',');
  return prices.every((price) => {
    const trimmedPrice = price.trim();

    if (validator.isEmpty(trimmedPrice)) {
      return false;
    }

    if (trimmedPrice.charAt(0) !== '$') {
      return false;
    }

    const priceWithoutSym = trimmedPrice.substring(1);

    if (!validator.isInt(priceWithoutSym, {
      min: 10,
      max: 30,
    })) {
      return false;
    }

    return true;
  });
};

const treasureList = [
  check('latitude', 'Latitude is required').isFloat(),
  check('longitude', 'Longitude is required').isFloat(),
  check('distance', 'Distance must be 1 or 10 km')
    .isIn([1, 10])
    .customSanitizer((value) => value * 1000), // convert km to meter
  check('priceValue', 'Price value must be valid e,g:- $10, $20, $30')
    .optional()
    .custom(priceRange)
    .customSanitizer((value) => {
      const prices = value.split(',');
      return Math.min(
        ...prices.map((v) => Number(v.trim().substring(1))),
      );
    }),
];

export {
  treasureList as default,
};
