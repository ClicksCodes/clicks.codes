import { Component } from 'react';
import Link from 'next/link';
import Styles from '../styles/Box.module.scss';
//import Modal from 'react-modal';

class Box extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        
        let color;
        switch (this.props.color) {
            case "red":
                color = Styles.red;
                break;
            case "green":
                color = Styles.green;
                break;
            case "blue":
                    color = Styles.blue;
                    break;
            case "lblue":
                color = Styles.lblue
                break
            case "orange":
                color = Styles.orange
                break
            default:
                color = Styles.blue;
        }

        return (
            <div role="main" aria-label={this.props.title} className={Styles.BoxContainer + " " + color}>
                <h2>{this.props.title}</h2>
                <hr className={Styles.hr + " " + color} />
                {(() => {
                    let desc = this.props.children.split("`")
                    return (
                        <>
                            <h3 className={Styles.h3}>{this.props.strapline}</h3>
                            <p className={Styles.description}>{
                                desc.map((item, index) => { 
                                    if (index % 2 == 0) {
                                        return item;
                                    } else {
                                        return <code>{item}</code>;
                                    }
                                })
                            }</p>
                        </>
                    )
                })()}<br/>
                {this.props.more ? <button>More &gt;</button> : null}
            </div>
        );
    }
};

export default Box;