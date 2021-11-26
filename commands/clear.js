require("dotenv").config();

module.exports = {
    name: "clear",
    description: "Clear a specified amount of message.",
    permissions: ['MANAGE_MESSAGES'],
    async execute(client, message, args) {
      //Checks if user passed a number
      if(!args[0]) return message.reply(`Please enter the amount of messages that you want to clear!\nex: \`${process.env.PREFIX}clear 5\``);
      if(isNaN(args[0])) return message.reply('Please enter a real number!');
      
      //Checks if the number beyond the limit
      if(args[0] < 1) return message.reply('You must clear at least 1 message');
      if(args[0] > 99) return message.reply("You can't clear more than 99 messages!");

      await message.channel.messages.fetch({limit: ++args[0]}).then(messages =>{
          message.channel.bulkDelete(messages);
      });
    },
  };
  