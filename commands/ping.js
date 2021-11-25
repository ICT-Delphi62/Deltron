module.exports = {
  name: "ping",
  description: "Ping? Pong!",
  execute(client, message, args) {
    message.reply(`Pong! ${client.ws.ping} ms`);
  },
};
