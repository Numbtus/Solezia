const Discord = require('discord.js');

module.exports.run = async (bot , message , args ) => {
         let patchEmbed = new Discord.RichEmbed()
             .setDescription('Affiche les different patch notes des mise a jour precedente')
             .setColor('#1e85ca')
             .addField('0.3.5','- Ajout de la commande : <help','Modification du <info le nombre de serveur et la version du bot sont maintenant disponibles')
             .addField ('Commande en dev', 'Soyez Patient' );
             return message.channel.send(patchEmbed);

};
module.exports.help = {
    name: 'patch'
};
