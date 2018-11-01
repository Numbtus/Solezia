const Discord = require('discord.js');

module.exports.run = async (bot , message , args ) => {
         let patchEmbed = new Discord.RichEmbed()
             .setDescription('Affiche les different patch notes des mise a jour precedente')
             .setColor('#1e85ca')
             .addField('0.3.7',' Ajout de la commande : <help')
             .addField ('0.3.7', ' Modification du <info le nombre de serveur et la version du bot sont maintenant disponibles');
             return message.channel.send(patchEmbed);

};
module.exports.help = {
    name: 'patch'
};
