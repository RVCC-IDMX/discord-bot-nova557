import { Message } from 'discord.js'

//JS:
// module.exports = {}

//TS:
export default {
  callback: (message: Message, ...args: string[]) => {
    let multiply = 1

    for (const arg of args) {
      multiply *= parseInt(arg)
    }

    message.reply(`The multiply is ${multiply}`)
  },
}
