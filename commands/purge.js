exports.run = async (client, message, args) => {
const Discord = require('discord.js');

		const{ member } = message;
		const invalidnumber = new Discord.MessageEmbed()
			.setColor('FF0000')
			.setTitle('Invalid Integer')
			.setDescription(`${message.author}, Please specify a number between 1 to 98 to purge`);
		if(member.hasPermission('ADMINISTRATOR' || member.hasPermission('MANAGE_MESSAGES'), 13)) {
			const amount = parseInt(args[0]) + 1;
			if (isNaN(amount)) {
				message.channel.bulkDelete(1);
				return message.channel.send(invalidnumber)
					.then(msg => {
						msg.delete({ timeout: 5000 });
					})
					.catch(console.error);
			}
			else if (amount <= 1 || amount >= 100) {
				message.channel.bulkDelete(1);
				const limit = new Discord.MessageEmbed()
					.setColor('FF0000')
					.setTitle('Limit Exceeded!')
					.setDescription(`${message.author}, Maximum Purge limit is 98`);
				return message.channel.send(limit)
					.then(msg => {
						msg.delete({ timeout: 5000 });
					})
					.catch(console.error);
			}
			message.channel.bulkDelete(amount, true).catch(err => {
				console.error(err);
				message.channel.bulkDelete(1);
				const error = new Discord.MessageEmbed()
					.setColor('FF0000')
					.setTitle('Error!')
					.setDescription(`There was an error trying to purge messages in this channel ${message.author}!`);
				message.channel.send(error);
			});
			const doneEmbed = new Discord.MessageEmbed()
			.setColor('00FF00')
			.setTitle('Purged Successfully!')
			.setDescription(`**${message.author.tag}**, Purged ${amount - 1} Messages`);
			message.channel.send(doneEmbed)
				.then(msg => {
					msg.delete({ timeout: 5000 });
				})
				.catch(console.error);
		}
		else{
			const noPerm = new Discord.MessageEmbed()
				.setColor('FF0000')
				.setTitle('Insufficient Permissions')
				.setDescription(`**${message.author.tag}**, You dont have Permissions To Execute this command!`);
			message.channel.send(noPerm)
				.then(msg => {
					msg.delete({ timeout: 5000 });
				});
		}
}