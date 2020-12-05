const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: String,
    phone: String,
  },
  {
    timestamps: true,
  }
);

module.exports = PlayerSchema;
