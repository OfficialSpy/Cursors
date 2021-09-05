const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        //now lets start the embed!
        // this the embed template
        const embed = new Discord.MessageEmbed()
            .setColor('#cc5500') // Over here we can put the color of the embed => hex code or in caps
            .setTitle('Embed') // This is the title of the embed
            .setURL('https://youtube.com/c/rickastley') // This is the URL for the title
            .setAuthor('author!', 'https://images-ext-2.discordapp.net/external/RvpBrrfY_BZVZ-sM3hN6Av6BAdXoSSPG0iUO2hSV5l4/%3Fsize%3D256/https/cdn.discordapp.com/icons/882556121552916490/ac814b82b270a1e71efc7384e7051b28') // The author comes above the title, so the first part is the text and second is the icon.. let me get a icon url
            .setDescription('This is an embed') // this is right below the title
            .setThumbnail('https://images-ext-2.discordapp.net/external/RvpBrrfY_BZVZ-sM3hN6Av6BAdXoSSPG0iUO2hSV5l4/%3Fsize%3D256/https/cdn.discordapp.com/icons/882556121552916490/ac814b82b270a1e71efc7384e7051b28') // Thumbnail comes next to the title its a image
            .addFields(
                { name: 'Field 1', value: 'hi' }, // There are fields
                { name: 'Field 2', value: 'holla' }, // lets add one more field and remove the \u200b
                //{ name: '\u200B', value: '\u200B' }, // this is optional.. the \u200b is for leaving space under the first field
            )
            .addField('Field 4', 'sup') // now i will show u what the true does
            .addField('Field 5', 'hello') // this is a normal field.. the true is for making it inline.. you can make it false and try it
            .setTimestamp() // this will give the time when the embed was sent
            .setFooter('footer', 'https://images-ext-2.discordapp.net/external/RvpBrrfY_BZVZ-sM3hN6Av6BAdXoSSPG0iUO2hSV5l4/%3Fsize%3D256/https/cdn.discordapp.com/icons/882556121552916490/ac814b82b270a1e71efc7384e7051b28'); // right bellow the embed

        message.channel.send({ content: 'this is an embed', embeds: [embed] }); // make sure to put {embeds: [embed]}
    }
}