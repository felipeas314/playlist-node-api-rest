const { Router } = require('express');

const routes = new Router();

const userService = require('../src/app/services/user');

routes.get('/health', (req, res) => {
  res.status(200).json({
    date: new Date(),
    message: 'Server UP!!!',
    status: 'OK',
  });
});

const SERVICE_USERS = '/users';


routes.get(SERVICE_USERS, userService.list);

routes.get(`${SERVICE_USERS}/:id`, userService.findById);

routes.put(`${SERVICE_USERS}/:id`, userService.delete);

routes.post(SERVICE_USERS, userService.create);

module.exports = routes;