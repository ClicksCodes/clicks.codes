import { Component } from "react";
import Styles from '../styles/subheading.module.css';

class SubHeading extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
            <h2 className={Styles.title} id={this.props.id}>{this.props.children}</h2>
        )
	}
}

export default SubHeading;