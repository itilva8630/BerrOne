exports.run = async (client, message, args) => {
  
  


  const time = require('ms')
  const uptime = time(client.uptime)
  message.channel.send({embed: {
    color: "RANDOM",
    title: "uptime Time",
    description: `The bot has been up for about ${uptime}.`,
    footer: {
      text: client.user.username,
      icon_url: client.user.displayAvatarURL()
    },
    timestamp: new Date()
  }})
}