import Header from '../Components/Header'
import Marquee from 'react-fast-marquee'
import { AutoLayout, Panel, Title, Subtitle, Text, Divider } from '../Components/Panels';
import { Component } from 'react';
import Image from 'next/image';
import { Popover } from 'react-tiny-popover';

class Supporter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopoverOpen: false,
        };
    }

    clicked() {
		let content = this.props.children
		navigator.clipboard.writeText(content)
		this.setState({isPopoverOpen: true})
		setTimeout(() => {
			this.setState({isPopoverOpen: false})
		}, 2500)
	}

    render() {
        if ( this.props.clickable === false) {
			return <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', backgroundColor: '#6576CC', color: '#FFFFFF',
                paddingInline: '20px', paddingBlock: '0.25rem',
                borderRadius: '10px', boxShadow: '0px -3px 10px 2px #424242'
            }}>{this.props.children}</div>
		} else {
			return <Popover
                isOpen={this.state.isPopoverOpen}
                positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                content={<Supporter colour={this.props.colour} clickable={false}>{this.props.sub}</Supporter>}
            >
                <div onClick={() => this.clicked()} style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', backgroundColor: '#6576CC', color: '#FFFFFF',
                    paddingInline: '20px', paddingBlock: '0.25rem', marginInline: '5px',
                    borderRadius: '10px'
                }}>{this.props.children}</div>
            </Popover>
		}
    }
}



export default function Home() {
    const groups = [
        { // Devs and testers
            "TheCodedProf": "Programmer",
            "Minion3665": "Programmer",
            "PineappleFan": "Programmer",
            "Eek": "Programmer",
            "Dilythion": "Programmer",
            "Tani": "Programmer",
            "CocoboloDesk": "Legal",
            "GenElectrovise": "Plugins"
        },
        { // Packages
            "react-tiny-popover": "React popovers",
            "react-in-viewport": "Scroll in effects",
            "hcaptcha": "RSM Verify captchas",
            "react-fast-marquee": "These scrolling sections",
            "theme-ui": "Checked out the opposite theme?",
            "Nextjs": "It's all built in Next"
        },
        { // Programs
            "Figma": "Designing - Thanks for staying free <3",
            "Discord": "Chatting",
            "Flaticon": "Icons"
        },
        { // Special thanks
            "InternetMetro": "Minecraft server building",
            "RetroEvelyne": "Minecraft server command blocks",
            "Eddy": "Minecraft server building",
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
                hideArrow={true}
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
                                                    <Supporter key={index} sub={groups[index][supporter]}>{supporter}</Supporter>
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
