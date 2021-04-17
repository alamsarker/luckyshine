import UserController from '../controllers/user';
import login from '../validators/user_rules';
import validate from '../validators/validate';

export default (app) => {
  const userCtrl = new UserController(app.datasource.models.user, app);

  app.route('/users/login')
    .post(validate(login), (req, res) => userCtrl.login(req, res));
};
