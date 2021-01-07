import { Component } from 'react'
import Styles from '../../styles/pages/rsmv.module.scss'
import Link from 'next/link'
class Info extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
        <>
        <div className={Styles.container}>
            <div className={Styles.ServerHeader}>
                <h4>
                    This is RSM's user verification page<br />
                    To set this up in your server you can <Link href="https://discord.com/oauth2/authorize?client_id=715989276382462053&scope=bot&permissions=2147483647&redirect_uri=https%3A%2F%2Fclicksminuteper.net">invite</Link> 
                </h4>
            </div>
        </div>
        <div style={{height:"38vh"}}></div>
        </>
        )
    }

}

export default Info;