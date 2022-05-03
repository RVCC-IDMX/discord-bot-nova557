import * as cowsay from 'cowsay';
import { IOptions } from 'cowsay';
import quotes from '../utils/quotes.json';
import getRandomInt from '../utils/random';
import { Message } from 'discord.js'


let cowNamesList: string[] = [];

function getCows(error: any, cowNames: any) {
  if (error) {
    console.log(error);
  } else if (cowNames) {
    console.log(`Number of cows available are: ${cowNames.length}`);
    cowNamesList = cowNames;
  }
}

cowsay.list(getCows);


export default {
  callback: (message: Message, ...args: string[]) => {
    console.log(cowNamesList);
    console.log(args)
    let file = args[0]
    if (!file) {
      file = 'random'
    };


// export default function (file: string = 'random'): string {
  const quoteObj = quotes[getRandomInt(0, quotes.length)];

const opts: IOptions = {
  text: `${quoteObj.quote} - ${quoteObj.author}`,
  e: 'OO',
  r: true,
};

if (file !== 'random') {
  const cowExist = cowNamesList.includes(file);
  if (cowExist) {
    opts.f = file;
    opts.r = false;
  } else {
    console.log(`Cow ${file} does not exist`);
    return `Sorry, ${file} does not exist as a cow`;
  }
}

let output: string = cowsay.think(opts);

output = `
\`\`\`
${output}
\`\`\`
`;

if (output.length > 2000) {
  output = 'Sorry, the cow is sleeping. Please come again later';
}
message.reply(output)
  },
}
