import { Component } from "react";
import Styles from '../styles/Components/card.module.css';
import react from 'react'
import { withRouter } from "next/router";

class Card extends Component {
	constructor(props) {
		super(props);
    }

	render() {
		return (
            <div className={Styles.card} style={{
                margin: "0"
            }} onClick={this.props.url ? () => { this.props.router.push(this.props.url)} : null}>
                <div className={Styles.backgroundGradient} style={{
                    backgroundImage: `linear-gradient(69.44deg, #${this.props.gradient[0]} 0%, #${this.props.gradient[1]} 100%)`
                }} />
                <img alt="" className={Styles.backgroundImage} src={`https://assets.clicks.codes/web/waves/card/${this.props.wave}.svg`} draggable={false} />
                <div className={Styles.panel} onClick={() => { this.props.url ? () => { this.props.router.push(this.props.url)} : null}}>
                    <div className={Styles.titleContainer}>
                        <img alt="Project icon" className={Styles.image} src={"https://assets.clicks.codes/" + (this.props.icon ? this.props.icon : this.props.wave) + ".svg"} />
                        <h1 className={Styles.title}>{this.props.title}</h1>
                    </div>
                    <p className={Styles.subtext}>{this.props.subtext}</p>
                    <div className={Styles.buttonLayout}>
                        {
                            this.props.buttons ? this.props.buttons.map((button, i) => {
                                return <a
                                    key={i}
                                    className={Styles.button}
                                    style={{backgroundColor:`#${button.color}`, color:`#${this.props.buttonText}`}}
                                    href={button.link}
                                    target={button.newTab ? "_blank" : undefined}
                                    rel="noreferrer">{button.text}
                                </a>
                            }) : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

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

Card = withRouter(Card);

export { Card, CardRow };
