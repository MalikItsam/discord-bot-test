const {Captcha} = require ("captcha-canvas");
const {MessageAttachment}= require("discord.js");
{
  module.exports={
    name: "captcha",
    description: "returns a captcha",
    userPermissions: ["ADMINISTRATOR"],
    run: async(client,message,args)=>{
  const captcha = new Captcha(); //create a captcha canvas of 100x300.
  captcha.async = true //Sync
  captcha.addDecoy(); //Add decoy text on captcha canvas.
  captcha.drawTrace(); //draw trace lines on captcha canvas.
  captcha.drawCaptcha(); //draw captcha text on captcha canvas.
  //captcha.text();
  const captchaAttachment = new MessageAttachment(
    await captcha.png,
    "captcha.png"
  );
  message.channel.send({
      files:[captchaAttachment],
      content:`Code: ${captcha.text}` ,
  });
    },
  };
}
  
