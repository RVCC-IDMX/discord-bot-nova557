import { Message, MessageEmbed } from "discord.js"
import axios from 'axios'
import dotenv from 'dotenv';


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

module.exports = {
  callback: async (message: Message, ...args: string[]) => {
    dotenv.config();
    console.log(process.env.API)
    let city = args.join(' ')
    console.log(city)

    const query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API}`
    const response = await axios.get(query);
    const data = response.data;
    const weather = response.data.weather[0].main
    const description = response.data.weather.description
    city = response.data.name
    const temp = response.data.main.temp
    const humidity = response.data.main.humidity
    const speed = response.data.wind.speed
    const sunset = response.data.sys.sunset
    const sunrise = response.data.sys.sunrise

    console.log(data);
        const exampleEmbed = new MessageEmbed()
      .setTitle(`Current Weather In ${city}`)
      .setDescription(weather)
      .setThumbnail('https://raw.githubusercontent.com/RVCC-IDMX/discord-bot-nova557/main/images/cloudy.jpg')
      .setColor("#3cb043")
      .setTimestamp()
      .addField("Temperature: ", `${temp} F`, true)
      .addField("Wind Speed: ", `${speed} `, true)
      .addField("Humidity: ", `${humidity} %`, true)
      .addField("Sunrise: ", `${sunrise} AM`, true)
      .addField("Sunset: ", `${sunset} PM`, true)
      .setFooter({ text: 'nova557', iconURL: 'https://raw.githubusercontent.com/RVCC-IDMX/discord-bot-nova557/main/images/alien.png' });
      message.channel.send({ embeds: [exampleEmbed] })

  }

  // name: 'weather',
  // description: "The weather report",
  // execute(message: { channel: { send: (arg0: string) => void } }, args: any[], Discord: { MessageEmbed: new () => { (): any; new(): any; setTitle: { (arg0: string): { (): any; new(): any; setDescription: { (arg0: any): { (): any; new(): any; setThumbnail: { (arg0: any): { (): any; new(): any; setColor: { (arg0: string): { (): any; new(): any; setTimestamp: { (): { (): any; new(): any; addField: { (arg0: string, arg1: any, arg2: boolean): { (): any; new(): any; addField: { (arg0: string, arg1: any, arg2: boolean): { (): any; new(): any; addField: { (arg0: string, arg1: string, arg2: boolean): { (): any; new(): any; addField: { (arg0: string, arg1: string, arg2: boolean): { (): any; new(): any; setFooter: { (arg0: string): any; new(): any } }; new(): any } }; new(): any } }; new(): any } }; new(): any } }; new(): any } }; new(): any } }; new(): any } }; new(): any } }; new(): any } } }, weather: { find: (arg0: { search: any; degreeType: string }) => any }) {

  //   const city = args[0];


  //   weather.find({search: args.join(" "), degreeType: "C"}), function(error: any, result: string | any[]){

  //     if (error) return message.channel.send(error)
  //     if (!city) return message.channel.send("You didn't enter the name of the place of which you want to get the weather.")

  //     if (result === undefined || result.length === 0)
  //     return message.channel.send("You didn't specify a valid location")

  //     let current = result[0].current
  //     let location = result[0].location

  //     let embed = new Discord.MessageEmbed()
  //     .setTitle(`Showing the Weather Info for ${current.observationpoint}`)
  //     .setDescription(current.skytext)
  //     .setThumbnail(current.imageURL)
  //     .setColor("#3cb043")
  //     .setTimestamp()
  //     .addField("Temperature: ", current.temperature = "C", true)
  //     .addField("Wind Speed: ", current.winddisplay, true)
  //     .addField("Humidity: ", `${current.humidity}%`, true)
  //     .addField("Timezone: ", `UTC${location.timezone}`, true)
  //     .setFooter("Weather Command")
  //     console.log(MessageEmbed);
  //     message.channel.send(embed)

  //   }

  // }
}
