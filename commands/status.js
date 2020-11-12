exports.run = async (client, message, args) => {
  message.channel.send({embed: {
    color: "RANDOM",
    thumbnail: {
            url: `https://cdn.discordapp.com/attachments/700000077460144154/776180838299336754/179d1110-e018-47f3-8e03-58881011c4f9_200x200.png`
        },
    title: "Status Page",
    description: "Need our Status Page link? [Click here](https://berrystatus.statuspage.io/) to open it!\n\n**Current Status:**\nThe current stauts of the bot is **normal**. If you'd like to report a bug or bot has any issue, please join our [Discord Server](https://discord.gg/cbRSPFc6TV) and let us know so we can fix it.",
    footer: {
      text: "Berry | Status"
    },
      icon_url: { url: 'https://cdn.discordapp.com/attachments/700000077460144154/776180838299336754/179d1110-e018-47f3-8e03-58881011c4f9_200x200.png',
      },
      text: "Powered By Berry!"
    },
    url: "https://berrybotmanagement.gitbook.io/berry-docs/commands/command-list",
    
    timestamp: new Date()
  })}