const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "helpinfo",
    description: "more adv. help command",

    async run (bot, message, args) {

        const BotInfo = new Discord.MessageEmbed()
        .setColor(0xD866BE)
        .setTitle('Bot Information')
        .addField('**Prefix**', 'Bots prefix is: `?`')
        .addField('**Pages**', '`1.Bot Information`, `2.Information`, `3.Fun` , `4.Moderation` , `5.Image`',)
        .addField('**Navigation Help**', 'Use the arrows below to look through the pages!')

        const Information = new Discord.MessageEmbed()
        .setColor(0xD86685)
        .setTitle('Information')
        .addField('`?ping`', 'Shows you the bots ping!')
        .addField('`?feedback`', 'Sends a message to my developer!')
        .addField('`?bug`', 'Report bugs to my developer to fix it..!')
        .addField('`?av`','Shows the avatar of the specified user..!')
        .addField('`?roles`','Shows the roles of the specified user..!')

        const fun = new Discord.MessageEmbed()
        .setColor(0xD88066)
        .setTitle('Fun')
        .addField('`?8ball`', 'Ask it a question and it will respond.....')
        .addField('`?howgay`', 'Tells you how gay someone is 👀')
        .addField('`?howsimp`','Tells you how simp someone is😉')
        .addField('`?meme`', 'Sends a random meme from random meme reddit!')
        .addField('`?rps`', 'Play rock paper scissors against the bot')
        .addField('`?tictactoe`', 'Play tictactoe against a specified user!')
        .addField('`?coinflip`','Flips the coin to a random side..!')
        .addField('`?reverse`','Reverses the specified message...!')

        const moderation = new Discord.MessageEmbed()
        .setColor(0xD88066)
        .setTitle('Moderation')
        .addField('`?kick`','Kicks a member....!')
        .addField('`?ban`','Bans a mentioned member.......!')
        .addField('`?reactionrole`','Sends the reaction message to the specified channel!')
        .addField('`?poll`','Sends the poll to the specified channel.!')
        .addField('`?mute`','Mutes the mentioned member..!')
        .addField('`?unmute`','Unmutes the mentioned member...!')
        .addField('`?lock`','Locks the specified channel...!')
        .addField('`?unlock`','Unlocks the specified channel..!')

        const image = new Discord.MessageEmbed()
        .setColor(0xD88066)
        .setTitle('Image')
        .addField('`?deepfry`','Sends a deepfried image of the users avatar...!')
        .addField('`?tweet`','Sends a fake tweet image of specified message...!')
        

        const pages = [
            BotInfo,
            Information,
            fun,
            moderation,
            image,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = '600000';

        pagination(message, pages, emojiList, timeout)
    }
}