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
                            <div className={Styles.AutoItem}><a href="https://discord.gg/bPaNnxe"><img src="/socials/Discord.svg"   /><br /><p>discord.gg/bPaNnxe</p></a></div>
                            <div className={Styles.AutoItem}><a href="https://twitter.com/clicksminuteper"><img src="/socials/Twitter.svg"   /><br /><p>@ClicksMinutePer</p></a></div>
                            <div className={Styles.AutoItem}><a href="https://www.instagram.com/clicksminuteper/"><img src="/socials/Instagram.svg" /><br /><p>@ClicksMinutePer</p></a></div>
                        </div>
                    </div>
                    <div className={Styles.SocialsTitle}>
                        <h1 className={Styles.title}>Code</h1>
                        <hr className={Styles.hr} />
                        <div className={Styles.AutoLayout}>
                            <div className={Styles.AutoItem}><a href="https://github.com/ClicksMinutePer"><img src="/socials/Git.svg"   /><br /><p>GitHub</p></a></div>
                            <div className={Styles.AutoItem}><a href=""><img src="/socials/pypi.svg"   /><br /><p>/user/WeNeedALink</p></a></div>
                            <div className={Styles.AutoItem}><a href="https://www.npmjs.com/org/clickminuteper"><img src="/socials/npm.svg" /><br /><p>/org/clicksminuteper</p></a></div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }

}

export default SocialsBlock