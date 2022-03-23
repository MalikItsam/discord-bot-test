const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has('MANAGE_MESSAGES')) return interaction.reply({ content: `You don't have the permissions to purge, die.` });
        interaction.followUp({ content: `${client.ws.ping}ms!` });
    },
};
