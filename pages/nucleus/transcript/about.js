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
                name="Nucleus Transcripts"
                subtext="Review purged messages in a channel"
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
                    <Title>About Transcripts</Title>
                    <Divider />
                    <Text>Transcripts are generated whenever a purge command is run, or a ticket is deleted (and transcripts are enabled).</Text>
                    <Text>These store the messages, authors, and the content for future reference.</Text>
                    <Text>When the transcript is created, you will get a link to our website to view it.</Text>
                    <Text>Images and files are not stored, and are not available in transcripts.</Text>
                </Panel>
                <Panel halfSize={true} id="privacy">
                    <Title>Privacy</Title>
                    <Divider />
                    <Text>Transcripts can be viewed by anyone online if they have the URL. These are random to avoid this happening by chance.</Text>
                    <Text>The code is long enough that it is hard to guess any specific code. The URL is not linked to your server in any way.</Text>
                    <Text>All transcripts for your server can be deleted from <Code colour="F27878">/privacy</Code>.</Text>
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