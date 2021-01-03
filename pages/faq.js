import { Component } from 'react';
import Styles from '../styles/pages/Faq.module.scss';

class FAQ extends Component {

    render(){
    
    return (
        <>
            <h1 className={Styles.text}>We aren't getting a lot of questions</h1>
            <p className={Styles.text}>If you have any, you can <a href="mailto:questions@clicksminuteper.net" target="_blank">contact us</a>, or ask in our <a href="https://discord.gg/bPaNnxe">Discord server</a></p>
            <div style={{"height":"405px"}} />
        </>
    ) 
    
    }

}

export default FAQ