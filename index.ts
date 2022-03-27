import DiscordJs, { Intents, Message } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.TOKEN);

const client = new DiscordJs.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("The bot is ready");
});

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply({
      content: "pong",
    }),
      message.react("😊").then(console.log).catch(console.error);
    message
      .reply("This is a reply!")
      .then(() => console.log(`Replied to message "${message.content}"`))
      .catch(console.error);
  }
});

client.login(process.env.TOKEN);

client.on("messageCowsay", (cowsay) => {
  if (cowsay.content === "cowsay") {
    cowsay.reply(`
    \`\`\`
    ${process.env.cowsay}
    `);
  }
});
