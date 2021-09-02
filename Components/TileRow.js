import { Component } from "react";
import Styles from '../styles/tilerow.module.css';

class CardRow extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
            <div className={Styles.container}>
				{
					this.props.tiles.map((item, index) => {
						return <div className={Styles.item} key={index}>{item}</div>
					})
				}
			</div>
        )
	}
}

export default CardRow;