import Header from '../Components/Header'
import {Component} from 'react'

export default class Home extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<>
				<Header
					name="403"
					subtext="Forbidden - You do not have the correct permissions to view this page"
					gradient={["F27878", "D96B6B"]}
					wave="web/waves/header/rsm"
					buttons={[{color: "F27878", buttonText: "ffffff", text: "Go Home", link: "/#"}]}
					hideArrow={true}
					fullscreen={true}
				/>
			</>
		)
	}
}
