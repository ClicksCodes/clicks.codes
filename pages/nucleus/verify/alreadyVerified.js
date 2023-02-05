import { Component } from 'react'
import Header from '../../../Components/Header'

class Failed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header
                name="Already verified"
                subtext="You are already verified, and cannot verify again"
                gradient={["65CC76", "60B258"]}
                wave="web/waves/header/nucleus"
                buttons={[]}
                fullscreen={true}
                season={this.props.season}
            />
        )
    }

}

export default Failed;