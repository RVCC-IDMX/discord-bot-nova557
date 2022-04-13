import {Client, Intents} from 'discord.js';
import dotenv from 'dotenv';

import * as cowsay from 'cowsay';

dotenv.config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  ],
});

client.on('ready', () => {
  console.log('The bot is ready');
});

client.on('messageCreate', (message) => {
  if (message.content === 'ping') {
    message.reply({
      content: 'pong',
    });
  }
  if (message.content === 'cowsay') {
    let output: string = cowsay.say({ text: 'Hello from typescript!'});

    output = `
    \`\`\`
    ${output}
    \`\`\`
    `;

    message.reply({
      content: output,
    });
  }
});

client.login(process.env.TOKEN);