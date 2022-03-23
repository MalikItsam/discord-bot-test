const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply({ content: `You don't have the permissions to purge, die.` });
        message.channel.send(`${client.ws.ping} ws ping`);
    },
};
