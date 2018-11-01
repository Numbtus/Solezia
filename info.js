const Discord = require('discord.js');

module.exports.run = async (bot , message , args ) => {
    let botIcon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setDescription('Toutes Les Informations Du Bot [BETA]')
        .setColor('#3b12ef')
        .setThumbnail(botIcon)
        .addField('Nom du Bot', bot.user.username)
        .addField('Date De creation', bot.user.createdAt)
        .addField('Nombre de serveur ',bot.guilds.size)
        .addField('<help', 'Pour avoir toute les commandes du bot ')
        .addField('Version', '0.3.7')
        .addField('Developpé Par Numbtus','©Numbtus 2018. Développé par Numbtus');
   
   return message.channel.send(embed);

};
module.exports.help = {
    name: 'info'
};