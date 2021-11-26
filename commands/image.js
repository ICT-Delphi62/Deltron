const fetch = require("node-fetch");
require("dotenv").config();

module.exports = {
  name: "image",
  description: "Returns a random image from Bing Image Search with specified context.",
  async execute(client, message, args) {
    try {
      //Calls the API store the response
      const response = await fetch(
        `https://bing-image-search1.p.rapidapi.com/images/search?q=${args.join(" ")}&count=20`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
            "x-rapidapi-key":
              process.env.X_RAPIDAPI_KEY,
          },
        }
      );
      const data = await response.json();
      message.reply(data['value'][Math.floor(Math.random() * data['value'].length)]['contentUrl']);
    } catch (err) {
      message.reply(`An error occured!\n try to type \`${process.env.PREFIX}image A cute dog\``);
    }
  },
};
