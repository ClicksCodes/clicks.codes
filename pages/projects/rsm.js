import { Component } from 'react'
import Styles from '../../styles/pages/projects.module.scss'
import Header from '../../components/Projects.js';
import Section from '../../components/section.js';
import Box from '../../components/Box.js';
import Paragraph from '../../components/Paragraph.js';

class RSM extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
        <>
            <div className="container">
                <Header 
                    title="RSM"
                    color="red" 
                    sub="Moderation Redefined"
                    inviteURL="https://discord.com/oauth2/authorize?client_id=715989276382462053&permissions=499510486&scope=bot"
                />
                <div className={Styles.bottomBar} />
                <div>
                    <Section title="description" color="red" />
                    <Paragraph
                        text="RSM takes moderation on Discord, and improves it for the user by using easy to remember commands, and giving prompts for missing arguments, for example a user's mention."
                    />
                    <Section title="features" color="red" />
                    <div className={Styles.boxes}>
                        <Box title="Easy to use" color="red" strapline="Get strated in seconds">Simple to use and remember commands. RSM will prompt you to add anything if you missed it, like a user or warn message.</Box>
                        <Box title="Security tested" color="red" strapline="All permissions checked">We’ve checked every command on RSM has been tested and is secure, so users can’t break anything in your server. When commands are added to our list, the permissions are taken from the code, ensuring it’s checked.</Box>
                        <Box title="Fast" color="red" strapline="Moderation when you need it most">RSM responds quickly to commands, meaning you can quickly lock down your server if needed with `m!raid`</Box>
                    </div>
                    <Section title="commands" color="red" />
                    <Paragraph
                        text="The full commands list can be checked on Google Sheets, and will be kept updated with all new commands. Click here to view the spreadsheet."
                        href="http://bit.do/fLQkz"
                    />
                    <Paragraph
                        text="This list is also more extensive than info, as it lists aliases, usage, and longer descriptions, as well as some unlisted commands such as `m!raidrestore`."
                    />
                    <Section title="data" color="red" />
                    <Paragraph
                        text="We have to store all information about a server required to run the bot. This can be cleared at any time by using the `m!setup` command, which deletes all information about your server and sets default values."
                    />
                    <Paragraph
                        text="You can request to delete your data at any time in the Support Server."
                        href="https://discord.gg/bPaNnxe"
                    />
                    <Section title="the future" color="red" />
                    <Paragraph
                        text="RSM has a host of features currently in various stages of development."
                    />
                    <br />
                    <Paragraph text="`[Completed, release planned]` Image moderation - Check for images in your server which contain banned words, or NSFW content."/>
                    <Paragraph text="`[In development]` Web dashboard - Moderate your server online, with extra options and easier setup than normal Discord commands."/>
                    <Paragraph text="`[In development]` Spam prevention - Automatically mute users who are spamming in a chat."/>
                </div>
                <br /><br /><br />
                <div className={Styles.bottomBar} />
                <Header 
                    title="RSM"
                    color="red" 
                    sub="Moderation Redefined"
                    addToDiscord="https://discord.com/oauth2/authorize?client_id=715989276382462053&permissions=499510486&scope=bot"
                />
            </div>
        </>
        )
    }

}

export default RSM;