import { Component, useRef } from "react";
import Styles from '../styles/Components/header.module.css';
import Head from 'next/head';

class Header extends Component {
    constructor(props) {
        super(props);
        this.keys = []
    }

    render() {
        return (
            <div className={Styles.header} style={{
                margin: "0",
                minHeight: this.props.fullscreen ? "100vh" : "calc(100vh - (2 * max(2em, 4vw)) - 1em)",
            }} id={this.props.id ? this.props.id : null}>
                <div className={Styles.backgroundGradient} style={{
                    backgroundImage: `linear-gradient(69.44deg, #${this.props.gradient[0]} 0%, #${this.props.gradient[1]} 100%)`,
                }} />
                <Head>
                    <title>{this.props.nameOverwrite ? this.props.nameOverwrite : this.props.name} - Clicks Minute Per</title>
                    <meta name="title" content={this.props.name} />
                    <meta name="og:title" content={this.props.name} />
                    <meta name="description" content={this.props.subtext} />
                    <meta name="og:description" content={this.props.subtext} />
                    <meta name="theme-color" content={"#" + this.props.gradient[1]} />
                    <meta name="og:theme-color" content={"#" + this.props.gradient[1]} />
                    <meta name="author" content="Clicks Minute Per" />
                    <meta name="og:author" content="Clicks Minute Per" />
                </Head>
                <img draggable={false} alt="" className={Styles.backgroundImage} src={`https://assets.clicksminuteper.net/${this.props.wave}.svg`} />
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
                                    style={{ backgroundColor: `#${button.color}`, color: `#${button.buttonText}` }}
                                    href={button.link}
                                    onClick={() => { if (button.id) { this.props.callback(this.props.that, button.id) } }}
                                    target={button.target ? "_blank" : null}
                                    rel="noreferrer">
                                    {button.text}
                                </a>
                            }) : null
                        }
                    </div>
                </div>
                <span className={Styles.arrowSpan + " " + (this.props.hideArrow ? Styles.arrowHidden : null)} draggable={false}>
                    <a href="#start" draggable={false}><img alt="Down arrow" src="https://assets.clicksminuteper.net/web/icons/arrow.svg" className={Styles.arrow} draggable={false} style={{
                        height: "49px", width: "87px"
                    }}/></a>
                </span>
            </div>
        )
    }
}

export default Header;