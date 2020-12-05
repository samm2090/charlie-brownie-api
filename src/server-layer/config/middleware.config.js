const express = require('express');
const morgan = require('morgan');

module.exports.loadMiddlewares = (app) => {
  app.use(express.json());
  app.use(morgan('dev'));
};
