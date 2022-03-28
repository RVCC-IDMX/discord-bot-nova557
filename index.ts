import DiscordJs, { Intents, Message } from "discord.js";
import dotenv from "dotenv";
import * as cowsay from "cowsay";
import { IOptions } from "cowsay";
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
    let output: string = cowsay.say({
      text: "Fall seven times and stand up eight. - author: Japanese Proverb!",
    });
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
  let opts: IOptions = {
    text: "Fall seven times and stand up eight. - author: Japanese Proverb!",
    e: "^^",
    T: "//",
    f: "oo",
    r: true,
    y: true,
  };
  console.log(cowsay.say(opts));
  const args = message.content
    .toLowerCase()
    .substring(PREFIX.length)
    .slice()
    .trim()
    .split(/ /);
  const command = args.shift()!;
});
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5

client.login(process.env.TOKEN);
