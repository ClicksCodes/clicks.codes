import { Component } from 'react';
import Styles from '../styles/Socials.module.scss'
import Link from 'next/link'

class SocialsBlock extends Component {

    render() {

        return (
        
            <>
                <div className={Styles.BoxContainer}>
                    <div className={Styles.SocialsTitle}>Socials</div>
                    <hr className={Styles.hr} />
                    <div id="socials" className={Styles.row}>
                        <div className={Styles.column}>
                        <Link href='https://twitter.com/clicksminuteper'><img className={Styles.image} width="150px" src="/socials/twitter.svg" ></img></Link>
                        </div>
                        <div className={Styles.column}>
                        <Link href='https://discord.gg/bPaNnxe'><img className={Styles.image} width="150px" src="/socials/discord.svg" ></img></Link>
                        </div>
                        <div className={Styles.column}>
                        <Link href='https://www.instagram.com/clicksminuteper/'><img className={Styles.image} width="150px" src="/socials/insta.svg" ></img></Link>
                        </div>
                    </div>
                    <div className={Styles.SocialsTitle}>Code</div>
                    <hr className={Styles.hr} />
                    <div id="code" className={Styles.row}>
                        <div className={Styles.column}>
                        <Link href='https://github.com/clicksminuteper'><img className={Styles.image} width="150px" src="/socials/github.svg" ></img></Link>
                        </div>
                        <div className={Styles.column}>
                        <Link href=''><img className={Styles.image} width="150px" src="/socials/pypi.svg" ></img></Link>
                        </div>
                        <div className={Styles.column}>
                        <Link href='https://www.npmjs.com/org/clickminuteper'><img className={Styles.image} width="150px" src="/socials/npm.svg" ></img></Link>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }

}

export default SocialsBlock