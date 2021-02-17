const Discord = require("discord.js");

// Get schedule command
module.exports = (msg) => {
  if (msg.content === "!schema") {
    msg.reply("Här är schemat: ", {
      files: [
        {
          attachment: "https://i.imgur.com/IRZLFSE.png",
          name: "file.png",
        },
      ],
    });
  }
  // Get site URL
  if (msg.content === "!memecodes") {
    msg.reply(
      `Get all the meme codes here -> https://3grabs7.github.io/Projektarbete/`
    );
  }
  // dog - https://data.apksum.com/cb/com.jetfuel.colormeme/10.0/icon.png
  // pepeFuck - https://dazedimg-dazedgroup.netdna-ssl.com/495/azure/dazed-prod/1210/0/1210368.jpg
  // Get bot commands
  if (msg.content === "!commands") {
    const embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Commands")
      .setURL("https://3grabs7.github.io/Projektarbete/")
      .setAuthor(
        "ChrisRob",
        "https://data.apksum.com/cb/com.jetfuel.colormeme/10.0/icon.png"
      )
      .setDescription("Ni fattar")
      .setThumbnail(
        "https://dazedimg-dazedgroup.netdna-ssl.com/495/azure/dazed-prod/1210/0/1210368.jpg"
      )
      .addFields(
        { name: "!memecodes", value: "Get them codes", inline: false },
        { name: "!gif <Search Term>", value: "Get some GIF", inline: false },
        {
          name: "!meme <Meme Code> <Text 1> <Text 2>",
          value: "Make your meme",
          inline: false,
        },
        { name: "!schema", value: "No escuses", inline: false }
      )
      // .setImage(
      //   "https://dazedimg-dazedgroup.netdna-ssl.com/495/azure/dazed-prod/1210/0/1210368.jpg"
      // )
      .setTimestamp()
      .setFooter("Speak your memes");

    msg.reply(embed);
  }
};
