client.on ("guildMemberRemove", member => {
		const goodbyechannel = member.guild.channels.cache.find(channel => channel.id === "714552259513417838");
		if (member.guild.id ===! '703334149725093948') return;
		
		let addio  = new Discord.MessageEmbed()
		.setColor(`#00FF00`)
		
		.setDescription(`${member} addio ci mancherai, forse`)
		
		
	   
	   
	
	 goodbyechannel.send(addio);
	
	})