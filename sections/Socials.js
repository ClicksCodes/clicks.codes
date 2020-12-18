import { Component } from 'react';
import Styles from '../styles/Socials.module.scss'
import Link from 'next/link'

class SocialsBlock extends Component {

    render() {

        return (
        
            <>
                <div className={Styles.BoxContainer}>
                    <div className={Styles.SocialsTitle}>
                        <h1 className={Styles.title}>Socials</h1>
                        <hr className={Styles.hr} />
                        <div className={Styles.AutoLayout}>
                            <a href="https://discord.gg/bPaNnxe" className={Styles.AutoItem}>
                                <div>
                                    <img src="/socials/colour/Discord.svg"/><br />
                                    <p>discord.gg/bPaNnxe</p>
                                </div>
                            </a>
                            <a href="https://twitter.com/clicksminuteper" className={Styles.AutoItem}>
                                <div>
                                    <img src="/socials/colour/Twitter.svg"/><br />
                                    <p>@ClicksMinutePer</p>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/clicksminuteper/" className={Styles.AutoItem}>
                                <div>
                                    <img src="/socials/colour/insta.svg" /><br />
                                    <p>@ClicksMinutePer</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={Styles.SocialsTitle}>
                        <h1 className={Styles.title}>Code</h1>
                        <hr className={Styles.hr} />
                        <div className={Styles.AutoLayout}>
                            <a href="https://github.com/ClicksMinutePer" className={Styles.AutoItem}>
                                <div>
                                    <img src="/socials/colour/github.svg"   /><br />
                                    <p>/ClicksMinutePer</p>
                                </div>
                            </a>
                            <a href="" className={Styles.AutoItem}>
                                <div>
                                    <img src="/socials/colour/pypi.svg"   /><br />
                                    <p>/user/WeNeedALink</p>
                                </div>
                            </a>
                            <a href="https://www.npmjs.com/org/clickminuteper" className={Styles.AutoItem}>
                                <div>
                                    <img src="/socials/colour/npm.svg" /><br />
                                    <p>/org/clicksminuteper</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }

}

export default SocialsBlock