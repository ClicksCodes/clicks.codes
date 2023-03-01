import Image from "next/image";
import Styles from "../../styles/Components/transcripts.module.css"
import * as hdate from 'human-date'

function Author(props) {
    const today = props.message.createdTimestamp - (1000 * 60 * 60 * 24) > 0;
    const last2days = props.message.createdTimestamp - (1000 * 60 * 60 * 24 * 2) > 0;
    const date = new Date(props.message.createdTimestamp)
    let timeDelta;
    if (today) {
        timeDelta = "Today";
    } else if (last2days) {
        timeDelta = "Yesterday";
    } else {
        timeDelta = hdate.prettyPrint(date).split(", ")[0];
    }
    timeDelta += ` at ${date.getHours()}:${date.getMinutes()}`
    return (
        <div className={Styles.verticalFlex} style={{width: "calc(100vw - 60px - 40px)"}}>
            <div className={Styles.horizontalFlex}>
                <p style={{color: props.message.author.topRole.color ? props.message.author.topRole.color + " !important" : "var(--theme-ui-colors-text)"}} className={Styles.authorText}>
                    {props.message.author.username}#{props.message.author.discriminator}
                </p>
                {props.message.author.topRole.badge ? <Image src={props.message.author.topRole.badge} width={20} height={20} alt=""/> : null}
                {props.message.author.bot ? <div className={Styles.botBadge}>BOT</div> : ""}
                <p style={{color: "#888888", margin: "0", fontSize: "20px"}}>{timeDelta.toString()}</p>
            </div>
        </div>
    )

}

export default Author;
