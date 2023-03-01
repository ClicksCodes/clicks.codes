import Styles from "../../styles/Components/transcripts.module.css"
import Image from "next/image";
import JSDom from "jsdom";

function embed(props) {

    let description = props.embed.description;
    if (description) {
        description = description.split("\n");
    }

    return ( // added it
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
                        description.map(i => {// idk how to do make this work
                            i = i
                            .replaceAll(/<a?:.+:\D+>/g, (match, id) => {
                                return <Image src={`https://cdn.discordapp.com/emojis/${id}.png`} alt=""/>
                            })
                            .replaceAll(/\*\*.+\*\*/g, (match, text) => {
                                return <b>{text}</b>
                            })
                            .replaceAll(/\*.+\*/g, (match, text) => {
                                return <i>{text}</i>
                            })
                            return <>{new JSDom.JSDOM(i)}<br/></> // CANT FIND A DOM PARSER THAT WORKS
                        })
                    }
                </div>
                : null
            }
        </div>
    )
}

export default embed;