import DiscordJs, { Intents, Message } from "discord.js";
import dotenv from "dotenv";
import * as cowsay from "cowsay";
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
    message
      .reply({
        content: "pong",
      })
      .then(() => console.log(`Replied to message "${message.content}"`))
      .catch(console.error);
  }
  if (message.content === "cowsay") {
    message.react("😊").then(console.log).catch(console.error);
    let output: string = cowsay.say({ text: "Hello from typescript!" });
    message
      .reply(
        `
    \`\`\`
    ${output}
    \`\`\`
    `
      )
      .then(() => console.log(`Replied to message "${message.content}"`))
      .catch(console.error);
  }
});
client.login(process.env.TOKEN);
