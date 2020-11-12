exports.run = async (client, message, args) => {
 return message.channel.send({
    embed: {
      footer: {
        text: 'Berry | Important Information'
      },
      thumbnail: {
        url: `https://cdn.discordapp.com/attachments/700000077460144154/776180838299336754/179d1110-e018-47f3-8e03-58881011c4f9_200x200.png`
      },
            color: 15158332,
      title: "Please Read!!",
      description: "Perks & Prices are subject to change. Payment instructions will be sent when a bot order is placed. Your token will be used for using our bot (therefore, you can customize the name, profile picture, etc). If you get the Enterprise Tier, you must provide a cookie from a bot that has permissions to rank members, post a shout, and view the shout. We're not responsible for any damage done with that account as we don't log into it. You can set the password, 2FA, etc You may customize the bot prefix for all Tiers. If you can't reach our price point, feel free to reach out to us as prices are negotiable. If you can't reach our monthly price point, please reach out to us and we can work that out as well. We thank you for taking interest in our group, have a fantastic day!*"

    }
  });
}