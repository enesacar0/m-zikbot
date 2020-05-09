const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

          let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.author.username + ' Hop Zengin Geldi Kaçılın!')
  .setImage("https://media.giphy.com/media/wb6xgCSpLl0m4/giphy.gif")
  .setFooter('Gold Üye Zengin Geldi')
  message.channel.send({embed})
  }

    }
      
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["zengin"],
  permLevel: 0
};

exports.help = {
  name: 'zengin', 
  description: "Zengin Geldi Hop.",
  usage: 'zengin'
};