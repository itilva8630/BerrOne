exports.run = async (client, message, args) => {
 return message.channel.send({
    embed: {
      footer: {
        text: 'Berry | Important Custom Bot Information'
      },
      thumbnail: {
        url: `https://cdn.discordapp.com/attachments/700000077460144154/776180838299336754/179d1110-e018-47f3-8e03-58881011c4f9_200x200.png`
      },
            color: 3066993,
      title: "Roblox Group Management Package Information!",
       fields: [{
       name: "Promote/Demote",
        value: `Moves a user rank/down up one,`,
        inline: true
      },
      {name: "Setrank",
      value: "This will allow you to say ``!setrank (Roblox user) (Rank name or number).``",
      inline: true
       },
       {
         name: "Fire",
         value: "This will allow you to set the specified users rank to the lowest in the group.",
         inline: true
       },
       {
         name: "Accpet/Deny Join",
         value: "Accept or deny a join request",
         inline: true
       },
       {
         name: "Current Shout/Shout",
         value: "The ``currentshout`` command will allow you to see the current shout. The ``shout`` command allows you to post a group shout."
       },
       {
         name: "Auto Shout Notify",
         value: "This will post an embed in the specified channel whenever a new shout is posted. No work needed!",
         inline: true
       }
    ]

    }
  });
}