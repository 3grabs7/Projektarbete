const fetch = require("node-fetch");
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
};

// Get site URL
module.exports = (msg) => {
  if (msg.content != "!memecodes") return;
  msg.reply(
    `Get all the meme codes here -> https://3grabs7.github.io/Projektarbete/`
  );
};

// Get bot commands
module.exports = (msg) => {
  if (msg.content != "!commands") return;
  let nt = "\n\t -> ";

  const embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Commands")
    .setURL("https://3grabs7.github.io/Projektarbete/")
    .setAuthor(
      "ChrisRob",
      "https://static.thenounproject.com/png/105264-200.png"
    )
    .setDescription("Ni fattar")
    .setThumbnail(
      "https://data.apksum.com/cb/com.jetfuel.colormeme/10.0/icon.png"
    )
    .addFields(
      { name: "!memecodes", value: "Get them codes", inline: false },
      { name: "!gif {search_term}", value: "Get some GIF", inline: false },
      {
        name: "!meme {meme_code} {first_text} {second_text}",
        value: "Make your meme",
        inline: false,
      },
      { name: "!schema", value: "No escuses", inline: false }
    )
    .setImage(
      "https://dazedimg-dazedgroup.netdna-ssl.com/495/azure/dazed-prod/1210/0/1210368.jpg"
    )
    .setTimestamp()
    .setFooter("Speak your memes");

  msg.reply(embed);
};
