const { oid, prefix } = require('./settings.json');

module.exports = function (msg, ErisClient, args) {
  if (msg.author.id == oid) {
    const splittext = msg.content.split(' ');
    console.log(splittext);
    if (splittext[0] == `${prefix}eval`) {
      const sliced = msg.content.slice(6);
      try {
        let evaluated = eval(sliced);
        console.log(evaluated);
        msg.channel.createMessage('Input:\n```js\n' + sliced + '```\nOutput:\n```js\n' + evaluated + '\n```');
      } catch (err) {
        console.log('An error occurred while using eval:' + err.message);
        msg.channel.createMessage('Error:\n```xl\n' + err.message + '\n```');
      }
    }
  }
};
