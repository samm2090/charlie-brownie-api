const { connect, disconnect } = require('mongoose');

module.exports.connect = () => {
  const connectionString = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.DB_PICHANGA}`;

  connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
    .then(() => {
      console.log('Mongo DB succesful connection');
    })
    .catch(() => {
      console.error('Mongo DB connection error');
    });
};

module.exports.disconnect = () => {
  disconnect()
    .then(() => {
      console.log('Mongo DB disconnected');
    })
    .catch(() => {
      console.error('Mongo DB error disconnecting');
    });
};
