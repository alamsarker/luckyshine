import Sequelize from 'sequelize';
import treasureModel from '../models/treasure';
import userModel from '../models/user';
import transureMoneyModel from '../models/money_value';

let database = null;

export default function (app) {
  if (!database) {
    const { config } = app;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config,
    );

    database = {
      sequelize,
      Sequelize,
      models: {},
    };

    const treasure = treasureModel(sequelize, Sequelize.DataTypes);
    const transureMoney = transureMoneyModel(sequelize, Sequelize.DataTypes);
    const user = userModel(sequelize, Sequelize.DataTypes);

    treasure.hasMany(transureMoney);

    database.models = {
      treasure,
      user,
      transureMoney,
    };
  }

  return database;
}
