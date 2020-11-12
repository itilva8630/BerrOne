const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calculate",
    description: "Get the answer to a math problem",


    async run (client, message, args){

        if(!args[0]) return message.channel.send({embed: {
       timestamp: new Date(),
      footer: {
        text: 'Powered By Berry'
      },
          color: 15158332,
          title: "ERROR!",
          description: "Please provide a question for me to calculate!"
        }});

        
        
        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send({embed: {
          timestamp: new Date(),
           footer: {
           text: 'Powered By Berry'
            },
            color: 15158332,
            title: "ERROR!",
            description: "Please provide a **valid** question! The question you provided is invalid." 
            }})
        }

        const embed = new Discord.MessageEmbed()
        .setColor(3066993)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)
        .setFooter('Powered By Berry')
        .setTimestamp()

        message.channel.send(embed);

    }
}