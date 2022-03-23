const { Message, Client, MessageEmbed } = require("discord.js");
const weather = require("weather-js")
module.exports = {
    name: "weather",
    aliases: ["weather"],
    description: 'weather info',
    
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, msg, args) => {
let city = args.join(" ");
    if(!city) {
        return msg.channel.send('Please provide some city will you find!');
    }

    weather.find({ search: city, degreeType: "C" }, function (err, result) {

        if (err) return msg.channel.send(err);
        if(!args[0]) return msg.channel.send('Please specify a location!')

        if(result === undefined || result.length === 0) return msg.channel.send('**invaild** location!')

        var current = result[0].current;
        var location = result[0].location;

        const weatherembed = new MessageEmbed()
        .setColor('#2f3136')
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setDescription(`**${current.skytext}**`)
        .addField('Timezone', `UTC ${location.timezone}`, true)
        .addField('Degree Type', 'Celsius', true)
        .addField('Temperature', `${current.temperature}˚`, true)
        .addField('Wind', `${current.winddisplay}`, true)
        .addField('Feels Like', `${current.feelslike}˚`, true)
        .addField('Humidity', `${current.humidity}%`, true)
        msg.channel.send({ embeds: [weatherembed] })

        })
    }
}