    
const Discord = require("discord.js");
const token = process.env.token;

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TutoBot, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login(token);
