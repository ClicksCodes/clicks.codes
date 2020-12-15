import { Component } from 'react';
import Styles from '../styles/rsmv.module.scss'


class Page extends Component {

    constructor(props) {
        super(props)
    }

    render() { 
        return <> 
            <div className={Styles.container}>
                <div className={Styles.ServerHeader}>
                    <div className={Styles.ServerHeaderCenter}>
                        <h1>We encountered a problem</h1>
                        <h3>400: The server you requested is not valid</h3>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Page;
