import { Client } from 'discord.js'
import getFiles from './get-files'
import dotenv from 'dotenv';

dotenv.config();

let suffix = '.ts';
let src = 'src';
if (process.env.NODE_ENV === 'production') {
  suffix = '.js';
  src = 'dist';
  console.log('Running in production mode');
}

export default (client: Client) => {
  const commands = {} as {
    [key: string]: any
  };

  const suffix = '.ts' // Use '.js' if you are using JavaScript

  const commandFiles = getFiles(src, './commands', suffix);
  console.log(commandFiles)

  for (const command of commandFiles) {
    let commandFile = require(command)
    if (commandFile.default) commandFile = commandFile.default

    const split = command.replace(/\\/g, '/').split('/')
    const commandName = split[split.length - 1].replace(suffix, '')

    commands[commandName.toLowerCase()] = commandFile
  }

  console.log(commands)

  client.on('messageCreate', (message) => {
    if(message.author.bot || !message.content.startsWith('hn!')){
      return
    }

    const args = message.content.slice(3).split(/ +/)
    console.log(args)
    const commandName = args.shift()!.toLowerCase()
    console.log(`command ${commandName}`)


    if (!commands[commandName]) {
      console.log(`command ${commandName} not found`)
      return
      }

      try {
        commands[commandName].callback(message, ...args)
      } catch (error) {
        console.error(error)
      }
    })
  }
