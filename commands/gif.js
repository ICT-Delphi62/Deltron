const fetch = require("node-fetch");

module.exports = {
  name: "gif",
  description: "Returns a random GIF from Tenor with specified context.",
  async execute(client, message, args) {
    try{
      const response = await fetch(
        `https://g.tenor.com/v1/random?q=${args.join(" ")}&key=LIVDSRZULELA&limit=50`
      );
      const data = await response.json();
      message.reply(data["results"][Math.floor(Math.random() * data['results'].length)]["media"][0]["gif"]["url"]);
    }
    catch(err) {
      message.reply('An error occured!\n try to type `(prefix)gif A cute dog`');
    }
  },
};

