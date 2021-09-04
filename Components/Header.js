import { Component } from "react";
import Styles from '../styles/header.module.css';

class Header extends Component {
	constructor(props) {
		super(props);
        this.keys = []
	}

	render() {
		return (
            <div className={Styles.header} style={{
                backgroundImage:`linear-gradient(69.44deg, #${this.props.gradient[0]} 0%, #${this.props.gradient[1]} 100%)`,
                margin: "0"
            }} id={this.props.id ? this.props.id : null}>
                <img alt="" className={Styles.backgroundImage} src={`/Headers/${this.props.wave}.svg`} />
                <div className={Styles.panel}>
                    <div className={Styles.titleContainer}>
                        <h1 className={Styles.title}>{this.props.name}</h1>
                    </div>
                    <p className={Styles.subtext + " " + (this.props.buttons.length ? Styles.subtextExtra : null)}>{this.props.subtext}</p>
                    <div className={Styles.buttonLayout}>
                        {
                            this.props.buttons ? this.props.buttons.map((button, index) => {
                                return <a
                                    key={index}
                                    className={Styles.button}
                                    style={{backgroundColor:`#${button.color}`, color:`#${button.buttonText}`}}
                                    href={button.link}
                                    target={button.target ? "_blank" : null}
                                    rel="noreferror">
                                        {button.text}
                                </a>
                            }) : null
                        }
                    </div>
                </div>
                <span className={Styles.arrowSpan + " " + (this.props.hideArrow ? Styles.arrowHidden : null)}>
                    <a href="#start"><img alt="Down arrow" src="/Arrow.svg" className={Styles.arrow} /></a>
                </span>
            </div>
		)
	}
}

export default Header;