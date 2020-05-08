const express = require ('express');
const UsuariosController = require ('./controllers/UsuariosController');
const Profilecontroller = require ('./controllers/Profilecontroller');
const SessionController = require ('./controllers/SessionController'); //importando express e controllers

const routes = express.Router(); //desacoplando Router do express e alocando na nova variável

routes.put('/profile', Profilecontroller.edit); //editar perfil
routes.post('/sessions', SessionController.login); //login (criando uma sessão)
routes.get('/usuarios', UsuariosController.index); //listagem
routes.post('/usuarios', UsuariosController.create); //cadastro

module.exports = routes;