import { Component } from 'react';
import Link from 'next/link';
import Styles from '../styles/sections/Footer.module.scss';

class Footer extends Component {

    render() {
        return (
            <div className={Styles.Container}>
                <div className={Styles.bar}/>
                <div className={Styles.block}>
                    <div className={Styles.column}>
                        <h1 className={Styles.h1Title}>Projects</h1>
                        <Link href="/projects/rsm"className={Styles.aColor}>RSM</Link>
                        <br />
                        <Link href="/projects/gps" className={Styles.aColor}>Gone Pair Shaped</Link>
                        <br />
                        <Link href="/projects/castaway" className={Styles.aColor}>Castaway</Link>
                        <br />
                    </div>
                    <div className={Styles.column}>
                        <h1 className={Styles.h1Title}>About</h1>
                        <Link href="/about" className={Styles.aColor}>About Us</Link>
                        <br />
                        <Link href="https://status.clicksminuteper.net" className={Styles.aColor}>Status</Link>
                        <br />
                        <Link href="/faq" className={Styles.aColor}>FAQ</Link>
                    </div>
                    <div className={Styles.column}>
                        <h1 className={Styles.h1Title}>Contact</h1>
                        <Link href="mailto:staff@clicksminuteper.net"className={Styles.aColor}>Email</Link>
                        <br />
                        <Link href="https://discord.gg/bPaNnxe" className={Styles.aColor}>Discord</Link>
                        <br />
                    </div>
                </div>
                <div className={Styles.block}>
                    <div className={Styles.socials}>
                        <a href="https://discord.gg/bPaNnxe"><img src="/socials/mono/Discord.svg" height="75%" className={Styles.social}/></a>
                        <a href="https://github.com/ClicksMinutePer"><img src="/socials/mono/Git.svg" height="75%" className={Styles.social}/></a>
                        <a href="https://twitter.com/clicksminuteper"><img src="/socials/mono/Twitter.svg" height="75%" className={Styles.social}/></a>
                        <a href="https://www.instagram.com/clicksminuteper/"><img src="/socials/mono/Insta.svg" height="75%" className={Styles.social}/></a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;