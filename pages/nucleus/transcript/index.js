import Axios from 'axios';
import React from 'react';
import Message from '../../../Components/Transcripts/Message';

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
        }}>Transcript for: {props.data.for.username}#{props.data.for.discriminator} | In {<a href={`https://discord.com/channels/${props.data.guild}/${props.data.channel}`}>ChannelName</a>} | Type: {props.data.type}</div>
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
    if(!ctx.query.code) {
        return {
            redirect: {
                destination: '/nucleus/transcript/about',
                permanent: true
            }
        }
    }
    let code;
    try {
        code = (await Axios.get(`http://localhost:10000/transcript/${ctx.query.code}`))
    } catch (e) {
        return {
            redirect: {
                destination: '/nucleus/transcript/invalid',
                permanent: true
            }
        }
    }
    return {
        props: {
            data: code.data
        }
    }
}