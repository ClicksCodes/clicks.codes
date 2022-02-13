import react, { Component } from "react";
import Styles from '../styles/Components/cardrow.module.css';

class CardRow extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
            <div className={Styles.container}>
				{
					react.Children.toArray(this.props.children).map((item, index) => {
						return <div className={Styles.item} key={index}>{item}</div>
					})
				}
			</div>
        )
	}
}

export default CardRow;