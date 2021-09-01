import { Component } from "react";
import Styles from '../styles/card.module.css';

class Card extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
            <div className={Styles.background} style={{background:`linear-gradient(69.44deg, #78ECF2 13.64%, #71AFE5 86.36%), #FFFFFF;`,backgroundImage:`url("/Waves/${this.props.wave}.svg")`,width:"528px", height:"264px"}}>
                <div className={Styles.titleScript}>
                    <img className={Styles.image} src={"/Icons/" + this.props.wave + ".svg"} />
                    <h1 className={Styles.title}>{this.props.title}</h1>
                </div>
                <p className={Styles.subtext}>{this.props.subtext}</p>
                <div className={Styles.buttonLayout}>
                    {
                        this.props.buttons ? this.props.buttons.map(button => {
                            return <a className={Styles.button} style={{backgroundColor:button.color}} href={button.link}>{button.text}</a>
                        }) : null
                    }
                </div>
            </div>
		)
	}
}

export default Card;