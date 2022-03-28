import cowsay from './utils/cowsay';
import * as cowsay from "cowsay";
import { IOptions } from "cowsay";
import getRandomInt from './random';
import quotes from './quotes.json';

export default function (message.content === "cowsay") {
  if (message.content === "cowsay") {
  message.react("😊").then(console.log).catch(console.error);
  const output = cowsay();
  message.reply(output).then(console.log).catch(console.error);
};
var random_nr = Math.floor(Math.random()*Array.length);


if (message.content === "cowsay") {
  message.react("😊").then(console.log).catch(console.error);
  const output = cowsay();
  message.reply(output).then(console.log).catch(console.error);
};

let opts: IOptions = {
    r: true,
  };
  console.log(cowsay.say(opts));

  const args = message.content
    .toLowerCase()
    .substring(PREFIX.length)
    .slice()
    .trim()
    .split(/ /);
 const command = args.shift()!;
