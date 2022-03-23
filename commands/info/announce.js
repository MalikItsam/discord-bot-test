const { MessageEmbed, MessageActionRow, MessageButton,Message } = require('discord.js');
module.exports = {
    name: "announce",
    aliases: ["announce"],
    description: 'do Announcement',
    
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const anntext = message.content.slice("".length).trim().split(/ +/);
        anntext.shift().toLowerCase().split(" ")[0]
        
         const embed = new MessageEmbed()
         .setTitle("**📢ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ**")
         .setDescription(`**${anntext.join(" ")}**`)
         .setColor("RED")
         .setThumbnail('https://cdn.discordapp.com/attachments/934763030892412968/934934488625070150/MalikSellzStuff_1.png')
         .setImage ('https://images-ext-2.discordapp.net/external/WqOlhFd2TF-x2xQthAazIxY2ABW-CLAVag38JfltK5A/https/media.discordapp.net/attachments/916225054390513695/916565398298701844/GIF_AN_1.gif')
         .setFooter(`ᴀɴɴᴏᴜɴᴄᴇᴅ ʙʏ ${message.author.username} `)
         
         message.channel.send({ embeds: [embed] })
         message.delete();
        }
}
