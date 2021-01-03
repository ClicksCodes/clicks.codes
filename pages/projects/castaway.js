import { Component } from 'react'
import Styles from '../../styles/pages/projects.module.scss'
import Header from '../../components/Projects.js';

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
                color="blue" 
                sub="Stranded On Discord"
                inviteURL="https://discord.com/oauth2/authorize?client_id=757225562816118895&permissions=322624&scope=bot"
            />
        </div>
        </>
        )
    }

}

export default Castaway;