const Moment = require('moment')
const Discord = require('discord.js')
let prefix = '-!'
module.exports = client => {
  
  const aktiviteListesi = [
    `${prefix}yardım + ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı - fuseteam.glitch.me`,
    `${prefix}müzik + ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı - fuseteam.glitch.me`,
    `${prefix}radyo + ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı - fuseteam.glitch.me`,
    `${prefix}pop + ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı - fuseteam.glitch.me`,
  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 0))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 13000)
}
   