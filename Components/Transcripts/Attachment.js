import Styles from "../../styles/Components/transcripts.module.css"

function attachment(props) {
    return (
        <div className={Styles.attachment}>
            <a className={Styles.attachmentLink} href={props.attachment.url} target="_blank" rel="noreferrer" >{props.attachment.name}</a>
        </div>
    )
}

export default attachment;