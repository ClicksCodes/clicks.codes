import { Component } from "react";
import Styles from '../styles/cardrow.module.css';

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