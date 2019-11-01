const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '-'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => { // Toxic Codes 
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' **ADMINISTRATORلا يوجد صلاحيه **');
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله : ${args}`)
.setDescription(`**برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nلكتابه اسم السيرفر اكتب في الرساله :[server]\nلكتابه اسم المراسل  اكتب في الرساله :[by]\nلكي يقوم  البوت بمنشن الاعضاء اكتب في الرساله :[user]**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var EmbedRep = args.replace('[server]' ,message.guild.name).replace('[user]', m).replace('[by]', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('[server]' ,message.guild.name).replace('[user]', m).replace('[by]', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});

client.login(process.env.BOT_TOKEN);
