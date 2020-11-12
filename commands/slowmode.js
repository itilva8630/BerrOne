
module.exports = {
    name: "slowmode",
    description: "Lets you set slowmode on the channel.",
    run: (client, message, args) => {
        const amount = parseInt(args[0])
       if(!message.member.roles.cache.some(role =>["Owner! 👑", "Head Community Moderator"].includes(role.name))){
        return message.channel.send({embed: {
            color: 16733013,
            footer: 'Berry | Moderation',
            description: "You don't have the requred role(s) to use this command.",
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
        if(isNaN(amount)) return message.channel.send({embed: {
          color: 15158332,
          title: "ERROR!",
          description: "Please enter a time for the slowmode.",
          timestamp: new Date(),
          footer: {
            text: "Berry | Moderation"
          }
        }})
        if(args[0] === amount + "s") {
        message.channel.setRateLimitPerUser(amount)
        if(amount > 1) {
        message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " second(s).",
          timestamp: new Date(),
          footer: {
            text: "Berry | Moderation"
          }
        }})
        return
        }
        else {message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " second(s).",
          timestamp: new Date(),
          footer: {
            text: "Berry | Moderation"
          }
        }})
        return }
    } if(args[0] === amount + "m") {
        message.channel.setRateLimitPerUser(amount * 60 * 1)
        if(amount > 1) {
        message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " minute(s).",
          timestamp: new Date(),
          footer: {
            text: "Berry | Moderation"
          }
        }})
        return
        } else { 
            message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " minute(s).",
          timestamp: new Date(),
          footer: {
            text: "Berry | Moderation"
          }
        }})  
             
    
    return }
    } if(args[0] === amount + "h") {
        message.channel.setRateLimitPerUser(amount * 60 * 60)
        if(amount > 1) {
        message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " hour(s).",
          timestamp: new Date(),
          footer: {
            text: "Berry | Moderation"
          }
        }})
        return
        } else {
            message.channel.send({embed: {
          color: 3066993,
          title: "SUCCESS!",
          description: "This channels slowmode is now " + amount + " hour(s).",
          timestamp: new Date(),
          footer: {
            text: "Berry | Moderation"
          }
        }})
        return}
    } else {
        message.channel.send({embed: {
          color: 15158332,
          title: "ERROR!",
          description: "You can only set seconds(s), minutes(m) and hours(h).",
          timestamp: new Date(),
          footer: {
            text: "Berry | Moderation"
          }
        }})
    }

    }
}