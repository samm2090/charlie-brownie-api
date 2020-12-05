const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlayerSchema = require('./player.schema');

const ScheduleSchema = new Schema(
  {
    startTime: Number,
    endTime: Number,
  },
  { _id: false }
);

const FieldSchema = new Schema(
  {
    name: String,
    address: String,
    specific: String,
  },
  { _id: false }
);

const MatchSchema = new Schema(
  {
    organizer: String,
    date: Date,
    schedule: [ScheduleSchema],
    numberOfPlayers: Number,
    numberOfTeams: Number,
    field: FieldSchema,
    cost: Number,
    players: [PlayerSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = MatchSchema;
