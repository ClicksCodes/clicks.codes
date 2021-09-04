import { Component } from 'react'
import Styles from '../../styles/rsmv/rsmv.module.css'
import Header from '../../Components/Header'

class Success extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header
                name="Verified"
                subtext="You can now close this tab or window."
                gradient={["65CC76", "60B258"]}
                wave="RM"
                buttons={[]}
                hideArrow={true}
            />
        )
    }

}

export default Success;