require("dotenv").config();

module.exports = (Discord, client, message) => {
  const prefix = process.env.PREFIX;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd);

  //List of valid permissions
  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ];

  //Checks if the command need a permission
  if (command.hasOwnProperty("permissions")) {
    let missingPerms = [];
    for (const perm of command.permissions) {
      //Checks if the command permissions list has an invalid permission name
      if (!validPermissions.includes(perm)) {
        message.reply(`Tell the administrator to fix the code! \`Invalid Permissions: ${perm}\n On ${command.name} command\``)
        return console.log(`Invalid Permissions: ${perm}\n On ${command.name}`);
      }
      if (!message.member.permissions.has(perm)) {
        missingPerms.push(perm);
      }
    }
    //Checks if message sender has a missing permissions
    if (missingPerms.length) {
      return message.reply(`Missing Permissions: \`${missingPerms}\``);
    }
  }


  //If all checks passed, command will be executed
  if (command) command.execute(client, message, args, Discord);
};
