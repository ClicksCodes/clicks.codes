import { Component } from 'react'
import Header from '../../../Components/Header'

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
                buttons={[
                    {
                        text: "Add Nucleus to your server",
                        buttonText: "ffffff",
                        link: "https://discord.com/api/oauth2/authorize?client_id=715989276382462053&permissions=121295465718&scope=bot%20applications.commands",
                        color: "65CC76",
                    }
                ]}
                fullscreen={true}
                season={this.props.season}
            />
        )
    }

}

export default Success;