const path = require('path');

function getMessages(req, res) {
  const filePath = path.join(__dirname, '..', 'public', 'ProfilePic.jpeg');
  res.sendFile(filePath);
}

function postMessages(req, res) {
  console.log('Updating Messages');
}

module.exports = {
  getMessages,
  postMessages,
};
