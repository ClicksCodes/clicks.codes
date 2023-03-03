import Styles from "../../styles/Components/transcripts.module.css"
import Image from "next/image";
import Showdown from "showdown";
import Axios from "axios";
import { useEffect, useState } from "react";

const bold = /(\*\*.+\*\*)/g;
const italic = /(\*.+\*|\_.+\_)/g;
const emoji = /(<a?:.+:\D+>)/g;
const user = /(<@!?\d+>)/g;
const underline = /(\_\_.+\_\_)/g;
const strikethrough = /(\~\~.+\~\~)/g;
const code = /(\`.+\`)/g;
const codeBlock = /(\`\`\`.+\`\`\`)/g;
const spoiler = /(\`\`\`.+\`\`\`)/g;

const regex = /(\*\*\*.+\*\*\*|\*\*.+\*\*|\*.+\*|\_.+\_|\_\_.+\_\_|\~\~.+\~\~|\`.+\`|\`\`\`.+\`\`\`|\`\`\`.+\`\`\`|<a?:.+:\D+>|<@!?\d+>|<#\d+>)/g;

async function parse(text) {
    const splitText = text.split(regex);
    console.log(splitText)
    return await splitText.map( async (item, index) => {
        if (item.match(bold)) {
            return <b key={index}>{item.replaceAll(/\*\*/g, '')}</b>
        }
        if (item.match(underline)) {
            return <u key={index}>{item.replaceAll(/\_\_/g, '')}</u>
        }
        if (item.match(italic)) {
            return <i key={index}>{item.replaceAll(/\*/g, '')}</i>
        }
        if (item.match(code)) {
            return <code key={index}>{item.replaceAll(/\`/g, '')}</code>
        }
        if (item.match(emoji)) {
            return <Image key={index} src={`https://cdn.discord.com/emojis/${item.replaceAll(/\D/g, '')}`} width={20} height={20} alt="" />
        }
        if (item.match(user)) {
            const username = (await Axios.get(`http://${process.env.NUCLEUS_CALLBACK}/users/${item.replaceAll(/\D/g, '')}`)).data;
            console.log(username)
            return <>{username}</>

        }
        return item
    })


}

function Embed(props) {

    let description = props.embed.description;
    if (description) {
        description = description.split("\n");
    }

    return (
        <div className={Styles.embed} style={{borderColor: props.color ?? "#F27878"}}>
            {
                props.embed.author ?
                <div className={Styles.embedAuthor}>
                    {
                        props.embed.author.iconURL ?
                        <Image src={props.embed.author.iconURL} alt=""/> :
                        null
                    }
                    {
                        props.embed.author.url ?
                        <a href={props.embed.author.url}>
                            {props.embed.author?.name ?? ""}
                        </a> :
                        <p>{props.embed.author?.name ?? ""}</p>
                    }
                </div> :
                null
            }
            {
                props.embed.title ?
                <div className={Styles.embedTitle}>{props.embed.title}</div> :
                null
            }
            {
                props.embed.description ?
                <div className={Styles.embedDescription}>
                    {
                        description.map((item) => {
                            return <>{item}<br /></>;
                        })
                    }
                </div>
                : null
            }
        </div>
    )
}

export default Embed;
