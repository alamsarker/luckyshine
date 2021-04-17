import Controller from './controller';
import { response, errorResponse } from './response';

export default class UserController extends Controller {
  login(req, res) {
    const {
      email,
      password,
    } = req.body;

    return this.model.findOne({
      attributes: [
        'id',
        'name',
        'age',
        'email',
      ],
      where: {
        email,
        password,
      },
    })
      .then((result) => response(result, res))
      .catch((error) => errorResponse(error.message, res));
  }
}
