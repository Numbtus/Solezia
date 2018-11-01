const Discord = require('discord.js');

module.exports.run = async (bot , message , args ) => {
    let servIcon = message.guild.iconURL;
         let servEmbed = new Discord.RichEmbed()
             .setDescription('Toutes Les Informations Du Serveur')
             .setColor('#04ec2a')
             .setThumbnail(servIcon)  
             .addField('Nom Du Serveur', message.guild.name)
             .addField('Nombre De Membres', message.guild.memberCount)  
             .addField('Le Serveur a ete Creer le ', message.guild.createdAt)
             .addField('Vous Avez Rejoint Le Serveur Le', message.member.joinedAt);
             return message.channel.send(servEmbed);

};
module.exports.help = {
    name: 'infoserv'
};