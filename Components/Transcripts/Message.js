import Styles from "../../styles/Components/transcripts.module.css"
import Author from "./Author";
import Image from "next/image";
import Attachment from "./Attachment";
import Embed from "./Embed";

function message(props) {

    return (
        <div className={Styles.container}>
            <div className={Styles.verticalFlex} style={{width: "60px"}}>
                <Image className={Styles.avatar} src={props.message.author.iconURL ?? "https://picsum.photos/50"} width={50} height={50} alt=""/>  {/* TODO: Add a cync icon here as a default*/}
            </div>
            <div className={Styles.verticalFlex} style={{width: "calc(100vw - 60px - 40px)"}}>
                <Author message={props.message} />
                <p className={Styles.messageContent}>{props.message.content}</p>
                {
                    props.message.embeds ? props.message.embeds.map((embed, index) => {
                        return <Embed key={index.toString()} embed={embed} />
                    }) : null
                }
                {
                    props.message.attachments ? props.message.attachments.map((attachment, index) => {
                        return <Attachment key={index.toString()} attachment={attachment} alt="" />
                    }) : null
                }
            </div>
        </div>
    )
}

export default message;