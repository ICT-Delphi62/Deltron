module.exports = {
  name: "kick",
  description: "Kicks mentioned user",
  permissions: ["KICK_MEMBERS"],
  execute(client, message, args) {
    try {
      const member = message.mentions.users.first();
      //Checks if the message mentioned someone and the message only contains a mention
      if (member && args.length == 1) {
        //Kicks member
        message.guild.members
          .kick(member.id)
          .then((kickInfo) => message.reply(`Kicked ${member.username}!`))
          .catch((err) =>
            //Catch error, usually because the mentioned user has an authority on the server
            message.reply(
              `Make sure you mentioned an unauthorized member!\nYou have to manually kick an authorized member!`
            )
          );
      } else {
        throw "SomethingWrong";
      }
    } catch (err) {
      message.reply(
        `Make sure you mentioned a valid user! \nex: \`${process.env.PREFIX}kick @example\``
      );
    }
  },
};
