const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get-card')
        .setDescription('Replies with image of your requested card by id')
        .addStringOption(option =>
            option.setName('card-id')
                .setDescription('The id of your requested pokemon card. I.E: swsh7-192 or xy1-1')
                .setRequired(true)),
    async execute(interaction) {
        const id = interaction.options.getString('card-id');
        
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
    },
};