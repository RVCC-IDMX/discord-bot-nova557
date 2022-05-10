"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const weather = require("weather.ts")
const cowsay_1 = tslib_1.__importDefault(require("./utils/cowsay"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
if (Number(process.version.slice(1).split('.')[0]) < 16) {
    throw new Error('Update Node to 16.x or higher');
}
dotenv_1.default.config();
const PREFIX = process.env.PREFIX || 'hn!';
console.log(`prefix is ${PREFIX}`);
const TOKEN = process.env.TOKEN || null;
if (!TOKEN) {
    console.error('TOKEN is not defined');
    process.exit(1);
}
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
});
client.on('ready', () => {
    console.log('The bot is ready');
});
client.on('messageCreate', (message) => {
    console.log(` message content is ${message.content}`);
    console.log(message.content.startsWith(PREFIX));
    if (message.content.startsWith(PREFIX) === false)
        return;
    const validCommands = ['ping', 'cowsay'];
    const args = message.content
        .toLowerCase()
        .substring(PREFIX.length)
        .slice()
        .trim()
        .split(/ /);
    const command = args.shift();
    console.log(`command is ${command}`);
    if (!validCommands.includes(command)) {
        message.channel.send('Invalid command');
        console.log(`Invalid command: ${command}`);
        return;
    }
    if (command === 'ping') {
        message
            .react('😂')
            .then(() => console.log(`Reacted to message "${message.content}"`))
            .catch(console.error);
        message.reply({
            content: 'pong',
        })
            .then(() => console.log(`Replied to message "${message.content}"`))
            .catch(console.error);
    }
    if (command === 'cowsay') {
        message
            .react('😎')
            .then(() => console.log(`Reacted to message "${message.content}"`))
            .catch(console.error);
        const output = (0, cowsay_1.default)();
        message
            .reply({
            content: output,
        })
            .then(() => console.log(`Replied to message "${message.content}"`))
            .catch(console.error);
    }
    if (command === "weather") {
        bot.commands.get("weather").execute(message, args, Discord, weather)
    }
});
client.login(TOKEN);
