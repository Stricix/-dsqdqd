    
const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TutoBot, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NTQwMTA1MTc5ODQwOTA1MjE4.D2vJcg.I0dCxwJxsGI9pU9meDUjGVk-YAE");
