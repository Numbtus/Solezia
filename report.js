const Discord = require('discord.js');

module.exports.run = async (bot , message , args ) => {
    let reportedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
          if (!reportedUser)  {
             return message.channel.send("Utilisateur Introuvable");

         }
          let reportedReason = args.join(" ").slice(22);

         
         
        
         let reportEmbed = new Discord.RichEmbed()
             .setDescription("Signalement")
             .setColor("#f60e0e")
             .addField("Utilisateur Signalé", `${reportedUser}`)
             .addField("Signalé Par ", `${message.author}`)
             .addField("Channel Du Signalement", message.channel)
             .addField("Raison", reportedReason);
         
         let reportChannel = message.guild.channels.find('name', "report-ban-kick")
         if (!reportChannel) {  
             return message.channel.send("Channel Introuvable. Veuillez en creer un nommer 'report-ban-kick' !! Ne laisser pas les jouerus y acceder !!!") 
         }
         message.delete();
         reportChannel.send(reportEmbed);

};
module.exports.help = {
    name: 'report'
};