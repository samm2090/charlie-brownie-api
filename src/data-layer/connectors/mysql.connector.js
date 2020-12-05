const { createPool } = require('mysql2');

let connection;

module.exports.connect = () => {
  try {
    this.connection = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    console.log('Connected to mysql');
  } catch (error) {
    console.log(error);
  }
};

module.exports.close = () => {
  this.connection.end();
};

module.exports.getObject = async (options) => {
  const [record] = await this.connection.promise().query(options);
  return record && record.length ? JSON.parse(JSON.stringify(record))[0] : null;
};

module.exports.getList = async (options) => {
  const [record] = await this.connection.promise().query(options);
  return record && record.length ? JSON.parse(JSON.stringify(record)) : null;
};
