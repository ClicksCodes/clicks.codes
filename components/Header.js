import { Component } from 'react';
import Typed from './effects/Typed'
import styles from '../styles/Header.module.css';
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
class HeaderImage extends Component {
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
                <div className={styles.headerImage}/>
                <div className={styles.headerImageContent}>
                    <h2 className={styles.headerImageTitle}>Clicks Minute Per</h2>
                    <hr/>
                    {
                        clicks >= 11 ? 
                            (() => {window.location.href = "../newphrase"; return null})() :
                            <h2 onClick={() => this.setState({phrase: randomExps(this)})} className={styles.headerImageTagline}><Typed>{this.state.phrase}</Typed></h2>
                    }
                </div>
            </>
        );
    }
}

export { HeaderImage };