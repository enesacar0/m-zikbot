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
  .setAuthor(message.author.username + ' Adamda Gold Üye Hielsi Var Moruq!')
  .setImage("https://media.giphy.com/media/aRm4O6gICYnQc/giphy.gif")
  .setFooter('Hileci Geldiii :D', client.user.avatarURL)
  message.channel.send({embed})
  }

    }
      
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hile"],
  permLevel: 0
};

exports.help = {
  name: 'hile', 
  description: "Hile Link Atar.[Dikkate Almayın]",
  usage: 'hile'
};