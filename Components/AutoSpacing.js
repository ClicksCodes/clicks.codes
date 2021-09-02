import { Component } from "react";
import Styles from '../styles/autospacing.module.css';

class CardRow extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
            <div className={Styles.container}>
				{
					this.props.elements.map((item, index) => {
						return <div className={Styles.item} key={index}>{item}</div>
					})
				}
			</div>
        )
	}
}

export default CardRow;