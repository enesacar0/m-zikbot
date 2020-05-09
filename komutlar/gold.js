const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**» Gold Üye Olmak İçin!**", " [Tıkla](http://fuseteam.glitch.me/konular/goldüye.html)", )
  .setFooter('© 2019 FuseTeam', client.user.avatarURL)
  message.channel.send({embed})
  }
   
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: 'gold',
  description: 'Gold Üye Olursunuz!',
  usage: 'gold'
};