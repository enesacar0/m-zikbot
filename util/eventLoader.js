const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('guildMemberAdd', reqEvent('otorol'));
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
};