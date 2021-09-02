import { Component } from "react";
import Styles from '../styles/navbar.module.css';

class NavBar extends Component {
	constructor(props) {
		super(props);
        this.state = {
            isOpen: false
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
                <div className={Styles.container + " " + (this.state.isOpen ? Styles.containerOpen : null)} onMouseLeave={() => {this.toggleVertical(this.state, false)}}>
                    <div className={Styles.group}>
                        <img className={Styles.headerIcon} src="/Icons/CMP.svg" onClick={() => {this.toggleVertical(this.state)}}/>
                        <a href="/"><img className={Styles.icon} src="/Icons/CMP.svg"/></a>
                        <a href="/gps"><img className={Styles.icon} src="/Icons/GS.svg"/></a>
                        <a href="/rsm"><img className={Styles.icon} src="/Icons/RM.svg"/></a>
                        <a href="/clicksforms"><img className={Styles.icon} src="/Icons/CF.svg"/></a>
                    </div>
                    <div className={Styles.group}>
                        <a href="/"><img className={Styles.icon} src="/Icons/CMP.svg"/></a>
                    </div>
                </div>
            </>
		)
	}
}

export default NavBar;