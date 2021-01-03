import { Component } from 'react'
import Styles from '../../styles/pages/projects.module.scss'
import Header from '../../components/Projects.js';

class Success extends Component {
    constructor(props) {
        super(props)
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
        </div>
        </>
        )
    }

}

export default Success;