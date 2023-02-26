const { MessageEmbed } = require("discord.js");

module.exports = async (client, query, queue) => {
    const embed = new MessageEmbed()
        .setColor("#2f3136")
        .setDescription(`No results found for ${query}!`)

    queue.textChannel.send({ embeds: [embed] })
}