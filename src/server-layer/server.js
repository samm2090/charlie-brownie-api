const express = require('express')();
const { createServer } = require('http');
const { loadConfig } = require('./config/server.config');

let serverPort;

module.exports.start = () => {
  loadConfig(express);
  const port = serverPort || process.env.SERVER_PORT;
  const server = createServer(express);
  server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
};

module.exports.setPort = (port) => {
  serverPort = port;
};
