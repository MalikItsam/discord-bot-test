const client = require('../index')
const {Captcha} = require ("captcha-canvas");
const {MessageAttachment, GuildPreview, Role, MessageEmbed}= require("discord.js");
client.on("guildMemberAdd",async(member)=>{
   if(member.guild.memberCount <=5) 
   {
    member.roles.add('935202542508470282');
   };
const captcha = new Captcha(); //create a captcha canvas of 100x300.
captcha.async = true //Sync
captcha.addDecoy(); //Add decoy text on captcha canvas.
captcha.drawTrace(); //draw trace lines on captcha canvas.
captcha.drawCaptcha(); //draw captcha text on captcha canvas.
const captchaAttachment = new MessageAttachment(
  await captcha.png,
  "captcha.png"
);
const captchaEmbed= new MessageEmbed()
    .setTitle(' **MalikSellStuff Verification** ')
    .setColor("GREEN")
    .setDescription('Please send the Captcha in the message.\nIt is Case sensitive captcha.\nOnly Write Letters that are strikethrough\nYou only have 10 minutes to verify!!')
    .setImage('attachment://captcha.png')
const msg = await member.send({files:[captchaAttachment],embeds:[captchaEmbed],})
const filter = (message) =>{
    if(message.author.id !== member.id) return;
    if(message.content=== captcha.text) return true;
    else member.send("You have entered wrong captcha\bTry Again");
};
try{
const response= await msg.channel.awaitMessages({
    filter,
     max: 1,
     time:60000,
     errors:["time"],

});
if(response){
    member.roles.remove('935202542508470282');
    member.roles.add('935202653259046972');
    const channel = member.guild.channels.cache.get('934570600037511178')//welcome message channel id
    const welcomeEmbed =new MessageEmbed()
    .setTitle("**ᴡᴇʟᴄᴏᴍᴇ ɴᴏᴛᴇ**")
    .setDescription(`**${member.displayName} Welcome to ${member.guild.name}\nWe now have ${member.guild.memberCount} Members`)
    .setColor("RED")
    .setThumbnail('https://cdn.discordapp.com/attachments/934763030892412968/934934488625070150/MalikSellzStuff_1.png')
    .setImage ('https://images-ext-2.discordapp.net/external/WqOlhFd2TF-x2xQthAazIxY2ABW-CLAVag38JfltK5A/https/media.discordapp.net/attachments/916225054390513695/916565398298701844/GIF_AN_1.gif')
    //.setFooter(`ᴀɴɴᴏᴜɴᴄᴇᴅ ʙʏ ${admin.username} `)
    channel.send({ embeds: [welcomeEmbed] })
   member.send('You have been verified');

}
}catch(err){
await member.send('You are not verified and I have Kicked you from MalikSellsStuff!');
member.kick('You have not completed captcha');
}
});