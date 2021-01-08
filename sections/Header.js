import { Component } from 'react';
import Typed from '../components/effects/Typed'
import styles from '../styles/sections/Header.module.scss';
import exts from '../public/expansions.json';

var clicks = 1
var lastNum;

const newNum = () => {
    let i = Math.floor(Math.random() * exts.texts.length);
    if(i===lastNum) {
        i = newNum();
    }
    return i
}

const randomExps = (object) => {
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
            phrase: "Custom Made Programs",
            tagline: null
        }
    }
    render() {
        return (
            <div role="banner" aria-label="main image banner" className={styles.headerImage}>
                <h2 className={styles.headerImageTitle}>Clicks Minute Per</h2>
                <hr className={styles.hr} />
                <h2 onClick={() => this.setState({phrase: randomExps(this)})} className={styles.headerImageTagline}><Typed>{this.state.phrase}</Typed></h2>
            </div>
        );
    }
}

export default HeaderImage;