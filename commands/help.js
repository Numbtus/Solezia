const Discord = require('discord.js');

module.exports.run = async (bot , message , args ) => {
         let helpEmbed = new Discord.RichEmbed()
             .setDescription('Liste Des Commandes Du bot')
             .setColor('#1e85ca')
             .addField('<patch','affiche le patch note des mises a jours precedentes')
             .addField ('<info', 'Donne toutes les informations sur le bot' )
             .addField ('<infoserv', 'Donne toutes les informations sur le serveurs ' )
             .addField ('<report @user raison', 'Pour report un utilisateur' )
             .addField ('<kick @user raison ', 'Pour kick un utilisateur du discord' )
             .addField ('<ban @user raison ', 'Pour bannir un utilisateur du discord' );
             return message.channel.send(helpEmbed);

};
module.exports.help = {
    name: 'help'
};