import { Component } from "react";
import Styles from '../styles/sectionheading.module.css';

class SectionHeading extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
            <h1 className={Styles.title} id={this.props.id}>{this.props.title}</h1>
        )
	}
}

export default SectionHeading;