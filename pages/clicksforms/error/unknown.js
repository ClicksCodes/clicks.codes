import { Component } from 'react'
import Header from '../../../Components/Header'

class Failed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header
                name="An error occurred"
                subtext={<p>An unknown error has occurred.<br />Let the server owners know if you believe this is a mistake.</p>}
                gradient={["F27878", "D96B6B"]}
                wave="web/waves/header/rsm"
                buttons={[]}
                hideArrow={true}
                fullscreen={true}
            />
        )
    }

}

export default Failed;