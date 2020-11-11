const { MessageFlags } = require("discord.js");
 
exports.run = async (client, message, args) => {
if(!message.member.roles.cache.some(role =>["Owner! 👑", "Co-Owner! 👑"].includes(role.name))){
console.log("No! <3")
return;
}

let msg;
let textChannel = message.mentions.channels.first()
message.delete()

if(textChannel) {
msg = args.slice(1).join(" ");
textChannel.send(msg)
} else {
msg = args.join(" ");
message.channel.send(msg)
}
}