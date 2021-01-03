import { Component } from 'react';
import Styles from '../styles/sections/Socials.module.scss'
import Link from 'next/link'

const Social = (props) => {
    return (
        <a href={props.url} className={Styles.Item}>
            <div><img src={props.image}/></div>
            <p>{props.title}</p>
        </a>
    );
}

class SocialsBlock extends Component {

    render() {

        return (
        
            <>
                <div className={Styles.BoxContainer}>
                    <div>
                        <h1 className={Styles.title}>Socials</h1>
                        <hr className={Styles.hr} />
                        <div className={Styles.AutoLayout}>
                            <Social title="discord.gg/bPaNnxe" url="https://discord.gg/bPaNnxe" image="/socials/colour/discord.svg"/>
                            <Social title="@ClicksMinutePer" url="https://twitter.com/clicksminuteper" image="/socials/colour/twitter.svg"/>
                            <Social title="@ClicksMinutePer" url="https://www.instagram.com/clicksminuteper/" image="/socials/colour/insta.svg"/>
                        </div>
                    </div>
                    <div>
                        <h1 className={Styles.title}>Code</h1>
                        <hr className={Styles.hr} />
                        <div className={Styles.AutoLayout}>
                            <Social title="/ClicksMinutePer" url="https://github.com/ClicksMinutePer" image="/socials/colour/github.svg"/>
                            <Social title="/user/ClicksMinutePer" url="https://pypi.org/user/ClicksMinutePer/" image="/socials/colour/pypi.svg"/>
                            <Social title="/org/ClickMinutePer" url="https://www.npmjs.com/org/clickminuteper/" image="/socials/colour/npm.svg"/>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}

export default SocialsBlock
export { Social }
