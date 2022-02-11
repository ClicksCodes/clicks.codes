import { Component } from 'react'
import Header from '../../../Components/Header'

class Failed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header
                name="No code given"
                subtext={<p>Please enter a form code in the URL</p>}
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