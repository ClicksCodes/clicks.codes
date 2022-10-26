import React, { Component } from "react";
import Styles from '../styles/Components/navbar.module.css';
import ThemeChangeButton from './ThemeChangeButton';

class Divider extends Component {
    render() {
        return (
            <>
                <div className={Styles.divider}></div>
            </>
        )
    }
}

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.showSubBar = this.showSubBar.bind(this);
        this.hideSubBar = this.hideSubBar.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.state = {
            subBar: false,
            element: <></>
        }
        this.displayName = "NavBar";
    }

    showSubBar(element, timeout) {
        this.setState({
            subBar: true,
            element: element
        })
        if (timeout) {
            setTimeout(() => {
                this.setState({
                    subBar: false,
                    element: element
                })
                setTimeout(() => {
                    this.setState({
                        subBar: false,
                        element: <></>
                    })
                }, 0.31 * 1000)
            }, timeout * 1000)
        }
    }

    hideSubBar() {
        this.setState({
            subBar: false
        })
    }

    showMessage(text) {
        this.showSubBar(<p className={Styles.message}>{text}</p>, 5)
    }

    render() {
        return (
            <div className={Styles.cutoffContainer}>
                <div className={Styles.container + " " + (this.state.subBar ? Styles.slideUp : null)}>
                    <a href="#skipNav" className={Styles.skipNav}>Skip navigation</a>
                    <a className={Styles.icon} href="/"><img alt="Clicks" className={Styles.icon} src="https://assets.clicks.codes/web/logos/clicks.svg" /></a>
                    <Divider />
                    <a className={Styles.icon} href="/gps"><img alt="GPS" className={Styles.icon} src="https://assets.clicks.codes/bots/gps/circle.svg" /></a>
                    <a className={Styles.icon} href="/rsm"><img alt="RSM" className={Styles.icon} src="https://assets.clicks.codes/bots/rsm/circle.svg" /></a>
                    {/* <a className={Styles.icon} href="/nucleus#"><img alt="Nucleus" className={Styles.icon} src="https://assets.clicks.codes/bots/nucleus/circle.svg" /></a> */}
                    <a className={Styles.icon} href="/clicksforms"><img alt="ClicksForms" className={Styles.icon} src="https://assets.clicks.codes/bots/clicksforms/circle.svg" /></a>
                    <a className={Styles.icon} href="/hooky"><img alt="Hooky" className={Styles.icon} src="https://assets.clicks.codes/bots/hooky/circle.svg" /></a>
                    <Divider />
                    <ThemeChangeButton/>
                    <Divider />
                    <a className={Styles.icon} onClick={() => {this.showMessage("You're mum")}}>More</a>
                </div>
                <div className={Styles.container + " " + (this.state.subBar ? Styles.slideUp : null)}>{this.state.element}</div>
            </div>
        )
    }
}

export default NavBar;
