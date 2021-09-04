import { Component } from 'react'
import Header from '../../Components/Header'

class Failed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header
                name="Verification failed"
                subtext={<p>Please try again, and if the error persists please contact us at <a href="mailto:verification@clicksminuteper.net" target="_blank" rel="noopener noreferrer">verification@clicksminuteper.net</a></p>}
                gradient={["F27878", "D96B6B"]}
                wave="RM"
                buttons={[]}
                hideArrow={true}
            />
        )
    }

}

export default Failed;