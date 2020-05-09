const Discord = require('discord.js');

exports.run = function(client, message) {
  
  if (message.author.id != "357198730245439488") return message.reply('Bunu Sadece Sahibim Kullanabilir');

    message.channel.send("Bot yeniden başlatılıyor").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};