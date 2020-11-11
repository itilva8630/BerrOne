const express = require('express');
const app = express();

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
    "for !help"
    ];
 const type_list = [
   "PLAYING",
   "WATCHING",
   "WATCHING",
   "PLAYING",
   "PLAYING",
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
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general'); // defining the channel to send the message in, simple. change the channel name to ur welcome channel name exact
    if (!channel) return; // if there is sno such channel, ignore the rest of the code
  channel.send('<@' + member.user.id + '>,')
  
})


client.on('guildMemberAdd', member => { // when a member joins
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general'); // defining the channel to send the message in, simple. change the channel name to ur welcome channel name exact
    if (!channel) return; // if there is sno such channel, ignore the rest of the code
    const embed = new Discord.MessageEmbed() // just making the embed :)

    .setTitle('Welcome!')
    .setDescription('☕ Welcome to Skaddle, <@'
     + member.user.id + '>! Because you are seeing this, it means you have already verified and ready to start your journey here at Skaddle!\n\n🤔 If you have any questions, feel free to open a ticket in <#775829427430227978>!\n\nℹ️ Make sure to check out the rules and other information in <#775664259895525406>\n\n*Signed,*\n***Skaddle Support***')
    .setFooter('Skaddle | Order System')
    .setColor('RANDOM')
    channel.send(embed) // sending embed
  });

  client.on('message', async (message) => {
  const mention = message.mentions.members.first()
   if(mention.id === client.user.id) return message.react('😁'),
    message.channel.send("Hiya! Need some help? Run over to <#775800598364422152> and say ``!help``! This message will be deleted in 10 seconds. :)")
    .then(msg => {
                msg.delete({ timeout: 10000 /*time unitl delete in milliseconds*/});
            })
})

client.login(process.env.token);
