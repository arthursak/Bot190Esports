const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

client.on("guildMemberAdd", member => {
    member.guild.channels.get('858409160658649118').send(member.user.username + " Entrou para a Fámilia!");
    member.send('Salve Salve querido');
});

client.on("guildMemberRemove", member =>{
    member.guild.channels.get('858409160658649118').send(member.user.username + " Quitou da Fámilia!");
    member.send('Vai te toma no cu, saiu porque?');
});

client.on("ready", () => {
    client.user.setActivity("Gato Preto")
    console.log("logado")
})

client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
   
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "opa") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply('Bodia Moquiridu! :)')
    }

    else if (command === "soma") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`A soma ai deu ${sum}!`);
    }

    else if (command==="roleta") {
        numAleatorio = Math.floor(Math.random() * (10-1) + 1);
        if(numAleatorio == Math.floor(Math.random() * (10-1) + 1)){
            message.reply("Você morreu");
        } else{
            message.reply("Você ta vivo")
        }
    }
                           
                                
});                                      

client.login(config.BOT_TOKEN);

