import * as cowsay from 'cowsay';
import { IOptions } from 'cowsay';

// at the top of your file
import { Message, MessageEmbed } from 'discord.js';


	let cowNamesList: string[] = [];

function getCows(error: any, cowNames: any) {
  if (error) {
    console.log(error);
  } else if (cowNames) {
    console.log(`Number of cows available are: ${cowNames.length}`);
    cowNamesList = cowNames;
  }
};
cowsay.list(getCows);

export default {
  callback: (_message: Message, ...args: string[]) => {
    console.log(args)
    let file = args[0]
    if (!file) {
      file = 'random'
    };

const opts: IOptions = {
  text: 'hello',
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

let output: string = cowsay.say(opts);

output = `
\`\`\`
${output}
\`\`\`
`;

if (output.length > 2000) {
  output = 'Sorry, the cow is sleeping. Please come again later';
}


		// inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
	.setColor('#0583d2')
	.setTitle('Cowbarn')
	.setURL('https://discord.com/channels/956214464825413722/956214464825413725')
	.setDescription(output)
  .setThumbnail('https://raw.githubusercontent.com/RVCC-IDMX/discord-bot-nova557/main/images/alien.png')
	.addFields(
		{ name: 'Cowsay', value: 'Image' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Person?', value: 'Any Image', inline: true },
		{ name: 'Place?', value: 'Any Image', inline: true },
	)
	.addField('Thing?', 'Any Image', true)
	.setImage('https://raw.githubusercontent.com/RVCC-IDMX/discord-bot-nova557/main/images/barn.png')
	.setTimestamp()
	.setFooter({ text: 'nova557', iconURL: 'https://raw.githubusercontent.com/RVCC-IDMX/discord-bot-nova557/main/images/alien.png' });
    console.log(MessageEmbed);
_message.channel.send({ embeds: [exampleEmbed] });
		}
	};
