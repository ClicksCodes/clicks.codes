import { Component } from 'react'
import Styles from '../../styles/rsmv.module.scss'

class Failed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className={Styles.container}>

            <div className={Styles.ServerHeader}>
                <h4>
                    Verification failed<br />Please try again, and if the error persists please contact us at <a href="mailto:verification@clicksminuteper.net" target="_blank">verification@clicksminuteper.net</a>
                </h4> 
            </div>
        </div>
        )
    }

}

export default Failed;