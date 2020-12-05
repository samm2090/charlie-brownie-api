const server = require('./server-layer/server');

function main() {
  server.setPort();
  server.start();
}

main();
