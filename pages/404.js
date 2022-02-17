import Header from '../Components/Header'
import { Component } from 'react'

export default class Home extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<>
				<Header
					name="404"
					subtext="Not Found"
					gradient={["F27878", "D96B6B"]}
					wave="web/waves/header/rsm"
					buttons={[
						{color: "F27878", buttonText: "ffffff", text: "Go Home", link: "/#"},
						{color: "F27878", buttonText: "ffffff", text: "Send Error",
							link: `mailto:staff@clicksminuteper.net?subject=Website%20Error%20Report&body=I%20got%20a%20404%20on%20the%20page%20%5BPlease%20Copy%20Website%20Link%20Here%5D`,
							target: true
					}]}
					hideArrow={true}
					fullscreen={true}
				/>
			</>
		)
	}
}
