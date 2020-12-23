import { Component } from 'react';
import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div role="navigation" aria-label="navigation bar" className={styles.Container}>
                    <Link href="/">
                        <a className={styles.navLeft}>
                            <img src="/mousemono.svg" height="75%" className={styles.mousemono}/>
                            <span><h1 className={styles.navTitle}>
                                Clicks Minute Per
                            </h1></span>
                        </a>
                    </Link>
                    <div className={styles.navRight}>
                        <a href="/#projects">Projects</a>
                        <a href="/about">About us</a>
                        <a href="/faq">FAQ</a>
                        <a href="mailto:staff@clicksminuteper.net" target="_blank">Contact Us</a>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;