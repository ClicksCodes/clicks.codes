import { Component } from 'react'
import Styles from '../../styles/projects.module.scss'
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
                title="RSM"
                color="red" 
                sub="Moderation Redefined"
                inviteURL="https://discord.com/oauth2/authorize?client_id=715989276382462053&permissions=499510486&scope=bot"
            />
        </div>
        </>
        )
    }

}

export default Success;