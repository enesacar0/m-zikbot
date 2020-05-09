const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komutlar Hakkında Yardım Almak İçin -!bilgi <komut>')
.setTimestamp()
.addField('» Eğlence Komutları', "`8ball , " + "ara155 , " + "hacked , " + "rip , " + "trump , " + "çekiç , " + "stresçarkı`")
.addField('» Moderatör Komutları', "`kick , " + "ototag , " + "ototagkanal , " + "sayaç-ayarla , " + "sayaç-sıfırla  " + "temizle , " + "mute , " + "unban`")
.addField('» Genel Komutları', "`avatar , " + "havadurumu , " + "istatistik , " + "kullanıcıbilgim , " + "ping  " + "server-icon , " + "öneri ," + "gold`")
.addField('» Ekstra Komutları', "`davet , " + "doviz , " + "espiri , " + "sayıtahmin`")
.addField('» Müzik Komutları', "`oynat , " + "geç , " + "devamet , " + "durdur , " + "durakalat , " + "tekrar , " + "pop  " + "radyo`")
.addField('» Gold Üye Komutları', "`hile , " + "zengin`")
.setFooter('© 2019 FuseTeam', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};