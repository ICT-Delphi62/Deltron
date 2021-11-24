const Discord = require('discord.js');
const dotenv = require("dotenv");
dotenv.config();

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.commands = new Discord.Collection();
client.commands = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(process.env.TOKEN)