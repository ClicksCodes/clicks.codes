import React from 'react';

function Testing(props) {
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

export default Testing;
export async function getServerSideProps(ctx) {
    if(!ctx.query.code) {
        return {
            redirect: {
                destination: '/nucleus/transcript/about',
                permanent: true
            }
        }
    }
    if (ctx.query.code === "test") {
        return {
            props: {
                humanReadable: "This is a test string! It should render correctly on the page"
            }
        }
    } else {
        return {
            redirect: {
                destination: '/nucleus/transcript/invalid',
                permanent: true
            }
        }
    }
}