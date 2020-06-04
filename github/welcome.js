//____________________________BENVENUTO_______________________________
client.on ("guildMemberAdd", member => {
 if (member.guild.id ===! '703334149725093948') return;
 const welcomechannel = member.guild.channels.cache.find(channel => channel.name === "benvenuto");
 
	
	let benvenuto  = new Discord.MessageEmbed()
	.setColor(`#00FF00`)
	
	.setDescription(`${member} benvenuto nel mio server! Per problemi contatta lo staff o il founder! ti consigliamo di andare su <#705002312724250694> ! Buona permanenza nel server!`)
	
	
   
   

	welcomechannel.send(benvenuto);

})
