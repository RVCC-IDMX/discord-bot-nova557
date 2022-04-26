/* eslint-disable import/order */
/* eslint-disable import/extensions */
import {Client, Intents} from 'discord.js';
import cowsay from './utils/cowsay';
import dotenv from 'dotenv';

if (Number(process.version.slice(1).split('.')[0]) < 16) {
  throw new Error('Update Node to 16.x or higher');
}

dotenv.config();
const PREFIX = process.env.PREFIX || 'hn!';
console.log(`prefix is ${PREFIX}`);
const TOKEN = process.env.TOKEN || null;
if (!TOKEN) {
  console.error('TOKEN is not defined');
  process.exit(1);
}

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log('The bot is ready');
});

client.on('messageCreate', (message) => {
  console.log(` message content is ${message.content}`);
  console.log(message.content.startsWith(PREFIX));
  if (message.content.startsWith(PREFIX) === false) return;

  const validCommands = ['ping', 'cowsay'];

  const args = message.content
    .toLowerCase()
    .substring(PREFIX.length)
    .slice()
    .trim()
    .split(/ /);
  const command = args.shift()!;
  console.log(`command is ${command}`);

  if (!validCommands.includes(command)) {
    message.channel.send('Invalid command');
    console.log(`Invalid command: ${command}`);
    return;
  }

  if (command === 'ping') {
    // react to message and include error handling
    message
      .react('😂')
      .then(() => console.log(`Reacted to message "${message.content}"`))
      .catch(console.error);

    // reply to message and include error handling
    message.reply({
      content: 'pong',
    })
    .then(() => console.log(`Replied to message "${message.content}"`))
    .catch(console.error);
  }
  if (command === 'cowsay') {
    // react to message and include error handling
    message
    .react('😎')
    .then(() => console.log(`Reacted to message "${message.content}"`))
    .catch(console.error);

    const output: string = cowsay();

    // reply to message and include error handling
    message
      .reply({
      content: output,
    })
    .then(() => console.log(`Replied to message "${message.content}"`))
    .catch(console.error);
  }
});

client.login(TOKEN);
