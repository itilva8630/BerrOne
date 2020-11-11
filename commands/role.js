exports.run = async (client, message, args) => {
if (message.member.hasPermission("MANAGE_ROLES")) {
    const target = message.mentions.members.first();
    const arr = message.content.split(" ");
    if (target) {
        const rname = arr.splice(2).join(" ");
        const role = target.guild.roles.cache.find(role => role.name.substring(0,rname.length).toLowerCase() === rname.toLowerCase());
        let alreadyHas = false
        let success = null
        if (role!=null) {
            alreadyHas = target.roles.cache.has(role.id)
        }
        if (alreadyHas) {
            success = target.roles.remove(role);
        } else {
            success = target.roles.add(role);
        }
        if (success&&role!=null) {
            if (alreadyHas) {
                message.channel.send({
                    embed: {
                      color: 3066993,
                        title: ":white_check_mark: Success!",
                        description: "Successfully removed the **"+role.name+"** role from "+target.toString()+"!"
                    }
                })
            } else {
                message.channel.send({
                    embed: {
                      color: 3066993,
                        title: ":white_check_mark: Success!",
                        description: 'Successfully gave **'+target.toString()+"** the **"+role.name+"** role!"
                    }
                })
            }
        } else {
        message.channel.send({
                embed: {
                  color: 15158332,
                    title: ":x: Error",
                    description: "Could not find role `"+rname+"`"
                }
        })  
        }
    } else {
      message.channel.send({
            embed: {
                  color: 15158332,
                title: ":x: Error",
                description: "Could not find user `"+arr[1]+"`"
            }
        })  
    }
} else {
    message.channel.send({
        embed: {
           color: 15158332,
            title: ":x: Error",
            description: 'You do not have permission to use this command! Missing permission: `Manage Roles`'            
        }
    })
}
}