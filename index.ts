import DiscordJs, { Intents } from "discord.js";
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
    });
  }
});

client.login(process.env.TOKEN);

client.on("messageCowsay", (message) => {
  if (message.content === "cowsay") {
    message.reply(`/
    Hello from Tyepscript!'/
    ${process.env.TOKEN}
    `);
  }
});
