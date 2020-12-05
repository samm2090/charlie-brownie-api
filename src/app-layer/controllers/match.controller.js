const httpStatus = require('http-status-codes');
const matchService = require('./../../business-layer/services/match.service');

module.exports.listMatches = async (req, res) => {
  const matches = await matchService.listMatches();
  res.status(httpStatus.OK).json(matches);
};

module.exports.createMatch = async (req, res) => {
  let match = req.body;
  match = await matchService.createMatch(match);
  res.status(httpStatus.OK).json(match);
};

module.exports.addPlayer = async (req, res) => {
  const { matchId } = req.params;
  const player = req.body;
  const result = await matchService.addPlayer(matchId, player);

  res.status(httpStatus.OK).json({ status: result });
};
