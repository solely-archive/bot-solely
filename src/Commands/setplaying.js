const { oid } = require('./settings.json');

module.exports = function (msg, ErisClient) {
  if (msg.author.id == oid) {
    const args = msg.content.split(' ').slice(1);
    ErisClient.editStatus({ name: args.join(' ') });
  }
};
