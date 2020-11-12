exports.run = async (client, message, args) => {

const Discord = require('discord.js')

module.exports = {
    name: "new",
    description: "Create a new ticket.",
    execute(message, args){
        var number = Math.floor(Math.random() * 9999) + 1;
        var user = message.author
        var supportteamroleID = '776217783486251069'
        var logchannel = message.guild.channels.cache.find((x) => (x.name === "ticket-logs"))

        const ticketreason = args.slice(0).join(" ")

        if(!ticketreason){
            message.channel.send("Please provide a reason for opening this ticket.")
            return
        }

        message.guild.channels.create(`ticket-${number}`, {
            type: 'text'
        }).then((channel) => {
            const categoryid = '776528523082334228'
            const channelid = channel.id
            channel.setParent(categoryid)

            // update permissions
            channel.overwritePermissions([
                {
                    id: '775660541627596810',
                    allow: [],
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: user.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'EMBED_LINKS', 'READ_MESSAGE_HISTORY'],
                    deny: []
                },
                {
                    id: supportteamroleID,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'EMBED_LINKS', 'READ_MESSAGE_HISTORY'],
                    deny: []
                }
            ])

            message.channel.send({embed :{

                footer: {
                    text: "Berry | Ticket System"
                },
                color: 0x2332FF,
                title: "Ticket Opened",
                description: `Your ticket has been opened! \n \n Ticket Channel: <#${channelid}>. Support will be with you shortly.`,
    
            } })
            channel.send(`<@&${supportteamroleID}> <@${user.id}>`)
            channel.send({embed :{

                footer: {
                    text: "Berry | Ticket System"
                },
                color: 0x2332FF,
                title: "Ticket Description",
                description: `Ticket Reason: ${ticketreason} \n \n User who opened ticket: <@${user.id}> \n \n To close this ticket, please type '~close'. \n **Must be a member of the Support Team or Board of Directors.**`
    
            } })

            logchannel.send({embed :{

                footer: {
                    text: "Berry | Ticket System"
                },
                color: 0x2332FF,
                title: "Ticket Opened",
                description: `Ticket Number: ${number} \n \n User who opened: <@${user.id}> \n \n Opening Reason: ${ticketreason}`,
                timestamp: new Date()
    
            } })
            
            setTimeout(function(){
                message.channel.bulkDelete(2)
            }, 5000);

        })


    }  
}
}