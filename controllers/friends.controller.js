const model = require('../models/friends.model');

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Missing Friend Name' });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  res.json(newFriend);
}

function getfriendByID(req, res) {
  const id = Number(req.params.id);
  const friend = model[id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: 'Friend Id not found' });
  }
}

function getFriends(req, res) {
  res.json(model);
}

module.exports = {
  postFriend,
  getfriendByID,
  getFriends,
};
