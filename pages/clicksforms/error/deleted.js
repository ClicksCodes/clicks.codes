import { Component } from 'react'
import Header from '../../../Components/Header'

class Failed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header
                name="Form not found"
                subtext={<p>We could not find that form. Please let the server owners know if you believe this is an mistake.</p>}
                gradient={["F27878", "D96B6B"]}
                wave="web/waves/header/rsm"
                buttons={[]}
                fullscreen={true}
                season={this.props.season}
            />
        )
    }

}

export default Failed;