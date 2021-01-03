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
                <h4><b>500</b> | Internal server error</h4>
                <h5>
                    Something went wrong behind the scenes.<br />
                    We don’t know exactly what, but it should be fixed soon.<br />
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