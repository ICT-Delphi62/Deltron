const fetch = require("node-fetch");
require("dotenv").config();

module.exports = {
  name: "gif",
  description: "Returns a random GIF from Tenor with specified context.",
  async execute(client, message, args) {
    try{
      //Calls the API store the response
      const response = await fetch(
        `https://g.tenor.com/v1/random?q=${args.join(" ")}&key=LIVDSRZULELA&limit=50`
      );
      const data = await response.json();
      message.reply(data["results"][Math.floor(Math.random() * data['results'].length)]["media"][0]["gif"]["url"]);
    }
    catch(err) {
      message.reply(`An error occured!\n try to type \`${process.env.PREFIX}gif A cute dog\``);
    }
  },
};

