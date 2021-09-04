import React, { Component } from "react";
import Styles from '../styles/navbar.module.css';
import Cookies from 'js-cookie';
// import { setInfo } from "../redux/actions/main"
// import { connect } from "react-redux";
// import { makeStore } from "../redux/store";

// const store = makeStore();

class NavBar extends Component {
	constructor(props) {
		super(props);
        this.state = {
            isOpen: false,
            cookie: 'light'
        }
        this.isTouchDevice = false
        this.hoverSensor = React.createRef();
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
        this.setState({
            cookie: Cookies.get('theme')
        })
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

    updateCookie(that) {
        // return () => {
        //     if (that.props.theme == "light") {
        //         that.props.setInfo('dark')
        //     } else {
        //         that.props.setInfo('light')
        //     }
        //     this.setState({
        //         cookie: that.props.theme
        //     })
        //     // store.dispatch();
        // }
    }

	render() {
		return (
            <>
                <div ref={this.hoverSensor} className={this.isTouchDevice ? (Styles.container + " " + (this.state.isOpen ? Styles.containerOpen : null)) : Styles.containerDesktop + " " + Styles.container}>
                    <div className={Styles.group}>
                        <img alt="CMP" className={Styles.headerIcon} src="/Icons/CMP.svg" onClick={() => {this.onClick()}}/>
                        <a href="/#"><img alt="Home" className={Styles.icon} src="/Icons/Homepage.svg"/></a>
                        <a href="/gps#"><img alt="GPS" className={Styles.icon} src="/Icons/GS.svg"/></a>
                        <a href="/rsm#"><img alt="RSM" className={Styles.icon} src="/Icons/RM.svg"/></a>
                        <a href="/clicksforms#"><img alt="ClicksForms" className={Styles.icon} src="/Icons/CF.svg"/></a>
                        {/* <a href="/castaway#"><img className={Styles.icon} src="/Icons/CA.svg"/></a> */}
                        {/* <a href="https://clcks.dev"><img className={Styles.icon} src="/Icons/CL.svg"/></a> */}
                    </div>
                    <div className={Styles.group}>
                        <a onClick={this.updateCookie(this)}><img
                            alt="Theme"
                            className={Styles.icon}
                            src={"light.svg"}
                        /></a>
                    </div>
                </div>
            </>
		)
	}
}


// const mapStateToProps = state => {
//     return { theme: state.main.theme }
// }

// const mapDispatchToProps = {
//     setInfo
// }

// const nav = connect(mapStateToProps, mapDispatchToProps)(NavBar);
// export default nav;

export default NavBar;