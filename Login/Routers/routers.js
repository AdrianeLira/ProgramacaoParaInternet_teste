const { Router } = require('express');
const routers = new Router();

const Home = require('../controller/homeController');
const Session = require('../controller/SessionController');

routers.get('/home', Home.home);
routers.get('/', Home.index);
routers.get('/login', Home.login);
routers.post('/logar', Session.logar);
routers.get('/logout', Session.logout);
routers.get('/new', Home.new)
routers.get('/edit', Home.edit)

module.exports = routers;