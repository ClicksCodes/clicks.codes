import HCaptcha from 'react-hcaptcha';
import Axios from 'axios';
import Router from 'next/router';
import React from 'react';
import Header from '../../../Components/Header'
import { useReward } from 'react-rewards';
import { Card, CardRow } from '../../../Components/Card'

import { AutoLayout, Panel, Title, Text, Divider } from '../../../Components/Panels';
import { List, ListItem } from '../../../Components/Texttools';
import { useColorMode } from 'theme-ui';

function Verify(props) {
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
            return
        }
        setClicked(true);
        reward();
        let code = await Axios.post('/api/nucleus/verify/complete', {
            code:"TEST",
            tkn: tkn
        });
        setTimeout(() => {
            if (code.data.success === true ) return Router.push('/nucleus/verify/success','/nucleus/verify')
            else return Router.push('/nucleus/verify/failure','/nucleus/verify')
        }, 2500);
    }

    return <>
        <Header
            name="Clocks finite state machine"
            customImage={"https://i1.sndcdn.com/artworks-000045941811-q634od-t500x500.jpg"}
            roundImage={true}
            subtext={`-5 members`}
            gradient={["F27878", "D96B6B"]}
            wave="web/waves/header/nucleus"
            buttons={[]}
            season={props.season}
        />
        <AutoLayout>
            <Panel>
                <Title>Verify</Title>
                <Divider name="commands"/>
                <Text>Complete the check below to join ERROR</Text>
                <div style={{height: "125px"}}>
                    <HCaptcha
                        id="Captchas mitigate problems"
                        sitekey="85074411-fa13-4d9b-b901-53095c6d1fc6"
                        onVerify={tkn => submitForm(tkn)}
                        theme="dark"
                    />
                </div>
                <List colour="F27878">
                    <ListItem>This is an automatic check performed by Nucleus.</ListItem>
                    <ListItem>By completing the CAPTCHA, you will be given the <code>MISSING</code> role in <code>ERROR</code>.</ListItem>
                    <ListItem>For the full list of data stored by Nucleus, please check <a href="https://clicksminuteper.github.io/policies/nucleus#verification">here</a></ListItem>
                </List>
                <div id="confetti" />
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

export default Verify;
