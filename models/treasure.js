const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Treasure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Treasure.init({
    location: DataTypes.GEOMETRY,
    name: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'treasures',
  });

  return Treasure;
};
