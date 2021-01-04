import { Component } from 'react'
import Styles from '../../styles/pages/projects.module.scss'
import Header from '../../components/Projects.js';
import Section from '../../components/section.js';
import Box from '../../components/Box.js';
import Paragraph from '../../components/Paragraph.js';

class GPS extends Component {
    constructor(props) {
        super(props)
    }

    showmore() {
        let el = document.getElementById("viewmore")
        let hc = document.getElementById("hiddenContent")
        el.classList.toggle(Styles.hidden)
        hc.classList.toggle(Styles.hidden)
    }

    render() {
        return (
        <>
            <div>
                <Header 
                    title="GPS"
                    color="blue" 
                    sub="Card matching over Discord"
                    inviteURL="https://discord.com/oauth2/authorize?client_id=679361555732627476&permissions=322624&scope=bot"
                />
                <Section title="features" color="blue" />
                <div className={Styles.boxes}>
                    <Box title="Low latency" color="blue" strapline="Quick responses">We try to keep the response time of GPS as low as possible, so you get the best possible playing experience.</Box>
                    <Box title="High uptime" color="blue" strapline="Always online">We do our best to make sure that we’re always online to play. GPS will only go into maintainance when it’s impossible not to, such as when providing large updates to make your experience better, and we’ll wait for your games to end before doing so.</Box>
                    <Box title="Customisable" color="blue" strapline="Just to your taste">GPS is full of options to make your game more interesting, like shuffles, player timeouts and pack selection - giving you the most enjoyable games possible.</Box>
                </div>
                <Section title="commands" color="blue" />
                <Paragraph
                    text="You can view the full list of commands by doing `$help`"
                />
                <Section title="terms" color="blue" />
                <Paragraph
                    text="In order to run GPS, you need to agree to these terms:"
                />
                <a onClick={this.showmore} id="viewmore">
                    <Paragraph
                        text="Click to read more..."
                    />
                </a>
                <div className={Styles.hidden} id="hiddenContent">
                    <Paragraph text="1) We are not associated in any way with `Cards Against Humanity LLC` - First, the legal stuff. We are not associated with `Cards Against Humanity LLC` (The company that made the original Cards Against Humanity card game). That's also why we called our bot something else. They said we had to credit them and we figured that here was the 100% best place to put it." />
                    <Paragraph text="2) You agree for us to invite ourselves - If you granted the bot the `Create Invite` permission, you agree that we can use this permission to invite the bot developers if you're facing an issue such as an error (or if we really really want a game). If you run a private server and don't want us to join, just deny us the permission." />
                    <Paragraph text="3) You agree that we process some of your data - You agree that we can store information necessary to run the bot, such as your guild's ID, prefixes, pack language, and the time you agreed to these terms. We'll also save your ID, and username with this server's data as the person who agreed to the terms. We won't give any IDs or personally identifiable information (including IDs, and usernames) to anyone apart from the server owner if they request information about who agreed with the `$server` command" />
                    <Paragraph text="4) You agree that we can change these terms - Reading terms is always available from this command, but we may change them at any time. If we change what data we store (so that we store data that it is not clear why we need to store it (so not including server configuration and similar needs)) we will force you to agree again, however if we change what we do with the permissions you give us, we won't. We promise it won't be bad, but as a rule of thumb don't give any bot permissions you don't want it to use (even ours)" />
                </div>
            </div>
            <br /><br /><br />
            <div className={Styles.bottomBar} />
            <Header 
                title="GPS"
                color="blue" 
                sub="Card matching over Discord"
                addToDiscord="https://discord.com/oauth2/authorize?client_id=679361555732627476&permissions=322624&scope=bot"
            />
        </>
        )
    }

}

export default GPS;