import { Component } from 'react'
import Styles from '../styles/pages/errors.module.scss'

class Success extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
        <>
        <div className={Styles.container}>
            <div className={Styles.ServerHeader}>
                <h4><b>404</b> | Page not found</h4>
                <h5>
                    The page you requested could not be found.<br />
                    If you expected this to work, check you didn't make a typo in your URL.<br />
                    <br />
                    You can return to the homepage by clicking <a href="/">here</a>.
                </h5>
            </div>
        </div>
        </>
        )
    }

}

export default Success;