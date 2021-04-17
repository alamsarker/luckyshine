import TreasureController from '../controllers/treasure';
import treasureList from '../validators/treasure_rules';
import validate from '../validators/validate';

export default (app) => {
  const treasureCtrl = new TreasureController(app.datasource.models.treasure, app);

  app.route('/treasures')
    .get(validate(treasureList), (req, res) => treasureCtrl.getAll(req, res));
};
