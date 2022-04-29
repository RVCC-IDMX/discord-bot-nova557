/* eslint-disable import/order */
/* eslint-disable import/extensions */
import {Client, Intents} from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();


const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log('The bot is ready');
  let handler = require('./command-handler');
  if (handler.default) handler = handler.default;

  handler(client);
});

client.login(process.env.TOKEN);
