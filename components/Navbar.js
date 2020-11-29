import { Component } from 'react';
import styles from '../styles/Navbar.module.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className={styles.Container}>
                    <div className={styles.navLeft}>
                        <img src="/mouse.svg" height="100%"/>
                        <h1 className={styles.navTitle}>
                            ClicksMinutePer
                        </h1>
                    </div>
                    <div className={styles.navRight}>
                        <a>Projects</a>
                        <a>About us</a>
                        <a>FAQ</a>
                        <a>Contact Us</a>
                    </div>
                </div>
            </>
        );
    }
}

export { NavBar };