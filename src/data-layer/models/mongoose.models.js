const mongoose = require('mongoose');
const PlayerSchema = require('./schemas/player.schema');
const MatchSchema = require('./schemas/match.schema');

module.exports.Players = mongoose.model('players', PlayerSchema);
module.exports.Matches = mongoose.model('matches', MatchSchema);
