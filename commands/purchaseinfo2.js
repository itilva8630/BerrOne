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
            color: 15844367,
      title: ":second_place: | Enterprise Tier",
      fields: [{
       name: "Price",
        value: `1000 Robux or $10 USD - Monthly`,
        inline: true
      },
      {
        name: "Included In This Tier",
        value: "All of Bronze & Silver Tier. Best uptime, say command, role (gives specified user a role) command, Discord count command, 15 basic text/embed commands, best support, no branding, deleted message logs, Roblox Group Management Package (see below).",
        inline: true
      },
      {name: "Role In Discord",
      value: "<@&775825659078508544>" ,
      inline: true
      }
    ]


    }
  });
}
