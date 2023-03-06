import Axios from 'axios';
import React from 'react';
import Message from '../../../../Components/Transcripts/Message';
import _ from 'lodash';

const emojiRegex = /(<a?:.+:\D+>)/g;
const userRegex = /(<@!?\d+>)/g;
const channelRegex = /(<#\d+>)/g;

async function parseText(text) {
    const dict = {
        "emojis": {},
        "users": {},
        "channels": {}
    }
    const emojis = text.match(emojiRegex);
    if (emojis) {
        for (let i = 0; i < emojis.length; i++) {
            const emoji = emojis[i];
            const emojiID = emoji.replaceAll(/\D/g, '');
            const emojiURL = `https://cdn.discord.com/emojis/${emojiID}`;
            dict["emojis"][emoji] = emojiURL;
        }
    }
    const users = text.match(userRegex);
    if (users) {
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            const userID = user.replaceAll(/\D/g, '');
            const username = (await Axios.get(`${process.env.NUCLEUS_CALLBACK}users/${userID}`)).data;
            dict["users"][user.replaceAll(/<@|>/g, '')] = username;
        }
    }
    const channels = text.match(channelRegex);
    if (channels) {
        for (let i = 0; i < channels.length; i++) {
            const channel = channels[i];
            const channelID = channel.replaceAll(/\D/g, '');
            const channelName = (await Axios.get(`${process.env.NUCLEUS_CALLBACK}channels/${channelID}`)).data;
            dict["channels"][channel] = channelName;
        }
    }
    // console.log("parseText", dict)
    return dict
}

async function parse(json) {
    let dict = {
        "emojis": {},
        "users": {},
        "channels": {}
    }

    await _.forEach(json, async (message, index) => {
        let thisMessage = {}
        if(message.content) {
            let parsed = await parseText(message.content)
            // console.log(parsed)
            _.assign(thisMessage, parsed)
        }
        if(message.embeds) {
            _.forEach(message.embeds, async (embed, _index) => {
                // console.log(embed)
                if(embed.description) {
                    let parsed = await parseText(embed.description)
                    _.assign(thisMessage, parsed)
                }
                if(embed.title) {
                    let parsed = await parseText(embed.title)
                    _.assign(thisMessage, parsed)
                }
                if(embed.fields) {
                    _.forEach(embed.fields, async (field, _index) => {
                        if(field.name) {
                            let parsed = await parseText(field.name)
                            _.assign(thisMessage, parsed)
                        }
                        if(field.value) {
                            let parsed = await parseText(field.value)
                            _.assign(thisMessage, parsed)
                        }
                    })
                }
            })
        }
        // console.log(thisMessage)
        _.assign(dict, thisMessage)
        // console.log(index, dict)
    })

    // console.log("dict", dict)
    return dict;
}

function Index(props) {
    return <div style={{overflowY: "scroll", overflowX: "hidden"}}>
        <div style={{
            width: "100vw",
            height: "40px",
            backgroundColor: "#F27878",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            paddingLeft: "25px",
            color: "white",
            fontSize: "1.5em",
        }}>Transcript for: {props.data.for.username}#{props.data.for.discriminator} | In #{<a style={{color: "var(--theme-ui-colors-highlight)"}} href={`https://discord.com/channels/${props.data.guild}/${props.data.channel}`}>{props.channelName}</a>} | Type: {props.data.type}</div>
        <div style={{
            width: "100vw",
            backgroundColor: "var(--theme-ui-colors-background)", //Can we change this to be not black please. it's too contrast heavy
            margintop: "-50px",
            padding: "25px",
            paddingTop: "10px",
            transition: "all 0.3s ease-in-out"
        }}>
        {
            props.data.messages.map((message, index) => {
                return <Message key={index.toString()} message={message} />
            })
        }
        </div>
    </div>
}

export default Index;
export async function getServerSideProps(ctx) {
    if(!ctx.params.code) {
        return {
            redirect: {
                destination: '/nucleus/transcript/about',
                permanent: true
            }
        }
    }
    /*return {
        redirect: {
            destination: `/nucleus/transcript/${ctx.params.code}/human?key=${ctx.query.key}&iv=${ctx.query.iv}`,
            permanent: true
        }
    }*/
    let code;
    console.log("getting props")
    try {
        code = (await Axios.get(`${process.env.NUCLEUS_CALLBACK}transcript/${ctx.params.code}?key=${ctx.query.key}&iv=${ctx.query.iv}`));
    } catch (e) {
	console.log(e)
	console.log(`${process.env.NUCLEUS_CALLBACK}transcript/${ctx.params.code}?key=${ctx.query.key}&iv=${ctx.query.iv}`)
        return {
            redirect: {
                destination: '/nucleus/transcript/invalid',
                permanent: true
            }
        }
    }
    const linkedData = await parse(code.data.messages)

    const channelName = (await Axios.get(`${process.env.NUCLEUS_CALLBACK}channels/${code.data.channel}`)).data;

    return {
        props: {
            data: code.data,
            linkedData,
            channelName
        }
    }
}
