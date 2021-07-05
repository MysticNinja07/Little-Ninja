const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "simple help command",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Prefix- `?`')
        .setAuthor('Command List', message.author.displayAvatarURL())

        .addFields({
            name: 'About this bot',
            value: 'Hey there im little Ninja,Im a Multipurpose Bot made to help u,i was made by Mystic Ninja#6666!',
        },
        {
            name: 'Information',
            value: '`ping` | `feedback`| `bug` | `av` | `roles`',       
        },
        {
            name: 'Fun',
            value: '`8ball` | `howgay` | `howsimp` | `meme` | `rps` | `tictactoe` | `coinflip` | `reverse',

        },
        {
            name: 'Moderation',
            value: '`kick` | `ban` | `reactionrole` | `poll` | `mute` | `unmute` | `lock` | `unlock`', 

        },
        {
            name: 'Image',
            value: '`deepfry` | `tweet`',

        },)

        message.channel.send(help)
    }
}