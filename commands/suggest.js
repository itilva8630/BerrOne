 const { MessageEmbed } = require("discord.js")


 module.exports = {
name: "suggest",
usage: "suggest <message>",
 description: "Send your Suggestion",
category: "main",
run: (client, message, args) => {

    if(!args.length) {
       return message.channel.send("Please provide a suggestion!")
   }
    
   let channel = message.guild.channels.cache.find((x) => (x.name === "💡-suggestions" || x.name === "💡-suggestions"))
     
   
    if(!channel) {
       return message.channel.send("there is no channel with name - suggestions")
    }
                                                    
 
 let embed = new MessageEmbed()
   .setThumbnail(message.author.avatarURL())
 .setColor("#FFD700")
   .setDescription(args.join(" "))
    .setTimestamp()
    .setFooter("Berry | Suggestions")
     .setAuthor (`Suggestion By ${message.author.tag}`)

    
   channel.send(embed).then(m => {
      m.react('✅')
      m.react('❌')
    })

    
    message.channel.send({embed: {
     color: 15105570,
     footer: {
        text: "Berry | Suggestions"
     },
      title: "POSTED!",
     description: "Your suggestion is now posted in <#775800586335027220> for other to vote on!",
   }})
    
}
 }