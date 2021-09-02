import { Component } from "react";
import Styles from '../styles/navbar.module.css';

class NavBar extends Component {
	constructor(props) {
		super(props);
        this.state = {
            isOpen: false
        }
        this.isTouchDevice = false
	}
    
    componentDidMount() {
        let hasTouchScreen = false;
        if ("maxTouchPoints" in navigator) {
            hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ("msMaxTouchPoints" in navigator) {
            hasTouchScreen = navigator.msMaxTouchPoints > 0;
        } else {
            const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
            if (mQ && mQ.media === "(pointer:coarse)") {
                hasTouchScreen = !!mQ.matches;
            } else if ("orientation" in window) {
                hasTouchScreen = true;
            } else {
                var UA = navigator.userAgent;
                hasTouchScreen = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
            }
        }
        if (hasTouchScreen) {
            this.isTouchDevice = true
        } else {
            this.isTouchDevice = false
        }
    }

    onEnter() {
        if ( !this.isTouchDevice ) {
            return this.toggleVertical(this, true)
        }
    }

    onLeave() {
        return this.toggleVertical(this, false)
    }

    onClick() {
        if ( this.isTouchDevice ) {
            return this.toggleVertical(this)
        }
    }

    toggleVertical(prevState, force=null) {
        this.setState(prevState => ({
            isOpen: (force === null) ? !prevState.isOpen : force
        }));
    }

	render() {
		return (
            <>
                <div className={Styles.container + " " + (this.state.isOpen ? Styles.containerOpen : null)} onMouseLeave={() => {this.onLeave()}}>
                    <div className={Styles.group}>
                        <img className={Styles.headerIcon} src="/Icons/CMP.svg" onMouseEnter={() => {this.onEnter()}} onClick={() => {this.onClick()}}/>
                        <a href="/#"><img className={Styles.icon} src="/Icons/CMP.svg"/></a>
                        <a href="/gps#"><img className={Styles.icon} src="/Icons/GS.svg"/></a>
                        <a href="/rsm#"><img className={Styles.icon} src="/Icons/RM.svg"/></a>
                        <a href="/clicksforms#"><img className={Styles.icon} src="/Icons/CF.svg"/></a>
                        {/* <a href="/castaway#"><img className={Styles.icon} src="/Icons/CA.svg"/></a> */}
                        {/* <a href="https://clcks.dev"><img className={Styles.icon} src="/Icons/CL.svg"/></a> */}
                    </div>
                    <div className={Styles.group}>
                        <a href="/#"><img className={Styles.icon} src="/Icons/CMP.svg"/></a>
                    </div>
                </div>
            </>
		)
	}
}

export default NavBar;