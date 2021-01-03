import { Component } from 'react'
import Styles from '../../styles/pages/projects.module.scss'
import Header from '../../components/Projects.js';
import Section from '../../components/section.js';
import Box from '../../components/Box.js';

class Success extends Component {
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
            <div>
                <Section title="features" color="red" className={Styles.boxes} />
                <div className={Styles.boxes}>
                    <Box title="Easy to use" color="red" strapline="Get strated in seconds">Simple to use and remember commands. RSM will prompt you to add anything if you missed it, like a user or warn message.</Box>
                    <Box title="Security tested" color="red" strapline="All permissions checked">We’ve checked every command on RSM has been tested and is secure, so users can’t break anything in your server. When commands are added to our list, the permissions are taken from the code, ensuring it’s checked.</Box>
                    <Box title="Fast" color="red" strapline="Moderation when you need it most">RSM responds quickly to commands, meaning you can quickly lock down your server if needed with `m!raid`</Box>
                </div>
            </div>
        </div>
        </>
        )
    }

}

export default Success;