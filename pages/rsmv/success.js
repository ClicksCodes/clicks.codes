import { Component } from 'react'
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
                wave="web/waves/header/rsm"
                buttons={[]}
                fullscreen={true}
                season={this.props.season}
            />
        )
    }

}

export default Success;