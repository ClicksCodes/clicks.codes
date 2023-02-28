import Image from "next/image";
import Styles from "../../styles/Components/transcripts.module.css"

function Author(props) {
    return (
        <div className={Styles.container}>
            <div className={Styles.verticalFlex} style={{width: "60px"}}>
                <Image className={Styles.avatar} src={props.author.avatar ?? "https://picsum.photos/50"} width={50} height={50} alt=""/>  {/* TODO: Add a cync icon here as a default*/}
            </div>
            <div className={Styles.verticalFlex} style={{width: "calc(100vw - 60px - 40px)"}}>
                <div className={Styles.horizontalFlex}>
                    <p style={{color: props.author.topRole.color ? props.author.topRole.color : "var(--theme-ui-colors-text)", margin: "0", fontSize: "20px"}}>
                        {props.author.username}#{props.author.discriminator}
                    </p>
                    {props.author.topRole.badge ? <Image src={props.author.topRole.badge} width={20} height={20} alt=""/> : null}
                    {!props.author.bot ? <div className={Styles.botBadge}>BOT</div> : ""}
                </div>
            </div>
        </div>
    )

}

export default Author;
