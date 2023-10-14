import React, { Component } from 'react'
import Header from '../../../Components/Header'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../../../Components/Panels'
import { Code } from '../../../Components/Texttools'
import { Card, CardRow } from '../../../Components/Card'
import HCaptcha from 'react-hcaptcha';
import { useReward } from 'react-rewards';

function About(props) {
    const { reward, isAnimating } = useReward('confetti', 'confetti', {
        elementSize: 12,
        spread: 85,
        position: "absolute",
        colors: ["#F27878", "#E5AB71", "#E5DC71", "#A1CC65", "#68D49E", "#71AFE5", "#6576CC", "#8D58B2", "#BF5E9F"]
    });

    return (
        <>
            <Header
                name="Nucleus Verification"
                subtext="Remove automated accounts from your server"
                customImage={"https://assets.clicks.codes/web/logos/nucleus.svg"}
                embedImage={"https://assets.clicks.codes/bots/nucleus/normal.png"}
                gradient={["F27878", "D96B6B"]}
                wave="web/waves/header/nucleus"
                buttons={[
                    {color: "424242", buttonText: "FFFFFF", link: "#about", text: "About"},
                    {color: "424242", buttonText: "FFFFFF", link: "#privacy", text: "Privacy"},
                    {color: "F27878", buttonText: "FFFFFF", link: "#invite", text: "Invite"}
                ]}
                season={props.season}
            />
            <AutoLayout>
                <Panel halfSize={false} id="about">
                    <Title>About Verification</Title>
                    <Divider />
                    <Text>Nucleus is designed to help keep your server safe. Verification is how we remove bots from your server.</Text>
                    <Text>Many bot accounts are designed to join and spam in servers, and verification can prevent this easily:</Text>
                    <HCaptcha
                        id="Captchas mitigate problems"
                        sitekey="85074411-fa13-4d9b-b901-53095c6d1fc6"
                        onVerify={reward}
                        theme="dark"
                    />
                    <Text>Users will need to run <Code colour="F27878">/verify</Code> when they join, and will be given a link to complete this check online.</Text>
                    <Text>It is completely free to use verification, and for users to verify.</Text>
                    <div id="confetti" />
                </Panel>
                <Panel halfSize={true} id="privacy">
                    <Title>Privacy</Title>
                    <Divider />
                    <Text>Verification stores the smallest amount of data required to function, and is deleted automatically.</Text>
                    <Text>This includes the user&apos;s ID, the server ID, role name and server icon.</Text>
                    <Text>The full list of data stored by Nucleus can be found <a href="https://clickscodes.github.io/policies/nucleus">here</a>.</Text>
                </Panel>
                <Panel halfSize={true} id="invite">
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
    )
}

export default About;