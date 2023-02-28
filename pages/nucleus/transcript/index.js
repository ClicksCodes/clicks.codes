import Axios from 'axios';
import React from 'react';

function Index(props) {
    return <>
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
    }}>Nucleus Transcripts</div>
    <div style={{
        height: "100vw",
        width: "100vw",
        backgroundColor: "var(--theme-ui-colors-background)",
        margintop: "-50px",
        padding: "25px",
        paddingTop: "10px",
        transition: "all 0.3s ease-in-out"
    }}>
        <p>{props.humanReadable}</p>
    </div>
</>
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
        code = await Axios.get(`http://localhost:10000/transcript/${ctx.query.code}/human`);
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
            humanReadable: code.data
        }
    }
}