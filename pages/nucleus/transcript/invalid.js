import { Component } from 'react'
import Link from 'next/link'
import Header from '../../../Components/Header'

class Failed extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header
                name="Transcript does not exist"
                subtext={<p>No transcripts matched that code. If you believe this is a mistake, please submit a report in <Link href="https://discord.gg/bPaNnxe" target="_blank" rel="noopener noreferrer">our server</Link></p>}
                gradient={["F27878", "D96B6B"]}
                wave="web/waves/header/nucleus"
                buttons={[]}
                fullscreen={true}
                season={this.props.season}
            />
        )
    }

}

export default Failed;