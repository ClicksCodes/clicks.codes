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
    }

    render() {
        const season = this.props.season.filePath;
        return (
            <div className={Styles.cutoffContainer}>
                <div className={Styles.container + " " + (this.props.subBar ? Styles.slideUp : null)}>
                    <a href="#skipNav" className={Styles.skipNav}>Skip navigation</a>
                    <a className={Styles.icon} href="/"><img alt="Clicks" className={Styles.icon} src="https://assets.clicks.codes/web/logos/clicks.svg" /></a>
                    <Divider />
                    <a className={Styles.icon} href="/gps"><img alt="GPS" className={Styles.icon} src={`https://assets.clicks.codes/bots/gps/${season}.svg`} /></a>
                    <a className={Styles.icon} href="/rsm"><img alt="RSM" className={Styles.icon} src={`https://assets.clicks.codes/bots/rsm/${season}.svg`} /></a>
                    {/* <a className={Styles.icon} href="/nucleus#"><img alt="Nucleus" className={Styles.icon} src={`https://assets.clicks.codes/bots/nucleus/${season}.svg`} /></a> */}
                    <a className={Styles.icon} href="/clicksforms"><img alt="ClicksForms" className={Styles.icon} src={`https://assets.clicks.codes/bots/clicksforms/${season}.svg`} /></a>
                    <a className={Styles.icon} href="/hooky"><img alt="Hooky" className={Styles.icon} src={`https://assets.clicks.codes/bots/hooky/${season}.svg`} /></a>
                    <Divider />
                    <ThemeChangeButton/>
                </div>
                <div className={Styles.container + " " + (this.props.subBar ? Styles.slideUp : null)}>{this.props.element}</div>
            </div>
        )
    }
}

export default NavBar;
