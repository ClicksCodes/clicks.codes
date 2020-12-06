import { Component } from 'react';
import styles from '../styles/Navbar.module.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className={styles.Container}>
                    <div className={styles.navLeft}>
                        <img src="/mousemono.svg" height="75%" className={styles.mousemono}/>
                        <span href="../index"><h1 className={styles.navTitle}>
                            ClicksMinutePer
                        </h1></span>
                    </div>
                    <div className={styles.navRight}>
                        <a href="#projects">Projects</a>
                        <a href="./about">About us</a>
                        <a href="./faq">FAQ</a>
                        <a href="./contact">Contact Us</a>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;