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
            name={props.guild_name}
            customImage={props.guild_icon_url}
            roundImage={true}
            subtext={`${props.memberCount} members`}
            gradient={["F27878", "D96B6B"]}
            wave="web/waves/header/nucleus"
            buttons={[]}
        />
        <AutoLayout>
            <Panel>
                <Title>Verify</Title>
                <Divider name="commands"/>
                <Text>Complete the check below to join {props.guild_name}</Text>
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
                    <ListItem>By clicking Proceed, you will be given the <code>{props.role_name}</code> role in <code>{props.guild_name}</code>.</ListItem>
                    <ListItem>For the full list of data stored by Nucleus, please check <a href="https://clicksminuteper.github.io/policies/nucleus#verification">here</a></ListItem>
                </List>
                <div id="confetti" />
            </Panel>
        </AutoLayout>
    </>
}

export default Verify;
export async function getServerSideProps(ctx) {
    if(!ctx.query.code) {
        return {
            redirect: {
                destination: '/nucleus/verify/about',
                permanent: true
            }
        }
    }
    let code;
    try {
        await Axios.patch(`http://localhost:10000/verify/${ctx.query.code}`);
        code = await Axios.get(`http://localhost:10000/verify/${ctx.query.code}`, {code: ctx.query.code});
    } catch (e) {
        return {
            redirect: {
                destination: '/nucleus/verify/failure',
                permanent: true
            }
        }
    }
    let headers = ctx.req.headers;
    return {
        props: {
            uID: code.data.uID,
            role_name: code.data.rName,
            gID: code.data.gID,
            guild_name: code.data.gName,
            guild_icon_url: code.data.gIcon,
            memberCount: code.data.mCount,
            headers: headers,
            code: ctx.query.code
        }
    }
}