const Discord = require('discord.js');

module.exports.run = async (bot , message , args ) => {
    let banedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
    if (!banedUser)  {
       return message.channel.send("Utilisateur Introuvable");

   }
    let banedReason = args.join(' ').slice(22);
    if (!message.member.hasPermission("BAN_MEMBERS")){
        return message.channel.send("Vous n'avez pas les permissions nécessaire");
    };
    if (banedUser.hasPermission("BAN_MEMBERS")){
        return message.channel.send("Cet utilisateurs ne peut pas etre bannis");
    }


    let banEmbed = new Discord.RichEmbed()
    .setDescription("Bannissement")
    .setColor("#1f9fec")
    .addField("Utilisateur Bannis", `${banedUser}`)
    .addField("Bannis Par ", `${message.author}`)
    .addField("Raison", banedReason);

let banChannel = message.guild.channels.find('name', "report-ban-kick")
if (!banChannel) {  
    return message.channel.send("Channel Introuvable. Veuillez en creer un nommer 'report-ban-kick' !! Ne laisser pas les jouerus y acceder !!!") 
};
message.guild.member(banedUser).ban(banedReason);
banChannel.send(banEmbed);
};
module.exports.help = {
    name: 'ban'
};