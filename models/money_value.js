const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class moneyValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  moneyValue.init({
    treasure_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'money_values',
  });

  return moneyValue;
};
