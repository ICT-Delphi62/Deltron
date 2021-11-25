const fetch = require("node-fetch");

module.exports = {
  name: "reddit",
  description: "Returns an image from recent post on specified subreddit.",
  async execute(client, message, args) {
    try{
      const response = await fetch(
        `https://meme-api.herokuapp.com/gimme/${args}/1`
      );
      const data = await response.json();
      message.reply(data['memes'][0]['url']);
    }
    catch(err) {
      message.reply('Make sure you pass a real r/ page name! \nex: `(prefix)reddit dankmemes`');
    }
  },
};
