module.exports = {
  name: "ping",
  description: "Ping? Pong!",
  execute(client, message, args) {
    //Replies the bot latency
    message.reply(`Pong! ${client.ws.ping} ms`);
  },
};
