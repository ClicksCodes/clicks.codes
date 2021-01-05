import { Component } from 'react'
import Styles from '../../styles/pages/projects.module.scss'
import Header from '../../components/Projects.js';
import Section from '../../components/section.js';
import Box from '../../components/Box.js';

class Castaway extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <>
        <div>
            <Header className={Styles.castawaybg}
                title="Castaway"
                color="castaway" 
                sub="Stranded On Discord"
                inviteURL="https://discord.com/oauth2/authorize?client_id=757225562816118895&permissions=322624&scope=bot"
                sourceURL="https://github.com"
            />
            <div className={Styles.bottomBar} />
            <div className={Styles.Content}>
                <Section title="features" color="lblue" className={Styles.boxes} />
                <div className={Styles.boxes}>
                    <Box title="Work in progress" color="lblue" strapline="It's not finished yet">Please don't actually invite it yet, it's not done.</Box>
                    <Box title="Not a lot more to say" color="lblue" strapline="What were you expecting">It literally isn't finished yet, what were you expecting.</Box>
                    <Box title="A" color="lblue" strapline="B">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Box>
                </div>
                <Section title="commands" color="lblue" className={Styles.boxes} />
                <p className={Styles.p}>
                    Still not a lot I can put here, it's a bot we haven't released. Stop expecting commands. Please.
                </p>
            </div>
        </div>
        </>
        )
    }

}

export default Castaway;