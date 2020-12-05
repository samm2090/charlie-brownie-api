const { Matches } = require('../../data-layer/models/mongoose.models');

module.exports.listMatches = () => {
  return Matches.find();
};

module.exports.createMatch = (match) => {
  return Matches.create(match);
};

module.exports.addPlayer = async (matchId, player) => {
  const match = await Matches.findById(matchId);
  let result;

  if (match.players.length < match.numberOfPlayers) {
    match.players.push(player);
    result = await match.save();
  } else {
    result = 'Las plazas de jugadores están llenas';
  }

  return result;
};
