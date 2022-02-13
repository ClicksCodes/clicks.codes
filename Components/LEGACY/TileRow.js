import react, { Component, cloneElement } from "react";
import Styles from '../styles/tilerow.module.css';

class TileRow extends Component {
    constructor(props) {
	super(props);
    }
    render() {
	return (
		<div className={Styles.container}>
		{
		    react.Children.toArray(this.props.children).map((item, index) => {
			if (this.props.divless !== false) { // Intentional comparison to false, initially had a default of false, now has a default of true
			    const className = (item.props.className ? item.props.className + " " : "") + Styles.item

			    const key = index;

			    const props = {
				className,
				key
			    }

			    return cloneElement(item, props);
			} else {
			    return <div className={Styles.item + " " + Styles.fitItemWidth} key={index}>{item}</div>;
			}
		    })
		}
	    </div>
	)
    }
}
export default TileRow;
