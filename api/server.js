const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// server
const server = express();

// imports

// global middlewares
server.use(helmet());
server.use(express.json());
server.use(cors());

// routes

// sanity check
server.get('/', (req, res) => {
  res.send('<h2>I am alive and well!</h2>');
});

module.exports = server;
