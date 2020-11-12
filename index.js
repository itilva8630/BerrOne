const express = require('express');
const app = express();
const onchannel = 775663464668069909

app.get('/', (request, response) => {
     response.sendStatus(200);
});

let listener = app.listen(process.env.PORT, () => {
     console.log('Your app is currently listening on port: ' + listener.address().port);
});

const Discord = require('discord.js');
const client = new Discord.Client();
const roblox = require('noblox.js');
const chalk = require('chalk');
const figlet = require('figlet');
require('dotenv').config();
const fs = require('fs');

roblox.setCookie(process.env.cookie).catch(async err => {
    console.log(chalk.red('Issue with logging in: ' + err));
});

let commandlist = [];

var firstshout = true;
var shout;

async function onShout(){
  let shoutchannel = await client.channels.cache.get(process.env.shoutchannelid);
  if(firstshout == true){
    firstshout = false;
    shout = await roblox.getShout(Number(process.env.groupId));
    setTimeout(onShout, 30000);
  } else {
    setTimeout(onShout, 30000);
    let currentshout = await roblox.getShout(Number(process.env.groupId));
    if(currentshout.body == shout.body) return;
    if(currentshout.body){
      shoutchannel.send({embed: {
        color: 2127726,
        description: currentshout.body,
        author: {
          name: currentshout.poster.username,
          icon_url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${shout.poster.username}`
        }
      }});
    } else {
      shoutchannel.send({embed: {
        color: 2127726,
          description: '*Shout cleared.*',
            author: {
              name: currentshout.poster.username,
              icon_url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${shout.poster.username}`
            }
      }});
    }
    shout = currentshout;
  }
}
if(process.env.shoutchannelid !== 'false'){
  setTimeout(onShout, 15000);
}

fs.readdir('./commands/', async (err, files) => {
    if(err){
        return console.log(chalk.red('An error occured when checking the commands folder for commands to load: ' + err));
    }
    files.forEach(async (file) => {
        if(!file.endsWith('.js')) return;
        let commandFile = require(`./commands/${file}`);
        commandlist.push({
            file: commandFile,
            name: file.split('.')[0]
        });
    });
});

client.on('ready', async () => {
  console.log(chalk.yellow(figlet.textSync('qbot', { horizontalLayout: 'full' })));
  console.log(chalk.red(`Bot started!\n---\n`
  + `> Channels: ${client.channels.cache.size}\n`
  + `> Servers: ${client.guilds.cache.size}`));
   const activities_list = [
    "with some bots!", 
    "for !help",
    `over the community!`, 
    "with staff!",
    "with my systems",
    "the developers create new bots!",
    "for !help",
    "two custom bots"
    ];
 const type_list = [
   "PLAYING",
   "WATCHING",
   "WATCHING",
   "PLAYING",
   "PLAYING",
   "WATCHING",
   "WATCHING",
   "WATCHING"
];
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index], {type: type_list[index]}); 
  }, 10000);

})

client.on('message', async (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(process.env.prefix)) return;
    const args = message.content.slice(process.env.prefix.length).split(' ');
    const commandName = args[0].toLowerCase();
    args.shift();
    const command = commandlist.findIndex((cmd) => cmd.name === commandName);
    if(command == -1) return;
    commandlist[command].file.run(client, message, args);
});


client.on('guildMemberAdd', member => { // when a member joins
    const channel = member.guild.channels.cache.find(ch => ch.name === '💭-general'); // defining the channel to send the message in, simple. change the channel name to ur welcome channel name exact
    if (!channel) return; // if there is sno such channel, ignore the rest of the code
  channel.send({
    content: `<@${member.user.id}>,`,
    embed: {
      title: "Welcome To Bery!",
    description: 'Welcome to Berry, <@'
     + member.user.id + '>! Because you are seeing this, it means you have already verified and ready to start your journey here at Berry the best bot company out there!\n\n🤔 If you have any questions, feel free to open a ticket using the ``!new`` command in <#776509534453235712>!.\n\n🤩 Bot purchase information is located in <#775663449090162698>!\n\nℹ️ Make sure to check out the rules and other information in <#775664259895525406>\n\n\n*Signed,*\n***Berry***',
     footer: {
       text: "Berry | Official Bot"
     },
     color: "RANDOM"
    }
  });

  
})




client.on("messageDelete", async message =>{

  const loggingEmbed = new Discord.MessageEmbed()

.setTitle("Message Deleted")
.setColor("RED")
.setThumbnail(message.avatarURL)
.addField("Message:", message)
.addField("Deleted by: ", message.author.tag)
.addField("Channel Deleted In: ", message.channel)
.setTimestamp()
.setFooter("Berry | Moderation");


 if(process.env.messagelogchannel === 'false') return;
    let messagelogchannel = await message.guild.channels.cache.get(process.env.messagelogchannel);

messagelogchannel.send(loggingEmbed);

})

client.on("messageUpdate", async(oldMessage, newMessage) =>{
  if(oldMessage.content === newMessage.content){
    return;
  }

  const editedEmbed = new Discord.MessageEmbed()
  .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
  .setThumbnail(oldMessage.author.avatarURL)
  .setColor("BLUE")
  .setDescription("A message from a user was edited.")
  .addField("Before", oldMessage.content, true)
  .addField("After", newMessage.content, true)
  .addField("In Channel", newMessage.channel)
  .setTimestamp()
  .setFooter("Bery | Moderation")

 if(process.env.messagelogchannel === 'false') return;
    let messagelogchannel = await message.guild.channels.cache.get(process.env.messagelogchannel);

messagelogchannel.send(editedEmbed);


})
client.login(process.env.token);
