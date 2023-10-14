import Header from '../Components/Header'
import Marquee from 'react-fast-marquee'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';
import { Component } from 'react';
import Image from 'next/image';

class Supporter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <a style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', backgroundColor: '#6576CC', color: '#FFFFFF',
            paddingInline: '20px', paddingBlock: '0.25rem',
            borderRadius: '10px', boxShadow: '0px -3px 10px 2px #424242'
        }}
        href={this.props.sub.length > 1 ? this.props.sub[1] : "#"}
        title={this.props.sub[0]}
        >{this.props.children}</a>
    }
}


export default function Home(props) {
    const groups = [
        { // Devs and testers
            "TheCodedProf": ["Programmer", "https://github.com/TheCodedProf"],
            "Minion3665": ["Programmer", "https://a.starrysky.fyi"],
            "PineaFan": ["Programmer", "https://github.com/PineaFan"],
            "Eek": ["Programmer", "https://nexy7574.co.uk"],
            "Dilythion": ["Programmer"],
            "Tani": ["Programmer"],
            "CocoboloDesk": ["Clicks Team"],
            "GenElectrovise": ["Plugins"],
            "DOSmile": ["Mentoring"],
            "Zanderp25": ["Programming and design", "https://zanderp25.com"]
        },
        { // Packages
            "react-tiny-popover": ["React popovers (No longer used but we stil love you <3)", "https://www.npmjs.com/package/react-tiny-popover"],
            "react-in-viewport": ["Scroll in effects", "https://www.npmjs.com/package/react-in-viewport"],
            "hcaptcha": ["Nucleus Verify captchas", "https://www.hcaptcha.com"],
            "react-fast-marquee": ["These scrolling sections", "https://www.npmjs.com/package/react-fast-marquee"],
            "theme-ui": ["Checked out the opposite theme?", "https://www.npmjs.com/package/theme-ui"],
            "Nextjs": ["It's all built in Next", "https://nextjs.org"],
            "Discord.py": ["Wouldn't have started Clicks without you <3", "https://discordpy.readthedocs.io"],
            "Discord.js": ["Thanks to the community of devs", "https://discord.js.org"]
        },
        { // Programs
            "Figma": ["Designing", "https://figma.com"],
            "Discord": ["Chatting", "https://discord.com"],
            "Flaticon": ["Icons", "https://flaticon.com"],
            "GitHub": ["Code hosting and GH Pages", "https://github.com"],
            "Gerrit": ["Code hosting", "https://gerritcodereview.com"],
            "NextCloud": ["Self hosted cloud", "https://nextcloud.com"],
            "Cloudflare": ["All DNS and domains - Thanks for staying free <3", "https://cloudflare.com"]
        },
        { // Special thanks
            "InternetMetro": ["Minecraft server building", "https://kendalbentley85.wixsite.com/internetmetro"],
            "Eddy": ["Minecraft server building"],
            "Quantum": ["Thanks for all the suggestions"],
            "LNGZL Development": ["Unscan was great while it lasted, thanks for keeping Nucleus alive", "https://v.lngzl.nl/ez"]
        }
    ]
    return (
        <>
            <Header
                name="Supporters"
                subtext="The people who help Clicks function"
                gradient={["71AFE5", "6576CC"]}
                wave="web/waves/header/clicksforms"
                buttons={[]}
                season={props.season}
            />
            <AutoLayout>
                <Panel halfSize={false}>
                    <Title>Supporters</Title>
                    <Text>People and packages who have helped and are helping Clicks</Text>
                    {
                        groups.map((group, index) => {
                            return (
                                <div key={index} style={{width: "100%"}}>
                                    <Marquee
                                        gradient={false}
                                        style={{width: "100%", height: "30px"}}
                                        speed={Math.floor(Math.random() * (40) + 20)}
                                        direction={"right"}
                                    >
                                        {
                                            Object.keys(groups[index]).map((supporter, index2) => {
                                                return (
                                                    <Supporter key={index2} sub={groups[index][supporter]}>{supporter}</Supporter>
                                                )
                                            })
                                        }
                                    </Marquee>
                                </div>
                            )
                        })
                    }
                    <Image src="/heart.svg" width={100} height={100} alt="<3"/>
                </Panel>
            </AutoLayout>
        </>
    )
}
