const Discord = require('discord.js');
const client = new Discord.Client();
var prefix ="-"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا

// playing
client.on('ready', () => {                           
client.user.setGame(`DARK SIDE SERVER'); 
 });

client.on('message', msg =>{
    let message=msg;
    if(message.content.startsWith("-bc")){
        var args = message.content.split(' ').slice(1).join(' ');
    msg.guild.members.forEach(m=>{
        m.send(args.replace(/[user]/g,m)).catch();
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
    }
    })    ;
    }
});
