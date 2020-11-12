require('dotenv').config();
exports.run = async (client, message, args) => {
  
  return message.channel.send({
    embed: {
      footer: {
        text: 'Berry | Custom Bot Information'
      },
      thumbnail: {
        url: `https://cdn.discordapp.com/attachments/700000077460144154/776180838299336754/179d1110-e018-47f3-8e03-58881011c4f9_200x200.png`
      },
            color: 3447003,
      title: ":third_place: | Bronze Tier",
      fields: [{
       name: "Price",
        value: `250 Robux Or $3 USD - Monthly`,
        inline: true
      },
      {
        name: "Included In This Tier",
        value: " Minor bot status control, less branding, suggestions, up to 5 basic text/embed custom commands, better uptime, moderation.",
        inline: true
      },
      {name: "Role In Discord",
      value: "<@&775826248126955540>" ,
      inline: true
      }
    ]


    }
  }),
// End of  Bronze, start of Silver
 message.channel.send({
    embed: {
      footer: {
        text: 'Berry | Custom Bot Information'
      },
      thumbnail: {
        url: `https://cdn.discordapp.com/attachments/700000077460144154/776180838299336754/179d1110-e018-47f3-8e03-58881011c4f9_200x200.png`
      },
            color: 9807270,
      title: ":second_place: | Silver Tier",
      fields: [{
       name: "Price",
        value: `500 Robux Or $5 USD - Monthly`,
        inline: true
      },
      {
        name: "Included In This Tier",
        value: "All of Bronze Tier. Full status control (Changes every few seconds), minimal branding, up to 10 basic text/embed commands, better uptime.",
        inline: true
      },
      {name: "Role In Discord",
      value: "<@&775825644055167029>" ,
      inline: true
      }
    ]


    }
  })
}