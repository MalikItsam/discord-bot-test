const client = require('../index')
const {MessageAttachment, GuildPreview, Role, MessageEmbed, GuildMember}= require("discord.js");
client.on('guildMemberRemove',async(member)=>{
   
    const channel = member.guild.channels.cache.get('934570605821452358')//welcome message channel id
     const leftEmbed =new MessageEmbed()
    .setTitle("**ʟᴇꜰᴛ ɴᴏᴛᴇ**")
    .setDescription(`**${member.displayName} has left ${member.guild.name}\nWe now have ${member.guild.memberCount} Members**`)
    .setColor("RED")
    .setThumbnail('https://cdn.discordapp.com/attachments/934763030892412968/934934488625070150/MalikSellzStuff_1.png')
    .setImage ('https://images-ext-2.discordapp.net/external/WqOlhFd2TF-x2xQthAazIxY2ABW-CLAVag38JfltK5A/https/media.discordapp.net/attachments/916225054390513695/916565398298701844/GIF_AN_1.gif')
    //.setFooter(`ᴀɴɴᴏᴜɴᴄᴇᴅ ʙʏ ${admin.username} `)
    channel.send({ embeds: [leftEmbed] })
   });