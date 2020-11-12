const Discord = require('discord.js')

exports.run = async (client, message, args) => {
        const channel = message.channel
        const channelname = message.channel.name
        var logchannel = message.guild.channels.cache.find((x) => (x.name === "ticket-logs"))
        const user = message.author

        var closingreason = args.slice(0).join(" ")

        if (!closingreason) {
            message.channel.send("Please provide a reason to close this ticket.")
            return
        }

        const splitname = channelname.split("-")

        var ticketnumber = splitname[1]

        if (splitname[0] !== 'ticket') {
            return
        } else {
            if (message.member.roles.cache.has('776217783486251069') || message.member.roles.cache.has('776218143454265399')) {
                channel.send("This ticket has been closed and the channel will be deleted in 5 seconds.")

                logchannel.send({
                    embed: {

                        footer: {
                            text: "Berry | Ticket System"
                        },
                        color: 0x2332FF,
                        title: "Ticket Closure",
                        description: `Ticket Number: ${ticketnumber} \n \n User who closed: <@${user.id}> \n \n Closing Reason: ${closingreason}`,
                        timestamp: new Date()

                    }
                })

                setTimeout(function () {
                    channel.delete()
                }, 5000);
                
            } else {
                message.channel.send("You must be part of the Support Team or a Board of Director to close a ticket.");
            }
        }
    }

