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
					name="418"
					subtext={<>I&apos;m a teapot<br /><br />The request body was short and stout.<br />Tip me over and pour me out</>}
					gradient={["F27878", "D96B6B"]}
					wave="web/waves/header/rsm"
					buttons={[{color: "F27878", buttonText: "ffffff", text: "Go Home", link: "/#"}]}
					fullscreen={true}
				/>
			</>
		)
	}
}
