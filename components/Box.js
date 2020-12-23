import { Component } from 'react';
import Link from 'next/link';
import Styles from '../styles/Box.module.scss';
import Modal from 'react-modal';
//import data from 'datafile.json';


class Box extends Component {

    constructor(props) {
        super(props);
        //this.info = data[`${props.aid}`];
    }

    render () {
        
        let color;
        switch (this.props.color) {
            case "red":
            case "important":
                color = Styles.red;
                break;
            case "green":
            case "new":
                color = Styles.green;
                break;
            default:
                color = Styles.blue;
        }

        return (
            <div role="main" aria-label={this.props.title} className={Styles.BoxContainer + " " + color}>
                <h2>{this.props.title}</h2>
                <hr className={Styles.hr + " " + color} />
                {(() => {
                    let desc = this.props.children;
                    if (desc.length < 3) return null;
                    if (desc[1].type !== "br") return null;
                    return (
                        <>
                            <h3 className={Styles.h3}>{desc[0]}</h3>
                            <p className={Styles.description}>{desc.slice(2)}</p>
                        </>
                    )
                })()}<br/>
                <button>More &gt;</button>
            </div>
        );
    }
};

export default Box;