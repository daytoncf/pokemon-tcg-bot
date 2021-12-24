const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

// Get tcg api token from .env file in parent directory
require('dotenv').config( { path: '../.env'} );
const axInstance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2/cards/',
    timeout: 1500,
    headers: { 'X-Api-Key': process.env.TCG_KEY }
});

async function getCardData(card) {
    const response = await axInstance.get(card);
    return response.data;
}

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
        let cardObject = await getCardData(id);
        console.log(cardObject);
        console.log(id);
        await interaction.reply(cardObject.data.images.large);
    },
};