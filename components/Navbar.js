import { Component } from 'react';
import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    toggleNav() {
        var sidebar = document.getElementById("sidebar")
        sidebar.classList.toggle(styles.menuOpen)
        sidebar.classList.toggle(styles.menuClosed)
    }
    toggleProjects() {
        var sidebar = document.getElementById("normal")
        sidebar.classList.toggle(styles.hidden)
        sidebar = document.getElementById("projects")
        sidebar.classList.toggle(styles.hidden)
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
                    <div className={styles.navRightMain}>
                        <div className={styles.NormalContents} id="normal">
                            <a onClick={this.toggleProjects}>Projects</a>
                            <a href="/about">About us</a>
                            <a href="/faq">FAQ</a>
                            <a href="mailto:staff@clicksminuteper.net" target="_blank">Contact Us</a>
                        </div>
                        <div className={styles.NormalContents + " " + styles.hidden} id="projects">
                            <a onClick={this.toggleProjects}>Projects</a>
                            <a href="/projects/rsm">RSM</a>
                            <a href="/projects/gps">GPS</a>
                        </div>
                    </div>

                    <button className={styles.navRightBurger} onClick={this.toggleNav}>
                        <img src="/burger.svg" className={styles.BurgerSVG}/>
                    {/* <Menu customBurgerIcon={ <img src="/burger.svg" className={styles.BurgerSVG}/> } className={styles.Burger} right>
                        <a href="/#projects">Projects</a>
                        <a href="/about">About us</a>
                        <a href="/faq">FAQ</a>
                        <a href="mailto:staff@clicksminuteper.net" target="_blank">Contact Us</a>
                    </Menu> */}
                    </button>
                    <div className={styles.menuClosed + " " + styles.menu} id="sidebar">
                        <a href="/#projects">Projects</a>
                        <div className={styles.SubSection}>
                            <a href="/projects/gps">GPS</a>
                            <a href="/projects/rsm">RSM</a>
                        </div>
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
