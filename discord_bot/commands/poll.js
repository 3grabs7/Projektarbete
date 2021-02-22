const fetch = require('node-fetch');

module.exports = function (msg, args) {

   if(!args[0]) {
        msg.reply("You have to give us a poll question!")
    }

    else {
    let msArgs = args.join(" ");

    msg.reply("📃 " + "**" + msArgs + "**").then(messageReaction => {
        messageReaction.react("👍");
        messageReaction.react("👎");
     //   msg.delete(200).catch(console.error);  --> Varför funkar inte detta? Vill deleta de man själv skrev
    })
}
 }



