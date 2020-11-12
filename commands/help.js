exports.run = async (client, message, args) => {
  message.channel.send({embed: {
    color: "RANDOM",
    thumbnail: {
            url: `https://cdn.discordapp.com/attachments/700000077460144154/776180838299336754/179d1110-e018-47f3-8e03-58881011c4f9_200x200.png`
        },
    title: "**__<a:exclamation:776515095886561320> Command List!__**",
    fields: [
      {
        name: "<:question:776517623302848592>   Need Help?",
        value: "Feel free to click on the blue text above for our command list! :)\n\n"
      },
      {
        name: "<:microphone:776517622938206229>   Bot Information",
      value: "This is an official support bot! Therefore, it has access to all the commands. This bot is powered by [Berry,](https://discord.gg/cbRSPFc6TV) an all in 1 customized bot."
      }
    ],
    footer: {
      icon_url: 'https://cdn.discordapp.com/attachments/700000077460144154/776180838299336754/179d1110-e018-47f3-8e03-58881011c4f9_200x200.png',
      text: "Powered By Berry!"
    },
    url: "https://berrybotmanagement.gitbook.io/berry-docs/commands/command-list",
    
    timestamp: new Date()
}})
}