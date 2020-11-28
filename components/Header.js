import { Component } from 'react';
import Typed from './effects/Typed'
import styles from '../styles/Header.module.css';
import exts from '../public/expansions.json';

var clicks = 0;


const randomExps = () => {
    if(clicks===10) {
        
    }
    let i = Math.floor(Math.random() * exts.texts.length);
    let chosen = exts.texts[i];
    console.log(chosen);
    clicks++;
    return chosen
}



class HeaderImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phrase: "Custom made programs"
        }
    }
    render() {
        return (
            <>
                <div className={styles.headerImage}/>
                <div className={styles.headerImageContent}>
                    <h2 className={styles.headerImageTitle}>Clicks Minute Per</h2>
                    <hr/>
                    <h2 onClick={() => this.setState({phrase: randomExps()})} className={styles.headerImageTagline}><Typed>{this.state.phrase}</Typed></h2>
                </div>
            </>
        );
    }
}

export { HeaderImage };