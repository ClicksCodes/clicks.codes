const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const cors = require('cors')
const kv = require('keyv')

const kvdb = new kv('mongodb://rsm:LJMy*orVFAATQ5PaX7EKXq74&HCDFaLE@192.168.1.30:27017/rsm')


const allowedOrigins = ['https://beta.clicksminuteper.net',
                        'https://clicksminuteper.net',
                        'http://192.168.1.28',
			'https://192.168.1.28'
                        'http://192.168.1.24'
]

app.use(express.json())
app.use(cors({
    origin: allowedOrigins
}));

app.post('/validate', async function (req, res) {
    let chk = await kvdb.get(req.body.code);
    if(chk) {
        return res.send(400).send('exists')
    } else {
        await kvdb.set(req.body.code,req.body.ids,1800000)
        return res.status(200).send('created')
    }
})

app.get('/guilds/:id', async function (req, res) {
    const guild = await client.guilds.fetch(req.params.id)
        .catch(err => {
            return res.send(err);
        });

    return res.send(JSON.stringify(guild)).end();
});

app.post('/verify', async function (req, res) {
    const guild = await client.guilds.fetch(req.body.gid);
    const user = await guild.members.fetch(req.body.uid);
    user.roles.add(req.body.rid).then(t => {
        t.send({embed: {
            title: "<:Tick:729064531107774534> Verified",
            description: `You are now verified in ${guild.name}`, 
            color: "#68D49E" 
        }});
        return res.status(200).end();
    }).catch(err => {
        return res.send(err).status(500).end();
    })
});


app.get('/users/:id', async function (req, res) {
    const user = await client.users.fetch(req.params.id)

    return res.send(JSON.stringify(user)).end();
});

app.get('/roles/:gid/:rid', async function (req, res) {
    const guild = await client.guilds.fetch(req.params.gid);
    const role = await guild.roles.fetch(req.params.rid);

    return res.send(JSON.stringify(role)).end();
});


app.listen(3001);
client.login('NzE1OTg5Mjc2MzgyNDYyMDUz.XtFO-Q.cSuhmCKFi5znZO-HCqN9yqxcbbw')

