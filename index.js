const config = require('./config.json');
const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);

    let jsFile = files.filter(f => f.split('.').pop() === 'js' );
    if(jsFile.length <= 0) {
        console.log('Commandes Introuvable');
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props);
    });
});

bot.on('ready', async () => {
  console.log(`${bot.user.username} est en ligne`);
  bot.user.setActivity('<help Pour afficher toutes les commandes')
});

bot.on('message', async message => {
     if (message.author.bot) return;
     if (message.channel.type === 'dm') return;

     let prefix = config.prefix;
     let messageArray = message.content.split(" ");
     let command = messageArray[0];
     let args = messageArray.slice(1);
   

     let commandFile = bot.commands.get(command.slice(prefix.length));
     if (commandFile) commandFile.run(bot, message , args);

   const bonz = config.token 
});

bot.login(bonz);
