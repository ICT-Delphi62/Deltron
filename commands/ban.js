module.exports = {
  name: "ban",
  description: "Bans mentioned user",
  permissions: ["BAN_MEMBERS"],
  execute(client, message, args) {
    try {
      const member = message.mentions.users.first();
      //Checks if the message mentioned someone and the message only contains a mention
      if (member && args.length == 1) {
        //Bans member
        message.guild.members
          .ban(member.id)
          .then((banInfo) => message.reply(`Banned ${member.username}!`))
          .catch((err) =>
            //Catch error, usually because the mentioned user has an authority on the server
            message.reply(
              `Make sure you mentioned an unauthorized member!\nYou have to manually ban an authorized member!`
            )
          );
      } else {
        throw "SomethingWrong";
      }
    } catch (err) {
      message.reply(
        `Make sure you mentioned a valid user! \nex: \`${process.env.PREFIX}ban @example\``
      );
    }
  },
};
