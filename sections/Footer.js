import { Component } from 'react';
import Link from 'next/link';
import Styles from '../styles/Footer.module.scss';

class Footer extends Component {

    render() {
        return (
            <>
                <svg className={Styles.blackbar}>
                    <rect className={Styles.blackbar}></rect>
                </svg>
                <div className={Styles.blackblock}>
                    <div className={Styles.column}>
                        <h1 className={Styles.h1Title}>Projects</h1>
                        <Link href=""className={Styles.aColor}>RSM</Link>
                        <br />
                        <Link href="" className={Styles.aColor}>Gone Pair Shaped</Link>
                        <br />
                    </div>
                    <div className={Styles.column}>
                        <h1 className={Styles.h1Title}>About</h1>
                        <Link href="" className={Styles.aColor}>About Us</Link>
                        <br />
                        <Link href="" className={Styles.aColor}>Status</Link>
                        <br />
                        <Link href="" className={Styles.aColor}>FAQ</Link>
                    </div>
                    <div className={Styles.column}>
                        <h1 className={Styles.h1Title}>Contact</h1>
                        <Link href=""className={Styles.aColor}>Email</Link>
                        <br />
                        <Link href="" className={Styles.aColor}>Discord</Link>
                        <br />
                    </div>
                </div>
            </>
        )
    }

}

export default Footer;