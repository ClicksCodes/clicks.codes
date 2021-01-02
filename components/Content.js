import { Component } from 'react';
import Typed from './effects/Typed'
import hstyles from '../styles/Header.module.css';
import wnstyles from '../styles/WhatsNew.module.css';
import styles from '../styles/Content.module.css';
import exts from '../public/expansions.json';

var clicks = 1;
var lastNum;

const newNum = () => {
    let i = Math.floor(Math.random() * exts.texts.length);
    if(i===lastNum) {
        i = newNum();
    }
    return i
}

const randomExps = (object) => {
    if(clicks === 9) {
        clicks++;
        return "Coded, Minion, Pineapple";
    }
    if(clicks >= 10) {
        clicks++;
        return;
    }
    let i = newNum();
    let chosen = exts.texts[i];
    console.log(chosen);
    clicks++;
    return chosen
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phrase: "Custom made programs",
            tagline: null
        }
    }
    render() {
        return (
            <>
                <div>
                    <div className={hstyles.headerImage}/>
                    <div className={hstyles.headerImageContent}>
                        <h2 className={hstyles.headerImageTitle}>Clicks Minute Per</h2>
                        <hr className={hstyles.hrAnim}/>
                        {
                            clicks >= 11 ? 
                                (() => {window.location.href = "../newphrase"; return null})() :
                                <h2 onClick={() => this.setState({phrase: randomExps(this)})} className={hstyles.headerImageTagline}><Typed>{this.state.phrase}</Typed></h2>
                        }
                    </div>
                </div>
                <div className={styles.section}>
                    <h1 className={wnstyles.header}>
                        WHAT'S NEW?
                    </h1>
                    <div className={wnstyles.Container}> 
                        evenly spaced
                    </div>
                </div>
            </>
        );
    }
}

export { Content };