const { MessageEmbed } = require("discord.js");

module.exports = async (client, queue, playlist) => {
    const embed = new MessageEmbed()
        .setDescription(`**Queued • [${playlist.name}](${playlist.url})** \`${queue.formattedDuration}\` (${playlist.songs.length} tracks) • ${playlist.user}`)
        .setColor('#2f3136')
  
      queue.textChannel.send({ embeds: [embed] })
}