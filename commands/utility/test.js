const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    aliases: ['boop', 'subtofiredragon'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const text = args.slice(0).join(' ')
        if (!text) return message.channel.send({ content: 'Tell me something' })
        message.channel.send({ content: `The text you told me is ${text}` })
    }
} // Now lets test this command