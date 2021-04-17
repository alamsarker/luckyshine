import Sequelize, { Op } from 'sequelize';
import Controller from './controller';
import { response, errorResponse } from './response';

export default class TreasureController extends Controller {
  getAll(req, res) {
    const {
      latitude,
      longitude,
      distance,
      priceValue = null,
    } = req.query;

    const location = Sequelize.literal(`ST_GeomFromText('POINT(${latitude} ${longitude})', 4326)`);
    const distanceQ = Sequelize.fn('ST_Distance', Sequelize.literal('location'), location);

    return this.model.findAll({
      ...(priceValue && {
        include: {
          attributes: [
            'treasure_id',
            'amount',
          ],
          model: this.app.datasource.models.transureMoney,
          require: true,
          where: {
            amount: {
              [Op.gte]: priceValue,
            },
          },
        },
      }),
      attributes: [
        'id',
        'name',
        [distanceQ, 'distance'],
      ],
      where: Sequelize.where(distanceQ, { [Op.lte]: distance }),
    })
      .then((result) => response(result, res))
      .catch((error) => errorResponse(error.message, res));
  }
}
