import { Component } from 'react'
import Header from '../../../Components/Header'

class Failed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header
                name="Verification failed"
                subtext={<p>Please try again, and if the error persists please contact us at <a href="mailto:verification@clicks.codes" target="_blank" rel="noopener noreferrer">verification@clicks.codes</a></p>}
                gradient={["F27878", "D96B6B"]}
                wave="web/waves/header/nucleus"
                buttons={[]}
                fullscreen={true}
            />
        )
    }

}

export default Failed;