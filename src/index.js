const Eris = require('eris');
const { token, prefix, playing } = require('./settings.json');

const ErisClient = new Eris(token);

ErisClient.editStatus({ name: playing });

ErisClient.on('ready', () => {
  console.log('Ready.');
});

ErisClient.on('messageCreate', (msg) => {
  if (msg.content.startsWith(prefix)) {
    let prefslice = msg.content.slice(prefix.length);
    let commandName = prefslice.split(' ')[0];
    if (prefslice != '') {
      try {
        require(`./Commands/${commandName}.js`)(msg, ErisClient);
      } catch (err) {
        console.log(err.stack);
      }
    }
  }
});

ErisClient.connect();
