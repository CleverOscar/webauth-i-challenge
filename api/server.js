const express = require('express');
const server = express();
const helmet = require('helmet');

const db = require('../data/dbConfig');
const Users = require('../users/users-model');

server.use(express.json());
server.use(helmet());

module.exports = server;
