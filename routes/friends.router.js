const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.get('/friends', friendsController.getFriends);
friendsRouter.post('/friends', friendsController.postFriend);
friendsRouter.get('/friends/:id', friendsController.getfriendByID);

module.exports = friendsRouter;
