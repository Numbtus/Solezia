const Discord = require('discord.js');

module.exports.run = async (bot , message , args ) => {
    let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
    if (!kickedUser)  {
       return message.channel.send("Utilisateur Introuvable");

   }
    let kickedReason = args.join(' ').slice(22);
    if (!message.member.hasPermission("KICK_MEMBERS")){
        return message.channel.send("Vous n'avez pas les permissions nécessaire");
    };
    if (kickedUser.hasPermission("BAN_MEMBERS")){
        return message.channel.send("Cet utilisateurs ne peut pas etre kick");
    }


    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#e4ff00")
    .addField("Utilisateur kick", `${kickedUser}`)
    .addField("kick Par ", `${message.author}`)
    .addField("Raison", kickedReason);

let kickChannel = message.guild.channels.find('name', "report-ban-kick")
if (!kickChannel) {  
    return message.channel.send("Channel Introuvable. Veuillez en creer un nommer 'report-ban-kick' !! Ne laisser pas les jouerus y acceder !!!") 
};
message.guild.member(kickedUser).kick(kickedReason);
kickChannel.send(kickEmbed);
};
module.exports.help = {
    name: 'kick'
};