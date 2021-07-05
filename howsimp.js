const Discord = require('discord.js')

module.exports = {
    name: "howsimp",
    description: "a simprate command",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howsimpembed = new Discord.MessageEmbed()
        .setTitle(`Simp Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Simp❤")
        .setColor("BLUE")

        message.channel.send(howsimpembed);
    }
}
