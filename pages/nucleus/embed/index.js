import HCaptcha from 'react-hcaptcha';
import Axios from 'axios';
import Router from 'next/router';
import React from 'react';
import Header from '../../../Components/Header'
import { useReward } from 'react-rewards';
import { Card, CardRow } from '../../../Components/Card';

import { AutoLayout, Panel, Title, Text, Divider } from '../../../Components/Panels';
import { List, ListItem } from '../../../Components/Texttools';
import { useColorMode } from 'theme-ui';
import Styles from '../../../styles/nucleus/embed.module.css';


function Embed(props) {
    const [clicked, setClicked] = React.useState(false);
    const [theme, setTheme] = useColorMode()

    const { reward: reward, isAnimating: isAnimating } = useReward('confetti', 'confetti', {
        elementSize: 10,
        elementCount: 150,
        startVelocity: 35,
        lifetime: 300,
        decay: 0.94,
        spread: 170,
        position: "absolute",
        colors: ["#68D49E"]
    });

    async function submitForm(tkn) {
        if ( clicked ) {
            Router.push('/nucleus/verify/alreadyVerified', '/nucleus/verify/success');
        }
        setClicked(true);
        reward();
        let code = await Axios.post('/api/nucleus/verify/complete', {
            code: props.code,
            tkn: tkn
        });
        setTimeout(() => {
            if (code.data.success === true ) return Router.push('/nucleus/verify/success','/nucleus/verify')
            else return Router.push('/nucleus/verify/failure','/nucleus/verify')
        }, 2500);
    }

    return <>
        <Header
            name="Embed Editor"
            subtext={`Editing embed in ${props.gName}`}
            gradient={["F27878", "D96B6B"]}
            wave="web/waves/header/nucleus"
            buttons={[]}
        />
        <AutoLayout>
            <Panel>
                <Title>Preview</Title>
                <Divider name="preview"/>
                <div className={Styles.previewEmbed}>
                    <div className={Styles.left}></div>
                        <div className={Styles.title}><input ></input></div>
                        <div className={Styles.description}><input ></input></div>
                    </div>
                    <div className={Styles.right}>
                        <div className={Styles.uploadImage} />
                    </div>
                    <>

                    </>
                <div className={Styles.footer}>
                    <ImageUpload size={64} />
                </div>
            </Panel>
            <Panel halfSize={false} id="invite">
            <Title>Invite</Title>
            <Divider />
            <CardRow>
                <Card
                    wave="nucleus"
                    icon="bots/nucleus/circle"
                    buttonText={"FFFFFF"} gradient={["F27878", "D96B6B"]}
                    title="Nucleus"
                    subtext="Invite Nucleus to your server"
                    buttons={[
                        {color: "424242", link: "https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands", text: "Invite"}
                    ]}
                    url="https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands"
                />
            </CardRow>
        </Panel>
        </AutoLayout>
    </>
}

export default Embed;
export async function getServerSideProps(ctx) {
    return {
        props: {
            gID: code.data.gID,
            gName: code.data.gName,
            mID: code.data.mID,
            cID: code.data.cID,
            headers: headers,
            code: ctx.query.code
        }
    }
}