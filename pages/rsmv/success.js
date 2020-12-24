import { Component } from 'react'
import Styles from '../../styles/rsmv.module.scss'

class Success extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
        <>
        <div className={Styles.container}>
            <div className={Styles.ServerHeader}>
                <h4>
                    Thank you for verifying.<br />
                    You can now close this tab or window.
                </h4>
            </div>
        </div>
        <div style={{height:"38vh"}}></div>
        </>
        )
    }

}

export default Success;