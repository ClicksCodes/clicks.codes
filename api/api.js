const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const cors = require('cors')

const allowedOrigins = ['https://beta.clicksminuteper.net',
                        'https://clicksminuteper.net'                        
]

app.use(express.json())
app.use(cors({
    origin: allowedOrigins
}));

app.get('/guilds/:id', async function (req, res) {
    const guild = await client.guilds.fetch(req.params.id)
        .catch(err => {
            return res.send(err);
        });

    return res.send(JSON.stringify(guild)).end();
});

app.post('/verify', async function (req, res) {
    console.log(req)
    const guild = await client.guilds.fetch(req.body.gid);
    const user = await guild.members.fetch(req.body.uid);
    user.roles.add('760901551496626187').then(t => {
        return res.status(200).end();
    }).catch(err => {
        return res.send(err).status(500).end();
    })
});


app.get('/users/:id', async function (req, res) {
    const user = await client.users.fetch(req.params.id)

    return res.send(JSON.stringify(user)).end();
});


app.listen(3001);
client.login('NzE1OTg5Mjc2MzgyNDYyMDUz.XtFO-Q.cSuhmCKFi5znZO-HCqN9yqxcbbw')