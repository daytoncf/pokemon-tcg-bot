const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('andrew')
        .setDescription('Describes Andrew Cheney'),
    async execute(interaction) {
        await interaction.reply(`Cool guy!`);
    },
};